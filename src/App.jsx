import profileImage from './profile.png';

const skills = [
  'Kubernetes',
  'Docker',
  'Terraform',
  'AWS',
  'CI/CD',
  'GitHub Actions',
  'Linux',
  'Prometheus',
  'Grafana',
  'Helm',
  'Bash',
  'Ansible'
];

const experience = [
  {
    role: 'DevOps COE Member',
    company: 'InfraFlow',
    period: '2026 - Presente',
    bullets: [
      'Fui ascendido al equipo DevOps COE, un grupo central de excelencia enfocado en estandarizar prácticas, acelerar la adopción de automatización y elevar la confiabilidad de las plataformas.',
      'Colaboro con múltiples squads para definir patrones reutilizables de infraestructura, seguridad y delivery continuo en toda la organización.',
      'Impulso iniciativas transversales de observabilidad, gobierno técnico y mejora continua para escalar operaciones con consistencia.'
    ]
  },
  {
    role: 'DevOps Engineer',
    company: 'InfraFlow',
    period: '2023 - Presente',
    bullets: [
      'Diseñé pipelines CI/CD para despliegues automáticos con control de calidad y rollback seguro.',
      'Administré clústeres Kubernetes en producción con foco en alta disponibilidad, observabilidad y costos.',
      'Automatizé infraestructura como código con Terraform y estandaricé ambientes para desarrollo, staging y producción.'
    ]
  },
  {
    role: 'Cloud Operations Specialist',
    company: 'StackBridge',
    period: '2022 - 2023',
    bullets: [
      'Aceleré la entrega de releases reduciendo tareas manuales mediante scripts Bash y Ansible.',
      'Implementé monitoreo con métricas, alertas y tableros para detectar incidentes antes del impacto al negocio.',
      'Colaboré con equipos de desarrollo para mejorar resiliencia, seguridad y tiempos de respuesta.'
    ]
  }
];

const highlights = [
  { label: '3+', value: 'años' },
  { label: '24/7', value: 'observabilidad' },
  { label: '100%', value: 'automation-first' }
];

function App() {
  return (
    <main className="page-shell">
      <section className="hero card">
        <div className="hero__copy reveal">
          <p className="eyebrow">Curriculum Vitae</p>
          <h1>Oscar Murguia</h1>
          <h2>DevOps Engineer</h2>
          <p className="hero__summary">
            Ingeniero DevOps con 3 años de experiencia ficticia en automatización,
            infraestructura en la nube, observabilidad y despliegues confiables.
            Me enfoco en reducir fricción operativa y entregar software con más velocidad y menos riesgo.
          </p>

          <div className="highlights">
            {highlights.map((item) => (
              <article className="highlight" key={item.label}>
                <strong>{item.label}</strong>
                <span>{item.value}</span>
              </article>
            ))}
          </div>
        </div>

        <div className="hero__portrait reveal reveal--delay-1">
          <div className="portrait-frame">
            <img src={profileImage} alt="Foto de perfil de Oscar Murguia" className="portrait" />
          </div>
          <div className="status-pill">Disponible para proyectos DevOps y Cloud</div>
        </div>
      </section>

      <section className="grid-layout">
        <article className="card reveal reveal--delay-1">
          <p className="section-label">Perfil</p>
          <p>
            Construyo y mantengo plataformas que simplifican el ciclo de entrega,
            fortalecen la confiabilidad y facilitan el trabajo entre desarrollo y operaciones.
          </p>
        </article>

        <article className="card reveal reveal--delay-2">
          <p className="section-label">Contacto</p>
          <div className="contact-links">
            <a href="tel:+59177133301">+591 77133301</a>
            <a href="https://www.linkedin.com/in/oscarmurguias/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </article>
      </section>

      <section className="card reveal reveal--delay-2">
        <p className="section-label">Experiencia laboral</p>
        <div className="timeline">
          {experience.map((job) => (
            <article className="timeline-item" key={`${job.company}-${job.period}`}>
              <div className="timeline-marker" />
              <div>
                <div className="timeline-header">
                  <div>
                    <h3>{job.role}</h3>
                    <p>{job.company}</p>
                  </div>
                  <span>{job.period}</span>
                </div>
                <ul>
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="card reveal reveal--delay-3">
        <p className="section-label">Skills</p>
        <div className="skills-grid">
          {skills.map((skill) => (
            <span className="skill-chip" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="card reveal reveal--delay-3 footer-card">
        <p className="section-label">Resumen profesional</p>
        <p>
          Especialista en DevOps orientado a automatización, cloud y confiabilidad.
          Mi objetivo es crear entornos reproducibles, pipelines sólidos y monitoreo que permita escalar con seguridad.
        </p>
      </section>
    </main>
  );
}

export default App;