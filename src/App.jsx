import React, { useState } from "react";
import {
  ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X,
  Code2, Database, Server, Layers3, Terminal, Globe2, ExternalLink
} from "lucide-react";

const copy = {
  en: {
    nav: ["About", "Stack", "Projects", "Contact"],
    availability: "Open to opportunities",
    eyebrow: "BACKEND-FOCUSED · FULLSTACK DEVELOPER",
    headlineA: "I build the systems",
    headlineB: "behind the experience.",
    intro: "I’m a web developer focused on backend engineering and fullstack applications. I enjoy turning complex ideas into reliable, well-structured products.",
    projectsCta: "Explore projects",
    contactCta: "Get in touch",
    scroll: "SCROLL TO EXPLORE",
    aboutLabel: "A LITTLE ABOUT ME",
    aboutTitle: "Thoughtful engineering. Useful products.",
    aboutText: "I’m a developer who likes understanding how things work under the hood: data models, APIs, authentication, application architecture and deployment. I also enjoy connecting that foundation to clean, intuitive interfaces.",
    aboutText2: "My learning path has been shaped by hands-on projects and the practical, problem-solving mindset I developed at 42 Lausanne. I value readable code, clear responsibilities and solutions that are built to evolve.",
    facts: [["FOCUS", "Backend & fullstack"], ["BASED IN", "Lausanne, Switzerland"], ["APPROACH", "Build · Learn · Improve"]],
    stackLabel: "TOOLS OF THE TRADE",
    stackTitle: "My technical toolkit.",
    stackText: "The technologies I use to design, build and ship web applications.",
    projectsLabel: "SELECTED WORK",
    projectsTitle: "A few things I’ve built.",
    projectsText: "A selection of projects that reflect my interests in application architecture, backend logic and real-time experiences.",
    viewCode: "View source",
    aboutProject: "PROJECT",
    contactLabel: "LET’S CONNECT",
    contactTitle: "Have a project in mind?",
    contactText: "I’m always happy to talk about web development, interesting technical challenges or new opportunities.",
    emailMe: "Send me an email",
    footer: "Designed & built with React.",
    top: "BACK TO TOP",
    language: "FR",
    languageName: "Français"
  },
  fr: {
    nav: ["À propos", "Stack", "Projets", "Contact"],
    availability: "Ouvert aux opportunités",
    eyebrow: "DÉVELOPPEUR BACKEND · FULLSTACK",
    headlineA: "Je construis les systèmes",
    headlineB: "qui font vivre le web.",
    intro: "Développeur web orienté backend et fullstack, j’aime transformer des idées complexes en applications fiables, structurées et agréables à utiliser.",
    projectsCta: "Voir mes projets",
    contactCta: "Me contacter",
    scroll: "DÉFILER POUR EXPLORER",
    aboutLabel: "À PROPOS DE MOI",
    aboutTitle: "De l’ingénierie réfléchie. Des produits utiles.",
    aboutText: "J’aime comprendre ce qui se passe sous le capot : modèles de données, API, authentification, architecture applicative et déploiement. J’apprécie aussi de relier cette base technique à des interfaces claires et intuitives.",
    aboutText2: "Mon parcours se construit à travers des projets concrets et l’approche pratique de résolution de problèmes développée à 42 Lausanne. J’accorde de l’importance au code lisible, aux responsabilités bien définies et aux solutions capables d’évoluer.",
    facts: [["SPÉCIALITÉ", "Backend & fullstack"], ["LOCALISATION", "Lausanne, Suisse"], ["APPROCHE", "Construire · Apprendre · Améliorer"]],
    stackLabel: "MES OUTILS",
    stackTitle: "Ma boîte à outils technique.",
    stackText: "Les technologies que j’utilise pour concevoir, développer et déployer des applications web.",
    projectsLabel: "PROJETS SÉLECTIONNÉS",
    projectsTitle: "Quelques réalisations.",
    projectsText: "Une sélection de projets qui reflètent mon intérêt pour l’architecture applicative, la logique backend et les expériences en temps réel.",
    viewCode: "Voir le code",
    aboutProject: "PROJET",
    contactLabel: "RESTONS EN CONTACT",
    contactTitle: "Un projet en tête ?",
    contactText: "Je suis toujours partant pour échanger autour du développement web, de défis techniques intéressants ou de nouvelles opportunités.",
    emailMe: "M’envoyer un email",
    footer: "Conçu et développé avec React.",
    top: "RETOUR EN HAUT",
    language: "EN",
    languageName: "English"
  }
};

const stacks = [
  { title: "Backend", icon: Server, items: ["Python", "Django", "PHP", "Laravel", "Node.js", "REST APIs"] },
  { title: "Frontend", icon: Code2, items: ["JavaScript", "TypeScript", "React", "Next.js", "HTML & CSS"] },
  { title: "Data", icon: Database, items: ["MariaDB", "MySQL", "SQL", "Data modeling"] },
  { title: "Tools & DevOps", icon: Terminal, items: ["Docker", "Linux", "Git", "GitHub Actions", "WebSockets"] }
];

const projects = [
  {
    number: "01",
    name: "Camagru",
    type: "PHOTO SHARING APPLICATION",
    description: "A photo-sharing web application with account management, secure authentication, image uploads and community interactions.",
    descriptionFr: "Une application de partage de photos avec gestion de compte, authentification, envoi d’images et interactions entre utilisateurs.",
    tags: ["PHP", "MySQL", "Docker", "MVC"],
    tone: "violet",
    mark: "camagru",
    github: "https://github.com/"
  },
  {
    number: "02",
    name: "Polls",
    type: "POLLING PROGRESSIVE WEB APP",
    description: "A polling application built around poll and option management, voting rules and a responsive app experience.",
    descriptionFr: "Une application de sondages avec gestion des questions et options, règles de vote et expérience responsive.",
    tags: ["Laravel", "React", "Inertia", "PWA"],
    tone: "blue",
    mark: "polls",
    github: "https://github.com/"
  },
  {
    number: "03",
    name: "QPUM",
    type: "MULTIPLAYER QUIZ PLATFORM",
    description: "A multiplayer quiz experience with teams, sessions and real-time communication powered by WebSockets.",
    descriptionFr: "Une expérience de quiz multijoueur avec équipes, sessions et communication en temps réel grâce aux WebSockets.",
    tags: ["Django", "React", "WebSockets", "Docker"],
    tone: "green",
    mark: "qpum",
    github: "https://github.com/"
  }
];

function App() {
  const [lang, setLang] = useState("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const t = copy[lang];
  const isFr = lang === "fr";

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="header">
        <a className="brand" href="#home" aria-label="Home">cg<span>.</span></a>
        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          {t.nav.map((item, i) => (
            <a key={item} href={["#about", "#stack", "#projects", "#contact"][i]} onClick={closeMenu}>{item}</a>
          ))}
        </nav>
        <div className="header-actions">
          <button className="language-switch" onClick={() => setLang(isFr ? "en" : "fr")} aria-label={`Switch language to ${t.languageName}`}>
            <Globe2 size={15} /> {t.language}
          </button>
          <a className="header-contact" href="#contact">{t.contactCta}<ArrowUpRight size={15}/></a>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
            {menuOpen ? <X/> : <Menu/>}
          </button>
        </div>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="status"><span className="status-dot"/> {t.availability}</div>
            <p className="eyebrow">{t.eyebrow}</p>
            <h1>{t.headlineA}<br/><span>{t.headlineB}</span></h1>
            <p className="hero-intro">{t.intro}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">{t.projectsCta}<ArrowUpRight size={17}/></a>
              <a className="button button-quiet" href="#contact">{t.contactCta}<ArrowUpRight size={17}/></a>
            </div>
            <div className="hero-socials">
              <a href="https://github.com/Cyraullie" target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a>
              <a href="https://www.linkedin.com/in/cyril-goldenschue/" target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn</a>
              <span className="social-separator"/>
              <span>Lausanne, CH</span>
            </div>
          </div>
          <div className="hero-visual" aria-label="Abstract code illustration">
            <div className="visual-glow"/>
            <div className="code-window">
              <div className="window-top"><div className="window-dots"><i/><i/><i/></div><span>developer.ts</span><span className="window-lock">●</span></div>
              <div className="code-content">
                <div className="code-line"><span className="line-no">01</span><span className="syntax-purple">const</span> developer = {"{"}</div>
                <div className="code-line indent"><span className="line-no">02</span><span className="syntax-blue">focus</span>: <span className="syntax-green">"backend"</span>,</div>
                <div className="code-line indent"><span className="line-no">03</span><span className="syntax-blue"> mindset</span>: <span className="syntax-green">"fullstack"</span>,</div>
                <div className="code-line indent"><span className="line-no">04</span><span className="syntax-blue">build</span>: [</div>
                <div className="code-line indent2"><span className="line-no">05</span><span className="syntax-orange">"APIs"</span>, <span className="syntax-orange">"systems"</span>,</div>
                <div className="code-line indent2"><span className="line-no">06</span><span className="syntax-orange">"experiences"</span></div>
                <div className="code-line indent"><span className="line-no">07</span>],</div>
                <div className="code-line"><span className="line-no">08</span>{"}"};</div>
                <div className="code-cursor"/>
              </div>
              <div className="window-bottom"><span><span className="tiny-green"/> All systems operational</span><span>UTF-8&nbsp; · &nbsp;TypeScript</span></div>
            </div>
            <div className="floating-card card-api"><span className="float-icon"><Layers3 size={16}/></span><span><b>API DESIGN</b><small>Clean architecture</small></span></div>
            <div className="floating-card card-db"><span className="float-icon blue-icon"><Database size={16}/></span><span><b>DATA LAYER</b><small>Reliable by design</small></span></div>
            <div className="visual-caption"><span/> BUILDING WITH PURPOSE</div>
          </div>
          <a className="scroll-cue" href="#about"><span>{t.scroll}</span><ArrowDownRight size={16}/></a>
        </section>

        <section className="section-wrap section-block about-section" id="about">
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
              {t.facts.map(([label, value]) => <div className="fact" key={label}><span>{label}</span><b>{value}</b></div>)}
            </div>
          </div>
        </section>

        <section className="section-wrap section-block stack-section" id="stack">
          <div className="section-heading">
            <p className="eyebrow">{t.stackLabel}</p>
            <h2>{t.stackTitle}</h2>
            <p className="section-description">{t.stackText}</p>
          </div>
          <div className="stack-grid">
            {stacks.map(({title, icon: Icon, items}, i) => (
              <article className="stack-card" key={title}>
                <div className="stack-card-top"><span className="stack-icon"><Icon size={19}/></span><span className="mono">0{i + 1}</span></div>
                <h3>{title}</h3>
                <div className="tag-list">{items.map(item => <span className="tag" key={item}>{item}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-wrap section-block projects-section" id="projects">
          <div className="section-heading">
            <p className="eyebrow">{t.projectsLabel}</p>
            <h2>{t.projectsTitle}</h2>
            <p className="section-description">{t.projectsText}</p>
          </div>
          <div className="project-list">
            {projects.map(project => (
              <article className={`project-card ${project.tone}`} key={project.name}>
                <div className="project-preview">
                  <div className="preview-orbit orbit-one"/><div className="preview-orbit orbit-two"/>
                  <div className="preview-window">
                    <div className="preview-bar"><i/><i/><i/><span>{project.name.toLowerCase()}.app</span></div>
                    <div className={`preview-art art-${project.mark}`}>
                      {project.mark === "camagru" && <><div className="photo-tile photo-one"/><div className="photo-tile photo-two"/><div className="photo-tile photo-three"/></>}
                      {project.mark === "polls" && <><div className="poll-line"/><div className="poll-option wide"/><div className="poll-option"/><div className="poll-option short"/></>}
                      {project.mark === "qpum" && <><div className="quiz-bubble">?</div><div className="quiz-pill">TEAM A</div><div className="quiz-pill second">TEAM B</div></>}
                    </div>
                  </div>
                  <span className="preview-index">{project.number}</span>
                </div>
                <div className="project-info">
                  <p className="project-type">{project.type}</p>
                  <h3>{project.name}</h3>
                  <p className="project-description">{isFr ? project.descriptionFr : project.description}</p>
                  <div className="tag-list project-tags">{project.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div>
                  <a className="text-link" href={project.github} target="_blank" rel="noreferrer">{t.viewCode}<ArrowUpRight size={16}/></a>
                </div>
              </article>
            ))}
          </div>
          <p className="projects-note">* {isFr ? "Les liens GitHub sont des exemples à remplacer par les dépôts publics correspondants." : "GitHub links are placeholders — replace them with the relevant public repositories."}</p>
        </section>

        <section className="section-wrap contact-section" id="contact">
          <div className="contact-orb"/>
          <div className="contact-content">
            <p className="eyebrow">{t.contactLabel}</p>
            <h2>{t.contactTitle}</h2>
            <p>{t.contactText}</p>
            <a className="button button-primary" href="mailto:hello@example.com">{t.emailMe}<Mail size={17}/></a>
          </div>
          <div className="contact-decoration"><Code2 size={104} strokeWidth={0.7}/><span>01001<br/>10110<br/>01010</span></div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a className="brand" href="#home">cg<span>.</span></a>
        <p>© {new Date().getFullYear()} · {t.footer}</p>
        <a className="back-top" href="#home">{t.top}<ArrowUpRight size={14}/></a>
      </footer>
    </div>
  );
}

export default App;
