import { useHead } from '@vueuse/head'

interface SEOOptions {
  title?: string
  description?: string
  keywords?: string
  ogImage?: string
  canonical?: string
}

export function useSEO(options: SEOOptions = {}) {
  const defaultTitle = 'Rodrigo Medina - Desarrollador Full Stack | Portfolio'
  const defaultDescription = 'Portfolio de Rodrigo Medina, desarrollador Full Stack especializado en Vue.js, React, Node.js y tecnologías modernas. Descubre mis proyectos y experiencia.'
  const defaultKeywords = 'desarrollador full stack, vue.js, react, node.js, javascript, typescript, portfolio, rodrigo medina'
  const defaultOgImage = 'https://rodrigomedina.dev/og-image.jpg'
  const baseUrl = 'https://rodrigomedina.dev'

  const {
    title = defaultTitle,
    description = defaultDescription,
    keywords = defaultKeywords,
    ogImage = defaultOgImage,
    canonical = baseUrl
  } = options

  useHead({
    title,
    meta: [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      
      // Open Graph
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: ogImage },
      { property: 'og:url', content: canonical },
      
      // Twitter
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: ogImage },
    ],
    link: [
      { rel: 'canonical', href: canonical }
    ]
  })

  return {
    updateSEO: (newOptions: SEOOptions) => {
      useSEO({ ...options, ...newOptions })
    }
  }
}

// Configuraciones específicas para cada sección
export const seoConfigs = {
  home: {
    title: 'Rodrigo Medina - Desarrollador Full Stack | Portfolio',
    description: 'Portfolio de Rodrigo Medina, desarrollador Full Stack especializado en Vue.js, React, Node.js y tecnologías modernas.',
    keywords: 'desarrollador full stack, vue.js, react, node.js, javascript, typescript, portfolio, rodrigo medina',
    canonical: 'https://rodrigomedina.dev/'
  },
  projects: {
    title: 'Proyectos - Rodrigo Medina | Desarrollador Full Stack',
    description: 'Explora los proyectos de desarrollo web y aplicaciones que he creado usando Vue.js, React, Node.js y otras tecnologías modernas.',
    keywords: 'proyectos web, vue.js, react, node.js, aplicaciones web, desarrollo frontend, desarrollo backend',
    canonical: 'https://rodrigomedina.dev/#proyectos'
  },
  experience: {
    title: 'Experiencia - Rodrigo Medina | Desarrollador Full Stack',
    description: 'Conoce mi experiencia profesional como desarrollador Full Stack, las tecnologías que domino y los logros alcanzados.',
    keywords: 'experiencia laboral, desarrollador senior, vue.js, react, node.js, javascript, typescript',
    canonical: 'https://rodrigomedina.dev/#experiencia'
  },
  contact: {
    title: 'Contacto - Rodrigo Medina | Desarrollador Full Stack',
    description: 'Ponte en contacto conmigo para proyectos de desarrollo web, colaboraciones o oportunidades laborales.',
    keywords: 'contacto, desarrollador freelance, colaboraciones, proyectos web, desarrollo a medida',
    canonical: 'https://rodrigomedina.dev/#contacto'
  }
}