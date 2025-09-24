<template>
  <section class="about" id="acerca">
    <div class="container">
      <div class="section-header">
        <span class="section-badge">Acerca de mí</span>
        <h2 class="section-title">Mi historia profesional y pasión por el desarrollo</h2>
      </div>

      <div class="about-content">
        <div class="about-story">
          <div class="story-text">
            <div class="intro-highlight">
              <p class="intro-text">
                Soy un <strong>Desarrollador Frontend</strong> con más de
                <strong>4 años</strong> transformando ideas en aplicaciones web que realmente
                importan para los negocios.
              </p>
            </div>

            <p>
              Mi trayectoria incluye experiencia en empresas como <strong>Codelabs</strong>,
              <strong>TAAG Genetics</strong>, <strong>Entel</strong> y
              <strong>Desarroya Limitada</strong>, donde he optimizado interfaces logrando mejoras
              del 20% en tiempos de carga y aumentos del 25% en PageSpeed.
            </p>

            <p>
              Actualmente trabajo como <strong>freelancer independiente</strong>, donde he entregado
              más de 5 aplicaciones web personalizadas para pymes, logrando aumentos del 30% en
              captación de clientes. Mi especialización en <strong>automatizaciones N8N</strong> me
              permite ofrecer soluciones únicas que reducen hasta 10 horas semanales de trabajo
              manual.
            </p>

            <p>
              Soy <strong>Analista Programador Computacional</strong> graduado de
              <strong>Duoc UC</strong> y completé el programa <strong>Talento Digital</strong>.
              Recientemente obtuve la certificación <strong>Product Owner</strong>, combinando
              visión técnica con estrategia de producto.
            </p>

            <div class="values-highlight">
              <p>
                Mi enfoque combina tecnología, usabilidad y valor de negocio. Cada proyecto que
                desarrollo está orientado a
                <strong>generar resultados tangibles y medibles</strong> para mis clientes,
                mejorando tanto la experiencia de usuario como los indicadores de negocio.
              </p>
            </div>
          </div>

          <div class="about-metrics">
            <div class="metric-card">
              <div class="metric-number">4+</div>
              <div class="metric-label">Años de experiencia</div>
            </div>
            <div class="metric-card">
              <div class="metric-number">5+</div>
              <div class="metric-label">Aplicaciones web entregadas</div>
            </div>
            <div class="metric-card">
              <div class="metric-number">30%</div>
              <div class="metric-label">Aumento en captación de clientes</div>
            </div>
            <div class="metric-card">
              <div class="metric-number">10h</div>
              <div class="metric-label">Promedio ahorrado<br />por automatización</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No necesitamos lógica adicional por ahora
</script>

<style scoped>
/* About Section */
.about {
  padding: 6rem 0;
  background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
  position: relative;
}

.about::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="1"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
  pointer-events: none;
}

.about-content {
  display: grid;
  gap: 60px;
  align-items: start;
}

.about-story {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 60px;
  align-items: start;
}

.story-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-secondary);
}

.intro-highlight {
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  padding: 30px;
  border-radius: 16px;
  margin-bottom: 30px;
  position: relative;
  overflow: hidden;
}

.intro-highlight::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    45deg,
    transparent 30%,
    rgba(255, 255, 255, 0.1) 50%,
    transparent 70%
  );
  animation: shimmer 3s infinite;
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.intro-text {
  color: white;
  font-size: 1.25rem;
  font-weight: 500;
  margin: 0;
  position: relative;
  z-index: 1;
}

.story-text p {
  margin-bottom: 24px;
}

.story-text strong {
  color: var(--text-primary);
  font-weight: 600;
}

.values-highlight {
  background: rgba(var(--accent-primary-rgb), 0.1);
  border: 1px solid rgba(var(--accent-primary-rgb), 0.2);
  padding: 30px;
  border-radius: 16px;
  margin-top: 30px;
  position: relative;
}

.values-highlight::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: linear-gradient(to bottom, var(--accent-primary), var(--accent-secondary));
  border-radius: 2px;
}

.values-highlight p {
  margin: 0;
  font-weight: 500;
  color: var(--text-primary);
}

.about-metrics {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

.metric-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 30px 20px;
  border-radius: 16px;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.metric-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--accent-primary), var(--accent-secondary));
}

.metric-card:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(var(--accent-primary-rgb), 0.3);
}

.metric-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--accent-primary);
  margin-bottom: 8px;
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.metric-label {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.4;
}

/* Responsive Design */
@media (max-width: 768px) {
  .about {
    padding: 80px 0;
  }

  .about-story {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .about-metrics {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .intro-highlight,
  .values-highlight {
    padding: 20px;
  }

  .intro-text {
    font-size: 1.1rem;
  }

  .story-text {
    font-size: 1rem;
  }

  .metric-number {
    font-size: 2rem;
  }
}
</style>
