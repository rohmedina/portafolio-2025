<script setup lang="ts">
import { computed } from "vue";
import { useNavigation } from "@/composables/useNavigation";

interface Props {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  loading?: boolean;
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
  to?: string; // Nueva prop para navegación
}

// Props con valores por defecto
const props = withDefaults(defineProps<Props>(), {
  variant: "primary",
  size: "medium",
  disabled: false,
  loading: false,
  type: "button",
  fullWidth: false,
});

// Emits para eventos
const emit = defineEmits<{
  click: [event: MouseEvent];
}>();

// Usar el composable de navegación
const { scrollToSection } = useNavigation();

// Función para manejar el click
const handleClick = (event: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    // Si hay una prop 'to', navegar a esa sección
    if (props.to) {
      // Extraer el ID de la sección del hash
      const sectionId = props.to.replace('#', '');
      scrollToSection(sectionId);
    }
    
    emit("click", event);
  }
};

// Clases computadas basadas en las props
const buttonClasses = computed(() => [
  "base-button",
  `base-button--${props.variant}`,
  `base-button--${props.size}`,
  {
    "base-button--disabled": props.disabled,
    "base-button--loading": props.loading,
    "base-button--full-width": props.fullWidth,
  },
]);
</script>

<template>
  <button :class="buttonClasses" :type="type" :disabled="disabled || loading" @click="handleClick">
    <!-- Spinner de carga -->
    <span v-if="loading" class="base-button__spinner">
      <svg class="animate-spin" width="16" height="16" viewBox="0 0 24 24">
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
          fill="none"
          stroke-dasharray="32"
          stroke-dashoffset="32"
        >
          <animate
            attributeName="stroke-dasharray"
            dur="2s"
            values="0 32;16 16;0 32;0 32"
            repeatCount="indefinite"
          />
          <animate
            attributeName="stroke-dashoffset"
            dur="2s"
            values="0;-16;-32;-32"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </span>

    <!-- Contenido del botón -->
    <span :class="{ 'base-button__content--loading': loading }">
      <slot />
    </span>
  </button>
</template>

<style scoped>
.base-button {
  /* Estilos base */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  position: relative;
  overflow: hidden;
  font-weight: 600;
  font-size: 16px;
  gap: var(--space-8);
  padding: var(--space-16) var(--space-24);
  border-radius: var(--radius-full);
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
}

.base-button span{
  display: flex;
  gap: var(--space-4);
}

.base-button:focus {
  outline: 2px solid var(--color-border-hover);
  outline-offset: 2px;
}

/* Variantes de color */
.base-button--primary {
  color: rgb(255, 255, 255);
  box-shadow: rgba(37, 99, 235, 0.35) 0px 8px 30px;
  background: linear-gradient(135deg, rgb(37, 99, 235) 0%, rgb(29, 78, 216) 100%);
}

.base-button--primary:hover:not(:disabled) {
  background-color: #2563eb;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
}

.base-button--secondary {
  background-color: #6b7280;
  color: white;
}

.base-button--secondary:hover:not(:disabled) {
  background-color: #4b5563;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(107, 114, 128, 0.4);
}

.base-button--outline {
  background-color: transparent;
  color: #3b82f6;
  border: 2px solid #3b82f6;
}

.base-button--outline:hover:not(:disabled) {
  background-color: #3b82f6;
  color: white;
  transform: translateY(-1px);
}

.base-button--ghost {
  background-color: transparent;
  color: #374151;
}

.base-button--ghost:hover:not(:disabled) {
  background-color: #f3f4f6;
  transform: translateY(-1px);
}

.base-button--danger {
  background-color: #ef4444;
  color: white;
}

.base-button--danger:hover:not(:disabled) {
  background-color: #dc2626;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(239, 68, 68, 0.4);
}

/* Tamaños */
.base-button--small {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  min-height: 2rem;
}

.base-button--medium {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  min-height: 2.5rem;
}

.base-button--large {
  padding: 1rem 2rem;
  font-size: 1.125rem;
  min-height: 3rem;
}

/* Estados */
.base-button--disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none !important;
  box-shadow: none !important;
}

.base-button--loading {
  cursor: wait;
}

.base-button--full-width {
  width: 100%;
}

/* Spinner */
.base-button__spinner {
  display: flex;
  align-items: center;
  justify-content: center;
}

.base-button__content--loading {
  opacity: 0.7;
}

/* Animación del spinner */
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}

/* Efecto ripple al hacer click */
.base-button::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.base-button:active::before {
  width: 300px;
  height: 300px;
}
</style>
