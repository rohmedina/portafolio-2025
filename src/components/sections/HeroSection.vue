<template>
  <section class="hero animate-on-scroll" id="inicio">
    <div class="hero-background">
      <div class="hero-grid"></div>
      <div class="hero-gradient"></div>
    </div>

    <div class="container hero-container">
      <div class="hero-content">
        <div class="hero-text">
          <div class="hero-greeting animate-on-scroll">
            <span class="greeting-emoji">👋</span>
            <span class="greeting-text">¡Hola! Soy</span>
          </div>

          <h1 class="hero-title animate-on-scroll">
            <span class="name-text">Rodrigo Medina Gatica</span>
            <div class="title-animation">
              <span class="typing-text" ref="typingTextRef">{{ currentText }}</span>
              <span class="cursor">|</span>
            </div>
          </h1>

          <p class="hero-description animate-on-scroll">
            Desarrollador Frontend con más de 4 años creando aplicaciones web modernas y escalables.
            Mi especialidad única: combino desarrollo de interfaces excepcionales con
            <strong>automatizaciones N8N</strong> que generan impacto real en los negocios.
          </p>

          <div class="hero-stats animate-on-scroll">
            <div class="stat-item">
              <span class="stat-icon">📍</span>
              <span class="stat-text">Santiago, Chile</span>
            </div>
            <div class="stat-item">
              <span class="stat-icon">💼</span>
              <span class="stat-text">4+ años de experiencia</span>
            </div>
            <div class="stat-item">
              <span class="stat-icon">⚡</span>
              <span class="stat-text">Especialista en N8N</span>
            </div>
          </div>

          <div class="hero-actions animate-on-scroll">
            <BaseButton variant="primary" size="medium" to="#proyectos"
            >
              Ver Proyectos <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </BaseButton>
            <BaseButton variant="outline" size="medium" to="#contacto"
            >
              Contactar <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
            </BaseButton>
          </div>

          <div class="hero-social">
            <a
              href="https://github.com/rodrigomedina"
              target="_blank"
              class="social-btn"
              title="GitHub"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/rodrigo-medina-gatica"
              target="_blank"
              class="social-btn"
              title="LinkedIn"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                />
              </svg>
            </a>
          </div>
        </div>

        <div class="hero-visual">
          <div class="avatar-container">
            <div class="avatar-background"></div>
            <div class="avatar-image">
              <img :src="avatarImage" alt="Rodrigo Medina - Desarrollador" />
            </div>
            <div class="avatar-tech-icons">
              <div class="tech-icon tech-icon-1">
                <img :src="iconAngular" alt="Angular - Framework de desarrollo web" />
              </div>
              <div class="tech-icon tech-icon-2">
                <img :src="iconReact" alt="React - Biblioteca JavaScript para interfaces de usuario" />
              </div>
              <div class="tech-icon tech-icon-3">
                <img :src="iconVue" alt="Vue.js - Framework progresivo de JavaScript" />
              </div>
              <div class="tech-icon tech-icon-4">
                <img :src="iconJavascript" alt="JavaScript - Lenguaje de programación web" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { useSEO, seoConfigs } from "@/composables/useSEO";
import BaseButton from "@/components/ui/BaseButton.vue";

// SEO para la página principal
useSEO(seoConfigs.home);

// Datos estructurados JSON-LD
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Rodrigo Medina Gatica",
  "jobTitle": "Desarrollador Full Stack",
  "description": "Desarrollador Frontend con más de 4 años creando aplicaciones web modernas y escalables, especializado en Vue.js, React, Node.js y automatizaciones N8N.",
  "url": "https://rodrigomedina.dev",
  "sameAs": [
    "https://github.com/rodrigomedina",
    "https://linkedin.com/in/rodrigomedina"
  ],
  "knowsAbout": [
    "Vue.js",
    "React",
    "Node.js",
    "TypeScript",
    "JavaScript",
    "N8N",
    "Desarrollo Frontend",
    "Desarrollo Full Stack"
  ],
  "worksFor": {
    "@type": "Organization",
    "name": "Freelance"
  }
};

// Insertar datos estructurados en el head
if (typeof document !== 'undefined') {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(structuredData);
  document.head.appendChild(script);
}
import avatarImage from '@/assets/images/avatar.png';
import iconAngular from '@/assets/images/angular.svg';
import iconVue from '@/assets/images/vue-js.svg';
import iconJavascript from '@/assets/images/javascript.svg';
import iconReact from '@/assets/images/react.svg';

// ===== TYPING ANIMATION LOGIC =====
const typingTextRef = ref<HTMLElement>();
const currentText = ref("");
const currentTextIndex = ref(0);
const currentCharIndex = ref(0);
const isDeleting = ref(false);
let typingInterval: number | null = null;

// Textos que se van a mostrar en la animación
const texts = [
  "Desarrollador Frontend Senior",
  "Especialista en Vue.js & React",
  "Experto en Automatizaciones N8N",
  "Creador de Soluciones Web",
  "Desarrollador Full Stack",
];

// Configuración de la animación
const config = {
  typingSpeed: 100, // velocidad de escritura (ms)
  deletingSpeed: 50, // velocidad de borrado (ms)
  pauseTime: 2000, // pausa entre textos (ms)
};

// Función principal de la animación de typing
const typeText = () => {
  const currentFulltext = texts[currentTextIndex.value];

  if (!isDeleting.value) {
    // Escribiendo texto
    if (currentCharIndex.value <= currentFulltext.length) {
      currentText.value = currentFulltext.substring(0, currentCharIndex.value);
      currentCharIndex.value++;

      // Cuando termina de escribir, pausa y luego empieza a borrar
      if (currentCharIndex.value > currentFulltext.length) {
        setTimeout(() => {
          isDeleting.value = true;
        }, config.pauseTime);
      }
    }
  } else {
    //Borrado texto
    if (currentCharIndex.value >= 0) {
      currentText.value = currentFulltext.substring(0, currentCharIndex.value);
      currentCharIndex.value--;

      // Cuando termina de borrar, pasa al siguiente texto
      if (currentCharIndex.value < 0) {
        isDeleting.value = false;
        currentTextIndex.value = (currentTextIndex.value + 1) % texts.length;
        currentCharIndex.value = 0;
      }
    }
  }
};

// Inicializar la animación
const startTypingAnimation = () => {
  // Comenzar con el primer texto
  currentText.value = "";
  currentTextIndex.value = 0;
  currentCharIndex.value = 0;
  isDeleting.value = false;

  // Configurar el intervalo
  typingInterval = setInterval(
    () => {
      typeText();
    },
    isDeleting.value ? config.deletingSpeed : config.typingSpeed
  );
};

// Limpiar la animación
const stopTypingAnimation = () => {
  if (typingInterval) {
    clearInterval(typingInterval);
    typingInterval = null;
  }
};

// Lifecycle hooks
onMounted(() => {
  console.log("🎬 Hero Section mounted - Starting typing animation");
  startTypingAnimation();
});

onUnmounted(() => {
  console.log("🛑 Hero Section unmounted - Cleaning up animation");
  stopTypingAnimation();
});
</script>

<style>
@import "@/assets/styles/components/hero.css";
</style>
