<template>
  <section class="tech-stack" id="tech-stack">
    <div class="container">
      <div class="section-header">
        <span class="section-badge">Tecnologías</span>
        <h2 class="section-title">Mi Stack Tecnológico</h2>
        <p class="section-description">
          Herramientas y frameworks con los que construyo soluciones web modernas y escalables
        </p>
      </div>

      <!-- Frontend Technologies -->
      <div class="tech-category">
        <h3 class="category-title">
          <span class="category-icon">⚡</span>
          Frontend Development
        </h3>
        <div class="tech-grid">
          <div class="tech-card expert">
            <div class="tech-icon"><img :src="iconAngular" alt="Angular" /></div>
            <div class="tech-content">
              <h4 class="tech-name">Angular 12+</h4>
              <span class="tech-level expert">Experto</span>
              <span class="tech-experience">4 años</span>
              <p class="tech-description">Framework principal para SPAs empresariales</p>
            </div>
          </div>

          <div class="tech-card advanced">
            <div class="tech-icon"><img :src="iconReact" alt="React" /></div>
            <div class="tech-content">
              <h4 class="tech-name">React 18</h4>
              <span class="tech-level advanced">Avanzado</span>
              <span class="tech-experience">3 años</span>
              <p class="tech-description">Desarrollo con hooks y componentes funcionales</p>
            </div>
          </div>

          <div class="tech-card advanced">
            <div class="tech-icon"><img :src="iconVue" alt="Vue.js" /></div>
            <div class="tech-content">
              <h4 class="tech-name">Vue.js 3</h4>
              <span class="tech-level advanced">Avanzado</span>
              <span class="tech-experience">2 años</span>
              <p class="tech-description">Certificado por Desafío Latam</p>
            </div>
          </div>

          <div class="tech-card expert">
            <div class="tech-icon"><img :src="iconTypeScript" alt="TypeScript" /></div>
            <div class="tech-content">
              <h4 class="tech-name">TypeScript</h4>
              <span class="tech-level expert">Experto</span>
              <span class="tech-experience">4 años</span>
              <p class="tech-description">
                Tipado fuerte para aplicaciones escalables y mantenibles
              </p>
            </div>
          </div>

          <div class="tech-card expert">
            <div class="tech-icon"><img :src="iconJavascript" alt="JavaScript" /></div>
            <div class="tech-content">
              <h4 class="tech-name">JavaScript ES6+</h4>
              <span class="tech-level expert">Experto</span>
              <span class="tech-experience">4+ años</span>
              <p class="tech-description">Fundamentos sólidos y features modernas</p>
            </div>
          </div>

          <div class="tech-card expert">
            <div class="tech-icon">🎨</div>
            <div class="tech-content">
              <h4 class="tech-name">HTML5 & CSS3</h4>
              <span class="tech-level expert">Experto</span>
              <span class="tech-experience">4+ años</span>
              <p class="tech-description">Semántica, accesibilidad y responsive design</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Tools & Automation -->
      <div class="tech-category">
        <h3 class="category-title">
          <span class="category-icon">🔧</span>
          Herramientas & Automatizaciones
        </h3>
        <div class="tech-grid">
          <div class="tech-card specialty">
            <div class="tech-icon special">⚡</div>
            <div class="tech-content">
              <h4 class="tech-name">N8N</h4>
              <span class="tech-level specialty">Especialista Certificado</span>
              <span class="tech-experience">2 años</span>
              <p class="tech-description">Automatizaciones que reducen 40% tareas manuales</p>
              <div class="specialty-badge">Especialidad única</div>
            </div>
          </div>

          <div class="tech-card advanced">
            <div class="tech-icon">🔧</div>
            <div class="tech-content">
              <h4 class="tech-name">WordPress & Elementor</h4>
              <span class="tech-level advanced">Avanzado</span>
              <span class="tech-experience">2 años</span>
              <p class="tech-description">E-commerce optimizado con 25% mejora PageSpeed</p>
            </div>
          </div>

          <div class="tech-card advanced">
            <div class="tech-icon"><img :src="iconGit" alt="Git" /></div>
            <div class="tech-content">
              <h4 class="tech-name">Git & GitLab</h4>
              <span class="tech-level advanced">Avanzado</span>
              <span class="tech-experience">4+ años</span>
              <p class="tech-description">Control de versiones y colaboración en equipo</p>
            </div>
          </div>

          <div class="tech-card advanced">
            <div class="tech-icon">🧪</div>
            <div class="tech-content">
              <h4 class="tech-name">Testing</h4>
              <span class="tech-level advanced">Avanzado</span>
              <span class="tech-experience">3 años</span>
              <p class="tech-description">Jest, Cypress para aplicaciones robustas</p>
            </div>
          </div>

          <div class="tech-card advanced">
            <div class="tech-icon">⚡</div>
            <div class="tech-content">
              <h4 class="tech-name">Vite & Webpack</h4>
              <span class="tech-level advanced">Avanzado</span>
              <span class="tech-experience">3 años</span>
              <p class="tech-description">Build tools para optimización de rendimiento</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Methodologies -->
      <div class="tech-category">
        <h3 class="category-title">
          <span class="category-icon">🎯</span>
          Metodologías
        </h3>
        <div class="methodology-grid">
          <div class="methodology-card">
            <div class="methodology-icon">💡</div>
            <h4 class="methodology-name">Product Owner</h4>
            <span class="methodology-experience">Certificado Sep 2025</span>
            <p class="methodology-description">Gestión producto digital y stakeholders</p>
          </div>
          <div class="methodology-card">
            <div class="methodology-icon">🔄</div>
            <h4 class="methodology-name">Scrum & Kanban</h4>
            <span class="methodology-experience">4 años</span>
            <p class="methodology-description">
              Metodologías ágiles en equipos multidisciplinarios
            </p>
          </div>
          <div class="methodology-card">
            <div class="methodology-icon">🎨</div>
            <h4 class="methodology-name">UX/UI & Accesibilidad</h4>
            <span class="methodology-experience">4 años</span>
            <p class="methodology-description">Colaboración estrecha con equipos de diseño</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No necesitamos lógica adicional por ahora
import iconAngular from '@/assets/images/angular.svg';
import iconVue from '@/assets/images/vue-js.svg';
import iconJavascript from '@/assets/images/javascript.svg';
import iconReact from '@/assets/images/react.svg';
import iconTypeScript from '@/assets/images/typescript.svg';
import iconGit from '@/assets/images/git.svg';
</script>

<style scoped>
/* Tech Stack Section */
.tech-stack {
  padding: 6rem 0;
  background: var(--bg-primary);
  position: relative;
}

.tech-stack::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
      circle at 20% 80%,
      rgba(var(--accent-primary-rgb), 0.1) 0%,
      transparent 50%
    ),
    radial-gradient(circle at 80% 20%, rgba(var(--accent-secondary-rgb), 0.1) 0%, transparent 50%);
  pointer-events: none;
}

.tech-category {
  margin-bottom: 80px;
}

.tech-category:last-child {
  margin-bottom: 0;
}

.category-title {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 40px;
}

.category-icon {
  font-size: 1.8rem;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
}

.tech-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 24px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.tech-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--accent-primary), var(--accent-secondary));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.tech-card:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(var(--accent-primary-rgb), 0.3);
}

.tech-card:hover::before {
  opacity: 1;
}

.tech-card.expert::before {
  background: linear-gradient(90deg, #10b981, #059669);
}

.tech-card.advanced::before {
  background: linear-gradient(90deg, #3b82f6, #1d4ed8);
}

.tech-card.specialty::before {
  background: linear-gradient(90deg, #f59e0b, #d97706);
}

.tech-card {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}

.tech-icon {
  font-size: 2.5rem;
  flex-shrink: 0;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
}

.tech-icon.special {
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
}

.tech-content {
  flex: 1;
}

.tech-name {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0 0 8px 0;
}

.tech-level {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  margin-bottom: 8px;
}

.tech-level.expert {
  background: rgba(16, 185, 129, 0.2);
  color: #10b981;
  border: 1px solid rgba(16, 185, 129, 0.3);
}

.tech-level.advanced {
  background: rgba(59, 130, 246, 0.2);
  color: #3b82f6;
  border: 1px solid rgba(59, 130, 246, 0.3);
}

.tech-level.specialty {
  background: rgba(245, 158, 11, 0.2);
  color: #f59e0b;
  border: 1px solid rgba(245, 158, 11, 0.3);
}

.tech-experience {
  display: block;
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-bottom: 12px;
}

.tech-description {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.5;
  margin: 0;
}

.specialty-badge {
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  color: white;
  padding: 4px 8px;
  border-radius: 8px;
  font-size: 0.7rem;
  font-weight: 600;
  margin-top: 8px;
  display: inline-block;
}

/* Methodologies Grid */
.methodology-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}

.methodology-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 30px 24px;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.methodology-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--accent-primary), var(--accent-secondary));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.methodology-card:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(var(--accent-primary-rgb), 0.3);
}

.methodology-card:hover::before {
  opacity: 1;
}

.methodology-icon {
  font-size: 3rem;
  margin-bottom: 16px;
}

.methodology-name {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0 0 8px 0;
}

.methodology-experience {
  display: block;
  font-size: 0.9rem;
  color: var(--accent-primary);
  font-weight: 500;
  margin-bottom: 12px;
}

.methodology-description {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.5;
  margin: 0;
}

/* Responsive Design */
@media (max-width: 768px) {
  .tech-stack {
    padding: 80px 0;
  }

  .tech-category {
    margin-bottom: 60px;
  }

  .category-title {
    font-size: 1.3rem;
    margin-bottom: 30px;
  }

  .tech-grid,
  .methodology-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .tech-card {
    padding: 20px;
  }

  .tech-icon {
    width: 50px;
    height: 50px;
    font-size: 2rem;
  }

  .methodology-card {
    padding: 24px 20px;
  }

  .methodology-icon {
    font-size: 2.5rem;
  }
}
</style>
