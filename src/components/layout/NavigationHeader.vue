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
              <a :href="`#${section.id}`" @click="handleNavClick(section.id)" 
                 :class="{ active: activeSection === section.id }">
                {{ section.label }}
              </a>
            </li>
          </ul>
        </nav>

        <!-- Theme Toggle -->
        <button class="theme-toggle" @click="toggleTheme" :title="isDarkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'">
          <svg v-if="isDarkMode" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="5"/>
            <line x1="12" y1="1" x2="12" y2="3"/>
            <line x1="12" y1="21" x2="12" y2="23"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line x1="1" y1="12" x2="3" y2="12"/>
            <line x1="21" y1="12" x2="23" y2="12"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
          </svg>
          <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        </button>

        <!-- Mobile Menu Button -->
        <button class="mobile-menu-btn" @click="toggleMobileMenu" :class="{ active: isMobileMenuOpen }">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <!-- Mobile Navigation -->
      <nav class="nav-mobile" :class="{ active: isMobileMenuOpen }">
        <ul class="nav-list-mobile">
          <li v-for="section in sections" :key="section.id" class="nav-item-mobile">
            <a :href="`#${section.id}`" @click="handleNavClick(section.id)" 
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
import { useNavigation, useMobileMenu, useTheme } from '@/composables/useNavigation'

const { activeSection, isScrolled, sections, scrollToSection } = useNavigation()
const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useMobileMenu()
const { isDarkMode, toggleTheme } = useTheme()

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
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.header.scrolled {
  background: rgba(255, 255, 255, 0.98);
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
  color: var(--text-primary);
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
  color: var(--text-secondary);
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
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  gap: 4px;
}

.mobile-menu-btn span {
  width: 25px;
  height: 3px;
  background: var(--text-primary);
  border-radius: 2px;
  transition: all 0.3s ease;
}

.mobile-menu-btn.active span:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.mobile-menu-btn.active span:nth-child(2) {
  opacity: 0;
}

.mobile-menu-btn.active span:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

/* Mobile Navigation */
.nav-mobile {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  transform: translateY(-100%);
  opacity: 0;
  transition: all 0.3s ease;
}

.nav-mobile.active {
  transform: translateY(0);
  opacity: 1;
}

.nav-list-mobile {
  list-style: none;
  margin: 0;
  padding: 1rem 0;
}

.nav-item-mobile {
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.nav-item-mobile:last-child {
  border-bottom: none;
}

.nav-item-mobile a {
  display: block;
  text-decoration: none;
  color: var(--text-secondary);
  font-weight: 500;
  padding: 1rem 2rem;
  transition: all 0.3s ease;
}

.nav-item-mobile a:hover,
.nav-item-mobile a.active {
  color: var(--primary-color);
  background: rgba(var(--primary-rgb), 0.05);
}

/* Dark Mode Support */
[data-theme="dark"] .header {
  background: rgba(17, 17, 17, 0.95);
  border-bottom-color: rgba(255, 255, 255, 0.1);
}

[data-theme="dark"] .header.scrolled {
  background: rgba(17, 17, 17, 0.98);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
}

[data-theme="dark"] .nav-mobile {
  background: rgba(17, 17, 17, 0.98);
  border-bottom-color: rgba(255, 255, 255, 0.1);
}

[data-theme="dark"] .nav-item-mobile {
  border-bottom-color: rgba(255, 255, 255, 0.05);
}

/* Responsive Design */
@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }

  .nav-desktop {
    display: none;
  }

  .theme-toggle {
    margin-right: 0.5rem;
  }

  .mobile-menu-btn {
    display: flex;
  }

  .nav-mobile {
    display: block;
  }

  .header-content {
    height: 70px;
  }
}

@media (max-width: 480px) {
  .logo-text,
  .logo-accent {
    font-size: 1.3rem;
  }

  .nav-item-mobile a {
    padding: 0.8rem 1rem;
    font-size: 0.9rem;
  }
}
</style>
