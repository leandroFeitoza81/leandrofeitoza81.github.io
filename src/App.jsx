import { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdCloud, MdCode, MdDns, MdHeadsetMic, MdSchool, MdStorage, MdWork } from 'react-icons/md';

import './App.css';

const GITHUB_USER = 'leandroFeitoza81';
const GITHUB_URL = `https://github.com/${GITHUB_USER}`;
const LINKEDIN_URL = 'https://www.linkedin.com/in/leandrofeitoza';

const NAV = [
  { href: '#home', label: 'Home' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#skills', label: 'Skills' },
  { href: '#trajetoria', label: 'Trajetória' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#contato', label: 'Contato' },
];

const TIMELINE = [
  {
    icon: <MdHeadsetMic />,
    title: 'Suporte Técnico',
    text: 'Larga experiência profissional na área de suporte técnico.',
  },
  {
    icon: <MdSchool />,
    title: '2020 · Virada para o desenvolvimento Web',
    text: 'Em junho de 2020 comecei a estudar desenvolvimento web e concluí o curso Full-Stack.',
  },
  {
    icon: <MdCode />,
    title: 'Migração para C# e .NET',
    text: 'Deixei de trabalhar com JavaScript e Node e migrei para o desenvolvimento Back-End com C#.',
  },
  {
    icon: <MdWork />,
    title: 'Desde 2021 · Desenvolvedor Back-End na Webmotors',
    text: 'Trabalho com desenvolvimento Back-End em C# e .NET, bancos relacionais e cloud AWS.',
  },
];

const SKILLS = [
  { icon: <MdStorage />, title: 'Back-End', items: ['C#', '.NET'] },
  { icon: <MdCloud />, title: 'Cloud', items: ['AWS'] },
  { icon: <MdDns />, title: 'Bancos relacionais', items: ['SQL Server', 'PostgreSQL'] },
];

const PROJECTS = ['yake-shave', 'webapi-default'];

function Avatar() {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return <div className="avatar avatar-fallback" aria-hidden="true">LF</div>;
  }
  return (
    <img
      className="avatar"
      src={`${GITHUB_URL}.png?size=400`}
      alt="Foto de perfil de Leandro Feitoza"
      onError={() => setFailed(true)}
    />
  );
}

function App() {
  return (
    <>
      <header className="cabecalho-principal">
        <a className="logo" href="#home">LF</a>
        <nav>
          <ul>
            {NAV.map(({ href, label }) => (
              <li key={href}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>
        <section id="home" className="apresentacao-pessoal">
          <Avatar />
          <h3>{'<Hello World />'}</h3>
          <h1>Me chamo Leandro</h1>
          <h2>sou desenvolvedor Back-End na Webmotors</h2>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#projetos">Ver projetos</a>
            <a className="btn" href="#contato">Entre em contato</a>
          </div>
        </section>

        <section id="sobre" className="section-sobre">
          <h2 className="section-title">Sobre mim</h2>
          <div className="wraper-text-sobre">
            <p>
              Seja bem-vindo ao meu site pessoal. Fique à vontade para explorar meus projetos e conhecer um pouco mais da minha trajetória.
            </p>
            <p>
              Depois de uma larga experiência profissional como Suporte Técnico, em 2020 resolvi mudar para a área de desenvolvimento Web. Comecei a estudar em junho de 2020 e concluí o curso Full-Stack.
            </p>
            <p>
              Desde então deixei de trabalhar com JavaScript e Node e migrei para o C#. Desde 2021 atuo como desenvolvedor Back-End na Webmotors, com C# e .NET, bancos relacionais (SQL Server e PostgreSQL) e cloud AWS.
            </p>
          </div>
        </section>

        <section id="skills" className="section-skills">
          <h2 className="section-title">O que eu domino</h2>
          <div className="cards">
            {SKILLS.map(({ icon, title, items }) => (
              <article key={title} className="card">
                <span className="skill-icon">{icon}</span>
                <h3>{title}</h3>
                <ul className="tags">
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="trajetoria" className="section-trajetoria">
          <h2 className="section-title">Trajetória</h2>
          <ol className="timeline">
            {TIMELINE.map(({ icon, title, text }) => (
              <li key={title} className="timeline-item">
                <span className="timeline-icon">{icon}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section id="projetos" className="section-projetos">
          <h2 className="section-title">Projetos</h2>
          <div className="cards">
            {PROJECTS.map((name) => (
              <article key={name} className="card">
                <h3>{name}</h3>
                <p>Repositório no GitHub.</p>
                <a className="card-link" href={`${GITHUB_URL}/${name}`} target="_blank" rel="noreferrer">
                  Ver código
                </a>
              </article>
            ))}
            <article className="card card-more">
              <h3>Mais projetos</h3>
              <p>Os demais projetos que desenvolvi estão no meu GitHub.</p>
              <a className="card-link" href={`${GITHUB_URL}?tab=repositories`} target="_blank" rel="noreferrer">
                Ver repositórios
              </a>
            </article>
          </div>
        </section>

        <section id="contato" className="section-contato">
          <h2 className="section-title">Entre em contato</h2>
          <div className="wraper-links-contato">
            <a href={GITHUB_URL} target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub />
              <span>GitHub</span>
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="rodape">
        <p>© {new Date().getFullYear()} Leandro Feitoza · Feito com React</p>
      </footer>
    </>
  );
}

export default App;
