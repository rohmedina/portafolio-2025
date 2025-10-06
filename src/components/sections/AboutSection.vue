<template>
  <section class="about animate-on-scroll" id="acerca">
    <div class="container">
      <div class="section-header animate-on-scroll">
        <span class="section-badge">Acerca de mí</span>
        <h2 class="section-title">Mi historia profesional y pasión por el desarrollo</h2>
      </div>

      <div class="about-content">
        <div class="about-story animate-on-scroll">
          <div class="story-text">
            <div class="intro-highlight animate-on-scroll">
              <p class="intro-text">
                Hace más de <strong>5 años</strong> descubrí que mi verdadera pasión no es solo
                escribir código, sino
                <strong>resolver problemas reales que impactan los negocios</strong>. Como
                Desarrollador Frontend, transformo ideas complejas en aplicaciones web que importan
                para las empresas y sus usuarios.
              </p>
            </div>

            <p class="animate-on-scroll">
              He trabajado en <strong>Codelabs</strong>, <strong>TAAG Genetics</strong>,
              <strong>Entel</strong> y <strong>Desarroya Limitada</strong>, donde optimicé la
              experiencia completa del usuario. Logré mejoras del
              <strong>20% en tiempos de carga</strong> y aumentos del
              <strong>25% en PageSpeed</strong>, con impacto directo en retención y satisfacción.
            </p>

            <p class="animate-on-scroll">
              Mi punto de inflexión llegó con <strong>N8N y las automatizaciones</strong>. Como
              freelancer, entregué más de <strong>5 aplicaciones</strong> a PyMEs y aumenté un
              <strong>30% su captación de clientes</strong>. Mi diferencial:
              <strong
                >automatizaciones que liberan hasta 10 horas semanales de trabajo manual</strong
              >
              para que se enfoquen en crecer.
            </p>

            <p class="animate-on-scroll">
              Soy Analista Programador (Duoc UC), egresado de Talento Digital y certificado como
              Product Owner. No basta con que la tecnología funcione: debe
              <strong>generar valor real y medible</strong>.
            </p>

            <div class="values-highlight animate-on-scroll">
              <h3>Más allá del código</h3>
              <p>
                Mi filosofía es simple: la mejor tecnología es la que se vuelve invisible para el
                usuario. Cada línea de código y cada automatización que diseño busca que alguien
                haga su trabajo más fácil y se concentre en lo que importa para su negocio.
              </p>
              <p>
                Fuera del trabajo, suelo escaparme a hacer trekking por la cordillera, devorar
                libros y mangas sin discriminar género, y cocinar mi terapia anti‑estrés. Cuando no
                cocino, exploro nuevos lugares para comer en Santiago. Mantener la curiosidad en
                distintas áreas me ayuda a traer perspectivas frescas a cada proyecto.
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
