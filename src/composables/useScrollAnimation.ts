import { ref, onMounted, onUnmounted, type Ref } from 'vue'

export function useScrollAnimation() {
  const isVisible = ref(false)
  const elementRef: Ref<HTMLElement | null> = ref(null)

  const observerCallback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        isVisible.value = true
        entry.target.classList.add('animated')
      }
    })
  }

  const observer: Ref<IntersectionObserver | null> = ref(null)

  onMounted(() => {
    if (elementRef.value) {
      observer.value = new IntersectionObserver(observerCallback, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      })
      
      observer.value.observe(elementRef.value)
    }
  })

  onUnmounted(() => {
    if (observer.value && elementRef.value) {
      observer.value.unobserve(elementRef.value)
    }
  })

  return {
    isVisible,
    elementRef
  }
}

// Composable for multiple elements animation
export function useScrollAnimations() {
  const animatedElements: Ref<HTMLElement[]> = ref([])
  const observer: Ref<IntersectionObserver | null> = ref(null)

  const observerCallback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated')
        const element = entry.target as HTMLElement
        const delay = element.dataset.delay || '0'
        
        setTimeout(() => {
          element.style.opacity = '1'
          element.style.transform = 'translateY(0)'
        }, parseInt(delay))
      }
    })
  }

  const initializeObserver = () => {
    observer.value = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    })

    // Observe all elements with animate-on-scroll class
    const elements = document.querySelectorAll('.animate-on-scroll')
    elements.forEach((element, index) => {
      const htmlElement = element as HTMLElement
      htmlElement.dataset.delay = (index * 100).toString() // Stagger animation
      observer.value?.observe(htmlElement)
      animatedElements.value.push(htmlElement)
    })
  }

  onMounted(() => {
    // Wait for DOM to be ready
    setTimeout(initializeObserver, 100)
  })

  onUnmounted(() => {
    if (observer.value) {
      animatedElements.value.forEach(element => {
        observer.value?.unobserve(element)
      })
    }
  })

  return {
    animatedElements,
    initializeObserver
  }
}

// Composable for scroll progress
export function useScrollProgress() {
  const scrollProgress = ref(0)

  const updateScrollProgress = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
    scrollProgress.value = (scrollTop / scrollHeight) * 100
  }

  onMounted(() => {
    window.addEventListener('scroll', updateScrollProgress)
    updateScrollProgress() // Initial calculation
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', updateScrollProgress)
  })

  return {
    scrollProgress
  }
}