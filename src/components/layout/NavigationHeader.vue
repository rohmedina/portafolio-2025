<template>
  <header class="header" :class="{ 'scrolled': isScrolled }">
    <div class="container">
      <div class="header-content">
        <!-- Logo -->
        <div class="logo">
          <a href="#inicio" @click="scrollToSection('inicio')">
            <span class="logo-text">Rodrigo</span>
            <span class="logo-accent">Dev</span>
          </a>
        </div>

        <!-- Desktop Navigation -->
        <nav class="nav-desktop">
          <ul class="nav-list">
            <li v-for="section in sections" :key="section.id" class="nav-item">
              <a :href="`#${section.id}`" @click.prevent="handleNavClick(section.id)"
                 :class="{ active: activeSection === section.id }">
                {{ section.label }}
              </a>
            </li>
          </ul>
        </nav>

        <!-- Mobile Menu Button -->
        <button
          class="mobile-menu-btn"
          @click.stop="toggleMobileMenu"
          :class="{ active: isMobileMenuOpen }"
          aria-label="Toggle mobile menu"
          :aria-expanded="isMobileMenuOpen"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <!-- Mobile Navigation -->
      <nav class="nav-mobile" :class="{ active: isMobileMenuOpen }" @click.stop>
        <ul class="nav-list-mobile">
          <li v-for="section in sections" :key="section.id" class="nav-item-mobile">
            <a :href="`#${section.id}`" @click.prevent="handleNavClick(section.id)"
               :class="{ active: activeSection === section.id }">
              {{ section.label }}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useNavigation, useMobileMenu } from '@/composables/useNavigation'

const { activeSection, isScrolled, sections, scrollToSection } = useNavigation()
const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useMobileMenu()

// Handle navigation click
const handleNavClick = (sectionId: string) => {
  scrollToSection(sectionId)
  closeMobileMenu()
}
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: var(--color-background);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--color-border);
  transition: all 0.3s ease;
}

.header.scrolled {
  background: var(--color-background-soft);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
}

/* Logo */
.logo a {
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.2rem;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-heading);
}

.logo-accent {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-color);
}

/* Desktop Navigation */
.nav-desktop {
  display: flex;
  align-items: center;
}

.nav-list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;
}

.nav-item a {
  text-decoration: none;
  color: var(--color-text);
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
}

.nav-item a:hover {
  color: var(--primary-color);
  background: rgba(var(--primary-rgb), 0.1);
}

.nav-item a.active {
  color: var(--primary-color);
  background: rgba(var(--primary-rgb), 0.1);
}

.nav-item a.active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 2px;
  background: var(--primary-color);
  border-radius: 1px;
}

/* Theme Toggle */
.theme-toggle {
  background: none;
  border: none;
  color: var(--text-secondary);
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
}

.theme-toggle:hover {
  color: var(--primary-color);
  background: rgba(var(--primary-rgb), 0.1);
}

/* Mobile Menu Button */
.mobile-menu-btn {
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.75rem;
  gap: 4px;
  z-index: 1001;
  position: relative;
  width: 44px;
  height: 44px;
  border-radius: 8px;
  transition: background-color 0.3s ease;
}

.mobile-menu-btn:hover {
  background: rgba(var(--primary-rgb), 0.1);
}

.mobile-menu-btn span {
  width: 24px;
  height: 3px;
  background: var(--text-primary);
  border-radius: 2px;
  transition: all 0.3s ease;
  transform-origin: center;
  display: block;
}

.mobile-menu-btn.active span:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.mobile-menu-btn.active span:nth-child(2) {
  opacity: 0;
  transform: scale(0);
}

.mobile-menu-btn.active span:nth-child(3) {
  transform: rotate(-45deg) translate(3px, -3px);
}

/* Mobile Navigation */
.nav-mobile {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: var(--color-background);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--color-border);
  transform: translateY(-100%);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 1000;
}

.nav-mobile.active {
  transform: translateY(0);
  opacity: 1;
  visibility: visible;
}

.nav-list-mobile {
  list-style: none;
  margin: 0;
  padding: 1rem 0;
}

.nav-item-mobile {
  border-bottom: 1px solid var(--color-border);
}

.nav-item-mobile:last-child {
  border-bottom: none;
}

.nav-item-mobile a {
  display: block;
  text-decoration: none;
  color: var(--color-text);
  font-weight: 500;
  padding: 1rem 2rem;
  transition: all 0.3s ease;
}

.nav-item-mobile a:hover,
.nav-item-mobile a.active {
  color: var(--primary-color);
  background: rgba(var(--primary-rgb), 0.05);
}

/* Dark Mode Support handled by global variables in base.css */

/* Responsive Design */
@media (max-width: 998px) {
  .container {
    padding: 0 1rem;
  }

  .header-content {
    height: 70px;
    gap: 1rem;
  }

  .nav-desktop {
    display: none;
  }

  .theme-toggle {
    display: none; /* Ocultar en móvil para más espacio */
  }

  .mobile-menu-btn {
    display: flex;
    flex-shrink: 0;
  }

  .nav-mobile {
    display: block;
  }

  .logo {
    flex: 1;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 0.75rem;
  }

  .header-content {
    height: 65px;
    gap: 0.5rem;
  }

  .logo-text,
  .logo-accent {
    font-size: 1.3rem;
  }

  .mobile-menu-btn {
    width: 40px;
    height: 40px;
    padding: 0.5rem;
  }

  .mobile-menu-btn span {
    width: 20px;
    height: 2px;
  }

  .nav-item-mobile a {
    padding: 0.8rem 1rem;
    font-size: 0.9rem;
  }
}
</style>
