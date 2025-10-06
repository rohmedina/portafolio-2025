<template>
  <section class="projects animate-on-scroll" id="proyectos">
    <div class="container">
      <div class="section-header animate-on-scroll">
        <span class="section-badge">Portafolio</span>
        <h2 class="section-title">Proyectos Destacados</h2>
        <p class="section-description">
          Case studies de soluciones que han generado impacto real en los negocios
        </p>
      </div>

      <div class="projects-grid">
        <!-- Project 1: Optimización de Rendimiento Web -->
        <article class="project-card featured animate-on-scroll">
          <div class="project-image">
            <div class="project-placeholder optimization">
              <div class="placeholder-icon">⚡</div>
              <div class="placeholder-text">Optimización Web</div>
            </div>
            <div class="project-overlay">
              <div class="project-actions">
                <a href="#" class="project-btn" target="_blank" title="Ver demo">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"
                    />
                  </svg>
                </a>
                <a href="#" class="project-btn" target="_blank" title="Ver código">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      d="M16 22.027v-2.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 00-1.5-3.75 5.07 5.07 0 00-.09-3.77s-1.18-.35-3.91 1.48a13.38 13.38 0 00-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 005 5.797a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 00-.94 2.58v2.87"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div class="featured-badge">Destacado</div>
          </div>

          <div class="project-content">
            <div class="project-header">
              <h3 class="project-title">Optimización de Rendimiento Web</h3>
              <span class="project-category">Mejoras técnicas - Codelabs</span>
            </div>

            <div class="project-challenge">
              <h4 class="project-section-title">
                <span class="section-icon">🎯</span>
                Problema
              </h4>
              <p>
                Las interfaces de la empresa presentaban tiempos de carga lentos que afectaban
                significativamente la experiencia de usuario y las métricas de engagement.
              </p>
            </div>

            <div class="project-solution">
              <h4 class="project-section-title">
                <span class="section-icon">💡</span>
                Solución
              </h4>
              <p>
                Implementé optimizaciones técnicas avanzadas utilizando Angular, TypeScript y
                herramientas de build modernas para mejorar el rendimiento de las aplicaciones
                existentes.
              </p>
            </div>

            <div class="project-results">
              <h4 class="project-section-title">
                <span class="section-icon">📊</span>
                Resultados
              </h4>
              <ul class="results-list">
                <li>Reducción del 20% en tiempo de carga de interfaces</li>
                <li>Mejora significativa en experiencia de usuario</li>
                <li>Cumplimiento de plazos en proyectos ágiles</li>
                <li>Implementación exitosa en entorno de producción</li>
              </ul>
            </div>

            <div class="project-tech">
              <span class="tech-badge">Angular</span>
              <span class="tech-badge">TypeScript</span>
              <span class="tech-badge">JavaScript ES6+</span>
              <span class="tech-badge">Vite</span>
              <span class="tech-badge">Webpack</span>
            </div>
          </div>
        </article>

        <!-- Project 2: Automatizaciones N8N -->
        <article class="project-card featured animate-on-scroll">
          <div class="project-image n8n-bg">
            <div class="project-placeholder n8n-automation">
              <div class="placeholder-icon">⚡</div>
              <div class="placeholder-text">N8N Automation</div>
            </div>
            <div class="project-overlay">
              <div class="project-actions">
                <a href="#" class="project-btn" target="_blank" title="Ver demo">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"
                    />
                  </svg>
                </a>
                <a href="#" class="project-btn" target="_blank" title="Ver código">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      d="M16 22.027v-2.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 00-1.5-3.75 5.07 5.07 0 00-.09-3.77s-1.18-.35-3.91 1.48a13.38 13.38 0 00-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 005 5.797a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 00-.94 2.58v2.87"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div class="featured-badge">Destacado</div>
          </div>

          <div class="project-content">
            <div class="project-header">
              <h3 class="project-title">Automatizaciones N8N para PyMEs</h3>
              <span class="project-category">Workflow Automation</span>
                <p class="project-summary">
    Automaticé procesos críticos para PyMEs, liberando hasta 10h semanales y aumentando la conversión en 30%.
  </p>
            </div>

            <div class="project-challenge">
              <h4 class="project-section-title">
                <span class="section-icon">🎯</span>
                Problema
              </h4>
              <p>
                Las PyMEs perdían mucho tiempo en tareas repetitivas, reduciendo productividad e incrementando errores.
              </p>
            </div>

            <div class="project-solution">
              <h4 class="project-section-title">
                <span class="section-icon">💡</span>
                Solución
              </h4>
              <p>
                Desarrollé workflows personalizados en N8N conectando sistemas empresariales, con panel de monitoreo en tiempo real y reducción del error humano.
              </p>
            </div>

            <div class="project-results">
              <h4 class="project-section-title">
                <span class="section-icon">📊</span>
                Resultados
              </h4>
              <ul class="results-list">
                <li>40% reducción en tareas manuales de clientes</li>
                <li>Hasta 10 horas semanales liberadas por cliente</li>
                <li>Más de 5 aplicaciones web entregadas</li>
                <li>30% aumento en captación de clientes en primeros 6 meses</li>
              </ul>
            </div>

            <div class="project-tech">
              <span class="tech-badge">N8N</span>
              <span class="tech-badge">REST APIs</span>
              <span class="tech-badge">Webhooks</span>
              <span class="tech-badge">JavaScript</span>
              <span class="tech-badge">Process Automation</span>
            </div>
          </div>
        </article>

        <!-- Project 3: E-commerce WordPress -->
        <article class="project-card featured animate-on-scroll">
          <div class="project-image">
            <div class="project-placeholder wordpress">
              <div class="placeholder-icon">🔧</div>
              <div class="placeholder-text">WordPress E-commerce</div>
            </div>
            <div class="project-overlay">
              <div class="project-actions">
                <a href="#" class="project-btn" target="_blank" title="Ver demo">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"
                    />
                  </svg>
                </a>
                <a href="#" class="project-btn" target="_blank" title="Ver código">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      d="M16 22.027v-2.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 00-1.5-3.75 5.07 5.07 0 00-.09-3.77s-1.18-.35-3.91 1.48a13.38 13.38 0 00-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 005 5.797a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 00-.94 2.58v2.87"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div class="featured-badge">Destacado</div>
          </div>

          <div class="project-content">
            <div class="project-header">
              <h3 class="project-title">E-commerce WordPress Optimizado</h3>
              <span class="project-category">Sitios web de alto rendimiento</span>
            </div>

            <div class="project-challenge">
              <h4 class="project-section-title">
                <span class="section-icon">🎯</span>
                Problema
              </h4>
              <p>
                Los sitios de e-commerce y blogs de los clientes tenían velocidades de carga lentas
                y baja retención de usuarios, impactando negativamente las conversiones.
              </p>
            </div>

            <div class="project-solution">
              <h4 class="project-section-title">
                <span class="section-icon">💡</span>
                Solución
              </h4>
              <p>
                Diseñé y optimicé sitios web utilizando WordPress y Elementor, implementando
                técnicas avanzadas de optimización de rendimiento y mejores prácticas de UX.
              </p>
            </div>

            <div class="project-results">
              <h4 class="project-section-title">
                <span class="section-icon">📊</span>
                Resultados
              </h4>
              <ul class="results-list">
                <li>25% mejora en puntuaciones de PageSpeed</li>
                <li>Mejor retención de usuarios</li>
                <li>3 sitios web de e-commerce optimizados</li>
                <li>Interfaces más intuitivas y conversion-focused</li>
              </ul>
            </div>

            <div class="project-tech">
              <span class="tech-badge">WordPress</span>
              <span class="tech-badge">Elementor</span>
              <span class="tech-badge">CSS3</span>
              <span class="tech-badge">JavaScript</span>
              <span class="tech-badge">PageSpeed Optimization</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Componente Projects - Proyectos destacados
</script>

<style scoped>
/* Projects Section */
.projects {
  padding: 6rem 0;
  background: var(--bg-primary);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.project-card {
  background: var(--bg-secondary);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  border: 1px solid var(--border-color);
  transition: all var(--transition-smooth);
  position: relative;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
  border-color: var(--accent-primary);
}

.project-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.project-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  color: white;
}

.project-placeholder.optimization {
  background: linear-gradient(135deg, #667eea, #764ba2);
}

.project-placeholder.n8n-automation {
  background: linear-gradient(135deg, #f093fb, #f5576c);
}

/* N8N card: use GIF background, keep text legible */
.project-image.n8n-bg {
  background: url('../../assets/images/n8n-automation.gif') center/cover no-repeat,
    linear-gradient(135deg, #f093fb, #f5576c);
}
.project-image.n8n-bg::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(24, 24, 27, 0.4);
  pointer-events: none;
  z-index: 1;
}
.project-image.n8n-bg .project-placeholder {
  background: transparent;
  position: relative;
  z-index: 2;
}
.project-image.n8n-bg .placeholder-text,
.project-image.n8n-bg .placeholder-icon {
  color: #ffffff;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.45);
}

/* Ensure interactive overlay and badge above the dark layer */
.project-overlay { z-index: 3; }
.featured-badge { z-index: 4; }

.project-placeholder.wordpress {
  background: linear-gradient(135deg, #4facfe, #00f2fe);
}

.placeholder-icon {
  font-size: 3rem;
  margin-bottom: 0.5rem;
}

.placeholder-text {
  font-size: 1.1rem;
  font-weight: 600;
  text-align: center;
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity var(--transition-smooth);
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.project-actions {
  display: flex;
  gap: 1rem;
}

.project-btn {
  width: 48px;
  height: 48px;
  background: var(--accent-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  transition: all var(--transition-smooth);
}

.project-btn:hover {
  background: var(--accent-secondary);
  transform: scale(1.1);
}

.featured-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: var(--accent-primary);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: var(--border-radius-full);
  font-size: 0.75rem;
  font-weight: 600;
}

.project-content {
  padding: 2rem;
}

.project-header {
  margin-bottom: 1.5rem;
}

.project-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.project-category {
  color: var(--accent-primary);
  font-size: 0.9rem;
  font-weight: 500;
}

.project-section-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
}

.section-icon {
  font-size: 1.2rem;
}

.project-challenge,
.project-solution,
.project-results {
  margin-bottom: 1.5rem;
}

.project-challenge p,
.project-solution p {
  color: var(--text-secondary);
  line-height: 1.6;
}

.results-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.results-list li {
  color: var(--text-secondary);
  padding: 0.25rem 0;
  position: relative;
  padding-left: 1.5rem;
}

.results-list li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--accent-primary);
  font-weight: bold;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1.5rem;
}

.tech-badge {
  background: var(--bg-tertiary);
  color: var(--text-secondary);
  padding: 0.25rem 0.75rem;
  border-radius: var(--border-radius-full);
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid var(--border-color);
}

/* Responsive */
@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .project-content {
    padding: 1.5rem;
  }

  .project-title {
    font-size: 1.25rem;
  }
}
</style>
