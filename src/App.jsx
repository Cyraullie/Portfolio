import React, { useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  Code2,
  Database,
  Server,
  Terminal,
  Globe2,
} from "lucide-react";
import projects from "./data/projects.json";
import copy from "./data/translations.json";
import stacks from "./data/stacks.json";

// TODO: mets l'URL du dépôt dans `github` pour Camagru, Polls et QPUM.
// Tant que c'est `null`, le bouton "Voir le code" n'est pas affiché.

const stackIcons = {
  Server,
  Code2,
  Database,
  Terminal,
};

function App() {
  const [lang, setLang] = useState(
    typeof navigator !== "undefined" && navigator.language?.startsWith("fr")
      ? "fr"
      : "en",
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const t = copy[lang];
  const isFr = lang === "fr";

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="header">
        <a className="brand" href="#home" aria-label={t.homeLabel}>
          cg<span>.</span>
        </a>
        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          {t.nav.map((item, i) => (
            <a
              key={item}
              href={["#about", "#stack", "#projects", "#contact"][i]}
              onClick={closeMenu}
            >
              {item}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <button
            className="language-switch"
            onClick={() => setLang(isFr ? "en" : "fr")}
            aria-label={`${t.switchLabel} ${t.languageName}`}
          >
            <Globe2 size={15} /> {t.language}
          </button>
          <a className="header-contact" href="#contact">
            {t.contactCta}
            <ArrowUpRight size={15} />
          </a>
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={t.menuLabel}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="status">
              <span className="status-dot" /> {t.availability}
            </div>
            <p className="eyebrow">{t.eyebrow}</p>
            <h1>
              {t.headlineA}
              <br />
              <span>{t.headlineB}</span>
            </h1>
            <p className="hero-intro">{t.intro}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                {t.projectsCta}
                <ArrowUpRight size={17} />
              </a>
              <a className="button button-quiet" href="#contact">
                {t.contactCta}
                <ArrowUpRight size={17} />
              </a>

              <a
                className="button button-quiet"
                href={`${import.meta.env.BASE_URL}cv-cyril-goldenschue.pdf`}
                download
              >
                {t.cvCta}
                <Download size={17} />
              </a>
              <a className="button button-quiet" href="#contact">
                {t.contactCta}
                <ArrowUpRight size={17} />
              </a>
            </div>
            <div className="hero-socials">
              <a
                href="https://github.com/Cyraullie"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={17} /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/cyril-goldenschue/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={17} /> LinkedIn
              </a>
              <span className="social-separator" />
              <span>Lausanne, CH</span>
            </div>
          </div>
          <div className="hero-visual" aria-label={t.timelineLabel}>
            <div className="visual-glow" />
            <div className="code-window">
              <div className="window-top">
                <div className="window-dots">
                  <i />
                  <i />
                  <i />
                </div>
                <span>{t.timelineTitle}</span>
              </div>
              <div className="code-content">
                {t.timeline.map(([years, label]) => (
                  <div className="code-line" key={label}>
                    <span className="line-no" style={{ minWidth: "4.5em" }}>
                      {years}
                    </span>
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <a className="scroll-cue" href="#about">
            <span>{t.scroll}</span>
            <ArrowDownRight size={16} />
          </a>
        </section>

        <section
          className="section-wrap section-block about-section"
          id="about"
        >
          <div className="section-heading">
            <p className="eyebrow">{t.aboutLabel}</p>
            <h2>{t.aboutTitle}</h2>
          </div>
          <div className="about-grid">
            <div className="about-copy">
              <p>{t.aboutText}</p>
              <p>{t.aboutText2}</p>
            </div>
            <div className="facts">
              {t.facts.map(([label, value]) => (
                <div className="fact" key={label}>
                  <span>{label}</span>
                  <b>{value}</b>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className="section-wrap section-block stack-section"
          id="stack"
        >
          <div className="section-heading">
            <p className="eyebrow">{t.stackLabel}</p>
            <h2>{t.stackTitle}</h2>
            <p className="section-description">{t.stackText}</p>
          </div>
          <div className="stack-grid">
            {stacks.map(({ title, icon, items }, i) => {
              const Icon = stackIcons[icon];

              return (
                <article className="stack-card" key={title}>
                  <div className="stack-card-top">
                    <span className="stack-icon">
                      <Icon size={19} />
                    </span>
                    <span className="mono">0{i + 1}</span>
                  </div>

                  <h3>{title}</h3>

                  <div className="tag-list">
                    {items.map((item) => (
                      <span className="tag" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section
          className="section-wrap section-block projects-section"
          id="projects"
        >
          <div className="section-heading">
            <p className="eyebrow">{t.projectsLabel}</p>
            <h2>{t.projectsTitle}</h2>
            <p className="section-description">{t.projectsText}</p>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <article
                className={`project-card ${project.tone}`}
                key={project.name}
              >
                <div className="project-preview">
                  <div className="preview-orbit orbit-one" />
                  <div className="preview-orbit orbit-two" />
                  <div className="preview-window">
                    <div className="preview-bar">
                      <i />
                      <i />
                      <i />
                      <span>{project.name.toLowerCase()}.app</span>
                    </div>
                    <div className={`preview-art art-${project.mark}`}>
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={`${project.name} ${t.screenshot}`}
                          loading="lazy"
                        />
                      ) : (
                        <div className="preview-placeholder">
                          <span>
                            {isFr
                              ? "CAPTURE À VENIR"
                              : "SCREENSHOT COMING SOON"}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  <span className="preview-index">{project.number}</span>
                </div>
                <div className="project-info">
                  <p className="project-type">{project.type}</p>
                  {project.status && (
                    <span className={`project-status status-${project.status}`}>
                      {
                        {
                          "in-progress": isFr
                            ? "En développement"
                            : "In progress",
                          completed: isFr ? "Terminé" : "Completed",
                          maintained: isFr ? "Maintenu" : "Maintained",
                        }[project.status]
                      }
                    </span>
                  )}
                  <h3>{project.name}</h3>
                  <p className="project-description">
                    {isFr ? project.descriptionFr : project.description}
                  </p>
                  <div className="tag-list project-tags">
                    {project.tags.map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="project-links">
                    {project.github && (
                      <a
                        className="text-link"
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {t.viewCode}
                        <ArrowUpRight size={16} />
                      </a>
                    )}
                    {project.githubApi && (
                      <a
                        className="text-link"
                        href={project.githubApi}
                        target="_blank"
                        rel="noreferrer"
                      >
                        API
                        <ArrowUpRight size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-wrap contact-section" id="contact">
          <div className="contact-orb" />
          <div className="contact-content">
            <p className="eyebrow">{t.contactLabel}</p>
            <h2>{t.contactTitle}</h2>
            <p>{t.contactText}</p>
            <a
              className="button button-primary"
              href="mailto:cyril.goldenschue@gmail.com"
            >
              {t.emailMe}
              <Mail size={17} />
            </a>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a className="brand" href="#home" aria-label={t.homeLabel}>
          cg<span>.</span>
        </a>
        <p>
          © {new Date().getFullYear()} · {t.footer}
        </p>
        <a className="back-top" href="#home">
          {t.top}
          <ArrowUpRight size={14} />
        </a>
      </footer>
    </div>
  );
}

export default App;
