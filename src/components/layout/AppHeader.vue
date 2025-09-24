<template>
  <header class="header" :class="{ scrolled: isScrolled }">
    <nav class="nav-container">
      <!-- Brand/Logo -->
      <div class="nav-brand">
        <router-link to="/" class="nav-logo">
          <span class="logo-text">Rodrigo Medina</span>
          <span class="logo-dot">.</span>
        </router-link>
      </div>

      <!-- Navigation Menu -->
      <ul class="nav-menu" :class="{ active: isMobileMenuOpen }">
        <li v-for="item in navigationItems" :key="item.id">
          <a
            :href="item.href"
            class="nav-link"
            :class="{ active: activeSection === item.id }"
            @click="handlenavClick(item.id)"
          >
            {{ item.label }}
          </a>
        </li>
      </ul>

      <!-- Mobile Menu Toggle -->
      <button
        class="nav-toggle"
        :class="{ active: isMobileMenuOpen }"
        aria-label="Toggle Navigation menu"
        @click="toggleMobileMenu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

// ===== REACTIVE STATE =====
const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);
const activeSection = ref("inicio");

// ===== NAVIGATION DATA =====
const navigationItems = [
  { id: "inicio", label: "Inicio", href: "#inicio" },
  { id: "acerca", label: "Acerca", href: "#acerca" },
  { id: "tech-stack", label: "Tech Stack", href: "#tech-stack" },
  { id: "proyectos", label: "Proyectos", href: "#proyectos" },
  { id: "experiencia", label: "Experiencia", href: "#experiencia" },
  { id: "contacto", label: "Contacto", href: "#contacto" },
];

// ===== METHODS =====
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const handlenavClick = (sectionId: string) => {
  activeSection.value = sectionId;
  isMobileMenuOpen.value = false; // close mobile menu on click
};

// ===== LIFECYCLE HOOKS =====
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style>
@import '@/assets/styles/components/header.css';
</style>
