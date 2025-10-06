import { ref, onMounted, onUnmounted, type Ref } from 'vue'

// Types
interface NavigationSection {
  id: string
  label: string
}

export function useNavigation() {
  const activeSection: Ref<string> = ref('inicio')
  const isScrolled: Ref<boolean> = ref(false)

  // Navigation sections
  const sections: NavigationSection[] = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'acerca', label: 'Acerca' },
    { id: 'tech-stack', label: 'Tech Stack' },
    { id: 'proyectos', label: 'Proyectos' },
    { id: 'experiencia', label: 'Experiencia' },
    { id: 'contacto', label: 'Contacto' }
  ]

  // Scroll handler for active section detection
  const handleScroll = (): void => {
    isScrolled.value = window.scrollY > 50
    
    // Update active section based on scroll position
    for (const section of sections) {
      const element = document.getElementById(section.id)
      if (element) {
        const rect = element.getBoundingClientRect()
        const offset = 100 // Offset for header height
        
        if (rect.top <= offset && rect.bottom >= offset) {
          activeSection.value = section.id
          break
        }
      }
    }
  }

  // Smooth scroll to section
  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId)
    if (element) {
      // Detectar altura real del header fijo
      const headerEl = document.querySelector('.header') as HTMLElement | null
      const headerHeight = headerEl ? headerEl.offsetHeight : 80
      // Compensar posible margen extra en mobile
      const extraOffset = window.innerWidth <= 768 ? 10 : 0
      const elementPosition = element.offsetTop - headerHeight - extraOffset

      window.scrollTo({
        top: Math.max(elementPosition, 0),
        behavior: 'smooth'
      })
    }
  }

  // Get section by ID
  const getSectionById = (id: string): NavigationSection | undefined => {
    return sections.find(section => section.id === id)
  }

  // Get next section
  const getNextSection = (currentId: string): NavigationSection | null => {
    const currentIndex = sections.findIndex(section => section.id === currentId)
    return currentIndex < sections.length - 1 ? sections[currentIndex + 1] : null
  }

  // Get previous section
  const getPreviousSection = (currentId: string): NavigationSection | null => {
    const currentIndex = sections.findIndex(section => section.id === currentId)
    return currentIndex > 0 ? sections[currentIndex - 1] : null
  }

  // Lifecycle hooks
  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return {
    activeSection,
    isScrolled,
    sections,
    scrollToSection,
    getSectionById,
    getNextSection,
    getPreviousSection
  }
}

// Composable for mobile menu
export function useMobileMenu() {
  const isMobileMenuOpen: Ref<boolean> = ref(false)

  const toggleMobileMenu = (): void => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
  }

  const closeMobileMenu = (): void => {
    isMobileMenuOpen.value = false
  }

  const openMobileMenu = (): void => {
    isMobileMenuOpen.value = true
  }

  // Close menu when clicking outside
  const handleClickOutside = (event: Event): void => {
    const target = event.target as Element
    if (isMobileMenuOpen.value && 
        !target.closest('.header') && 
        !target.closest('.mobile-menu-btn') &&
        !target.closest('.nav-mobile')) {
      closeMobileMenu()
    }
  }

  // Close menu on escape key
  const handleEscapeKey = (event: KeyboardEvent): void => {
    if (event.key === 'Escape' && isMobileMenuOpen.value) {
      closeMobileMenu()
    }
  }

  onMounted(() => {
    // Use setTimeout to ensure DOM is ready
    setTimeout(() => {
      document.addEventListener('click', handleClickOutside)
      document.addEventListener('keydown', handleEscapeKey)
    }, 100)
  })

  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
    document.removeEventListener('keydown', handleEscapeKey)
  })

  return {
    isMobileMenuOpen,
    toggleMobileMenu,
    closeMobileMenu,
    openMobileMenu
  }
}

// Composable for theme management
export function useTheme() {
  const currentTheme: Ref<string> = ref('light')
  const isDarkMode: Ref<boolean> = ref(false)

  const toggleTheme = (): void => {
    isDarkMode.value = !isDarkMode.value
    currentTheme.value = isDarkMode.value ? 'dark' : 'light'
    
    // Apply theme to document
    document.documentElement.setAttribute('data-theme', currentTheme.value)
    
    // Save to localStorage
    localStorage.setItem('theme', currentTheme.value)
  }

  const setTheme = (theme: string): void => {
    currentTheme.value = theme
    isDarkMode.value = theme === 'dark'
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }

  const initializeTheme = (): void => {
    // Check localStorage first
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setTheme(savedTheme)
      return
    }

    // Check system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setTheme(prefersDark ? 'dark' : 'light')
  }

  onMounted(() => {
    initializeTheme()
    
    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleThemeChange = (e: MediaQueryListEvent): void => {
      if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light')
      }
    }
    
    mediaQuery.addEventListener('change', handleThemeChange)
    
    // Cleanup
    onUnmounted(() => {
      mediaQuery.removeEventListener('change', handleThemeChange)
    })
  })

  return {
    currentTheme,
    isDarkMode,
    toggleTheme,
    setTheme,
    initializeTheme
  }
}
