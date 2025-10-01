<template>
  <div id="app">
    <!-- Navigation Header -->
    <NavigationHeader />

    <!-- Main Content -->
    <main>
      <!-- Hero Section -->
      <HeroSection id="inicio" />

      <!-- About Section -->
      <AboutSection id="acerca" />

      <!-- Tech Stack Section -->
      <TechStackSection id="tech-stack" />

      <!-- Projects Section -->
      <ProjectsSection id="proyectos" />

      <!-- Experience Section -->
      <ExperienceSection id="experiencia" />

      <!-- Contact Section -->
      <ContactSection id="contacto" />
    </main>

    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script lang="ts">
import NavigationHeader from "@/components/layout/NavigationHeader.vue";
import HeroSection from "@/components/sections/HeroSection.vue";
import AboutSection from "@/components/sections/AboutSection.vue";
import TechStackSection from "@/components/sections/TechStackSection.vue";
import ProjectsSection from "@/components/sections/ProjectsSection.vue";
import ExperienceSection from "@/components/sections/ExperienceSection.vue";
import ContactSection from "@/components/sections/ContactSection.vue";
import AppFooter from "@/components/layout/AppFooter.vue";
import { useScrollAnimations } from "@/composables/useScrollAnimation";

export default {
  name: "App",
  components: {
    NavigationHeader,
    HeroSection,
    AboutSection,
    TechStackSection,
    ProjectsSection,
    ExperienceSection,
    ContactSection,
    AppFooter
  },
  setup() {
    // Inicializar animaciones de scroll
    const { initializeObserver } = useScrollAnimations();

    return {
      initializeObserver
    };
  }
};
</script>

<style>
/* CSS Variables for Light Theme */
:root {
  --primary-color: #3b82f6;
  --primary-rgb: 59, 130, 246;
  --secondary-color: #1e40af;
  --accent-color: #f59e0b;
  --success-color: #10b981;
  --warning-color: #f59e0b;
  --error-color: #ef4444;

  --text-primary: #1f2937;
  --text-secondary: #6b7280;
  --text-muted: #9ca3af;
  --text-inverse: #ffffff;

  --bg-primary: #ffffff;
  --bg-secondary: #f9fafb;
  --bg-tertiary: #f3f4f6;
  --bg-dark: #111827;

  --border-color: #e5e7eb;
  --border-light: #f3f4f6;
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);

  --gradient-primary: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%);
  --gradient-secondary: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  --gradient-hero: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

/* Dark Theme Variables */
[data-theme="dark"] {
  --primary-color: #60a5fa;
  --primary-rgb: 96, 165, 250;
  --secondary-color: #3b82f6;
  --accent-color: #fbbf24;

  --text-primary: #f9fafb;
  --text-secondary: #d1d5db;
  --text-muted: #9ca3af;
  --text-inverse: #111827;

  --bg-primary: #111827;
  --bg-secondary: #1f2937;
  --bg-tertiary: #374151;
  --bg-dark: #030712;

  --border-color: #374151;
  --border-light: #4b5563;
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.3);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.4);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.4);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.4);
}

/* Global Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  line-height: 1.6;
  color: var(--text-primary);
  background-color: var(--bg-primary);
  transition: background-color 0.3s ease, color 0.3s ease;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Typography */
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 700;
  line-height: 1.2;
  color: var(--text-primary);
}

h1 {
  font-size: 3rem;
}
h2 {
  font-size: 2.5rem;
}
h3 {
  font-size: 2rem;
}
h4 {
  font-size: 1.5rem;
}
h5 {
  font-size: 1.25rem;
}
h6 {
  font-size: 1rem;
}

p {
  color: var(--text-secondary);
  margin-bottom: 1rem;
}

a {
  color: var(--primary-color);
  text-decoration: none;
  transition: color 0.3s ease;
}

a:hover {
  color: var(--secondary-color);
}

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
  line-height: 1;
}

.btn-primary {
  background: var(--gradient-primary);
  color: var(--text-inverse);
  border-radius: 20px;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.btn-secondary {
  background: transparent;
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
  border-radius: 20px;
}

.btn-secondary:hover {
  background: var(--primary-color);
  color: var(--text-inverse);
}

/* Footer Styles */
.footer {
  background: var(--bg-dark);
  color: var(--text-inverse);
  padding: 4rem 0 2rem;
  margin-top: 4rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section h3 {
  color: var(--text-inverse);
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.footer-links {
  list-style: none;
}

.footer-links li {
  margin-bottom: 0.5rem;
}

.footer-links a {
  color: var(--text-muted);
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: var(--primary-color);
}

.contact-info p {
  color: var(--text-muted);
  margin-bottom: 0.5rem;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: var(--text-muted);
  transition: all 0.3s ease;
}

.social-link:hover {
  background: var(--primary-color);
  color: var(--text-inverse);
  transform: translateY(-2px);
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 2rem;
  text-align: center;
}

.footer-bottom p {
  color: var(--text-muted);
  margin-bottom: 0.5rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }

  h1 {
    font-size: 2.5rem;
  }
  h2 {
    font-size: 2rem;
  }
  h3 {
    font-size: 1.75rem;
  }

  .footer {
    padding: 3rem 0 1.5rem;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .social-links {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 2rem;
  }
  h2 {
    font-size: 1.75rem;
  }
  h3 {
    font-size: 1.5rem;
  }

  .btn {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }

  .footer {
    padding: 2rem 0 1rem;
  }
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out;
}

.animate-fade-in-left {
  animation: fadeInLeft 0.6s ease-out;
}

.animate-fade-in-right {
  animation: fadeInRight 0.6s ease-out;
}

/* Utility Classes */
.text-center {
  text-align: center;
}
.text-left {
  text-align: left;
}
.text-right {
  text-align: right;
}

.mb-1 {
  margin-bottom: 0.25rem;
}
.mb-2 {
  margin-bottom: 0.5rem;
}
.mb-3 {
  margin-bottom: 0.75rem;
}
.mb-4 {
  margin-bottom: 1rem;
}
.mb-6 {
  margin-bottom: 1.5rem;
}
.mb-8 {
  margin-bottom: 2rem;
}

.mt-1 {
  margin-top: 0.25rem;
}
.mt-2 {
  margin-top: 0.5rem;
}
.mt-3 {
  margin-top: 0.75rem;
}
.mt-4 {
  margin-top: 1rem;
}
.mt-6 {
  margin-top: 1.5rem;
}
.mt-8 {
  margin-top: 2rem;
}

.p-1 {
  padding: 0.25rem;
}
.p-2 {
  padding: 0.5rem;
}
.p-3 {
  padding: 0.75rem;
}
.p-4 {
  padding: 1rem;
}
.p-6 {
  padding: 1.5rem;
}
.p-8 {
  padding: 2rem;
}

.rounded {
  border-radius: 0.375rem;
}
.rounded-lg {
  border-radius: 0.5rem;
}
.rounded-xl {
  border-radius: 0.75rem;
}
.rounded-full {
  border-radius: 9999px;
}

.shadow-sm {
  box-shadow: var(--shadow-sm);
}
.shadow-md {
  box-shadow: var(--shadow-md);
}
.shadow-lg {
  box-shadow: var(--shadow-lg);
}
.shadow-xl {
  box-shadow: var(--shadow-xl);
}
</style>
