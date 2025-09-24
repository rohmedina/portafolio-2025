<template>
  <section class="experience-section animate-on-scroll" id="experiencia">
    <div class="container">
      <div class="section-header animate-on-scroll">
        <h2 class="section-title">Experiencia Profesional</h2>
        <p class="section-subtitle">Mi trayectoria profesional en desarrollo web</p>
      </div>

      <div class="timeline">
        <div class="timeline-item animate-on-scroll">
          <div class="timeline-marker">
            <div class="timeline-dot"></div>
          </div>
          <div class="timeline-content">
            <div class="timeline-header">
              <h3 class="timeline-role">Desarrollador Front-End</h3>
              <div class="timeline-company">Desarrolla Limitada</div>
              <div class="timeline-period">Julio 2024 - Octubre 2024</div>
            </div>
            <div class="timeline-description">
              <p>
                Creación de soluciones web personalizadas y optimización de sitios e-commerce con
                WordPress y frameworks modernos.
              </p>
            </div>
            <div class="timeline-achievements">
              <h4 class="achievements-title">Logros destacados:</h4>
              <ul class="achievements-list">
                <li>3 sitios web e-commerce y blogs optimizados</li>
                <li>25% mejora puntuaciones PageSpeed</li>
                <li>Mejor retención de usuarios en sitios optimizados</li>
                <li>Soluciones personalizadas WordPress y Elementor</li>
              </ul>
            </div>
            <div class="timeline-tech">
              <span class="tech-pill">WordPress</span>
              <span class="tech-pill">Elementor</span>
              <span class="tech-pill">Angular</span>
              <span class="tech-pill">ReactJS</span>
              <span class="tech-pill">CSS3</span>
            </div>
          </div>
        </div>

        <div class="timeline-item animate-on-scroll">
          <div class="timeline-marker">
            <div class="timeline-dot"></div>
          </div>
          <div class="timeline-content">
            <div class="timeline-header">
              <h3 class="timeline-role">Consultor COE Digital Front End</h3>
              <div class="timeline-company">Entel</div>
              <div class="timeline-period">Abril 2022 - Octubre 2022</div>
            </div>
            <div class="timeline-description">
              <p>
                Desarrollo de aplicaciones web corporativas y optimización de experiencia de usuario
                para plataformas digitales empresariales.
              </p>
            </div>
            <div class="timeline-achievements">
              <h4 class="achievements-title">Logros destacados:</h4>
              <ul class="achievements-list">
                <li>Implementación de arquitectura microfrontends</li>
                <li>40% mejora en tiempo de carga de aplicaciones</li>
                <li>Desarrollo de componentes reutilizables</li>
                <li>Integración con APIs REST y GraphQL</li>
              </ul>
            </div>
            <div class="timeline-tech">
              <span class="tech-pill">React</span>
              <span class="tech-pill">TypeScript</span>
              <span class="tech-pill">Node.js</span>
              <span class="tech-pill">GraphQL</span>
              <span class="tech-pill">Docker</span>
            </div>
          </div>
        </div>

        <div class="timeline-item animate-on-scroll">
          <div class="timeline-marker">
            <div class="timeline-dot"></div>
          </div>
          <div class="timeline-content">
            <div class="timeline-header">
              <h3 class="timeline-role">Desarrollador Full Stack</h3>
              <div class="timeline-company">Freelance</div>
              <div class="timeline-period">Enero 2021 - Marzo 2022</div>
            </div>
            <div class="timeline-description">
              <p>
                Desarrollo de aplicaciones web completas para diversos clientes, desde startups
                hasta empresas establecidas.
              </p>
            </div>
            <div class="timeline-achievements">
              <h4 class="achievements-title">Logros destacados:</h4>
              <ul class="achievements-list">
                <li>15+ proyectos web completados exitosamente</li>
                <li>Implementación de sistemas de pago online</li>
                <li>Desarrollo de dashboards administrativos</li>
                <li>Integración con servicios de terceros</li>
              </ul>
            </div>
            <div class="timeline-tech">
              <span class="tech-pill">Vue.js</span>
              <span class="tech-pill">Laravel</span>
              <span class="tech-pill">MySQL</span>
              <span class="tech-pill">AWS</span>
              <span class="tech-pill">Git</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Componente Experience - Experiencia profesional
</script>

<style scoped>
.experience-section {
  padding: 6rem 0;
  background: var(--bg-secondary);
  position: relative;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
  position: relative;
}

.section-title::after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 4px;
  background: var(--primary-color);
  border-radius: 2px;
}

.section-subtitle {
  font-size: 1.2rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
}

/* Timeline Styles */
.timeline {
  position: relative;
  padding-left: 2rem;
}

.timeline::before {
  content: "";
  position: absolute;
  left: 1rem;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, var(--primary-color), var(--accent-color));
  border-radius: 1px;
}

.timeline-item {
  position: relative;
  padding-left: 3rem;
  margin-bottom: 3rem;
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.6s ease-out forwards;
}

.timeline-item:nth-child(1) {
  animation-delay: 0.1s;
}
.timeline-item:nth-child(2) {
  animation-delay: 0.2s;
}
.timeline-item:nth-child(3) {
  animation-delay: 0.3s;
}

.timeline-marker {
  position: absolute;
  left: -2rem;
  top: 0;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.timeline-dot {
  width: 20px;
  height: 20px;
  background: #2563eb;
  border-radius: 50%;
  border: 4px solid #ffffff;
  position: relative;
  top: 20px;
  left: 8px;
  z-index: 2;
  box-shadow: 0 2px 10px rgba(37, 99, 235, 0.3);
}

.timeline-item:hover .timeline-dot {
  background: linear-gradient(135deg, #2563eb, #7c3aed);
  box-shadow: 0 0 20px rgba(37, 99, 235, 0.4);
  animation: pulse 2s infinite;
}

.timeline-content {
  background: var(--bg-primary);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: var(--shadow-md);
  border: 1px solid var(--border-color);
  position: relative;
  transition: all 0.3s ease;
}

.timeline-content::before {
  content: "";
  position: absolute;
  left: -8px;
  top: 20px;
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-right: 8px solid var(--border-color);
}

.timeline-content:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.timeline-header {
  margin-bottom: 1.5rem;
}

.timeline-role {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.timeline-company {
  color: var(--primary-color);
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.timeline-period {
  color: var(--text-secondary);
  font-size: 0.9rem;
  font-weight: 500;
  background: var(--bg-tertiary);
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  display: inline-block;
}

.timeline-description {
  margin-bottom: 1.5rem;
}

.timeline-description p {
  color: var(--text-secondary);
  line-height: 1.6;
  margin: 0;
}

.timeline-achievements {
  margin-bottom: 1.5rem;
}

.achievements-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
}

.achievements-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.achievements-list li {
  color: var(--text-secondary);
  padding: 0.25rem 0;
  position: relative;
  padding-left: 1.5rem;
}

.achievements-list li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--success-color);
  font-weight: bold;
  font-size: 0.9rem;
}

.timeline-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-pill {
  background: var(--bg-tertiary);
  color: var(--text-secondary);
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
}

.tech-pill:hover {
  background: var(--primary-color);
  color: var(--text-inverse);
  border-color: var(--primary-color);
  transform: translateY(-2px);
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

/* Dark Mode Support */
[data-theme="dark"] .timeline-content {
  background: var(--bg-secondary);
  border-color: var(--border-color);
}

[data-theme="dark"] .timeline-content::before {
  border-right-color: var(--bg-secondary);
}

[data-theme="dark"] .timeline-dot {
  border-color: var(--bg-primary);
}

/* Responsive Design */
@media (max-width: 768px) {
  .experience-section {
    padding: 4rem 0;
  }

  .container {
    padding: 0 1rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .section-subtitle {
    font-size: 1rem;
  }

  .timeline {
    padding-left: 1rem;
  }

  .timeline::before {
    left: 0.5rem;
  }

  .timeline-item {
    padding-left: 2rem;
  }

  .timeline-marker {
    left: -1.5rem;
  }

  .timeline-content {
    padding: 1.5rem;
  }

  .timeline-content::before {
    left: -6px;
  }

  .timeline-role {
    font-size: 1.1rem;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 1.75rem;
  }

  .timeline-content {
    padding: 1rem;
  }

  .timeline-role {
    font-size: 1rem;
  }

  .timeline-company {
    font-size: 0.9rem;
  }

  .timeline-period {
    font-size: 0.8rem;
  }

  .tech-pill {
    font-size: 0.7rem;
    padding: 0.2rem 0.5rem;
  }
}
</style>
