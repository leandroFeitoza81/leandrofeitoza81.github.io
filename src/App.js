import { useState } from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import CodeIcon from '@material-ui/icons/Code';
import SupportIcon from '@material-ui/icons/HeadsetMic';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import StorageIcon from '@material-ui/icons/Storage';

import './App.css';

const GITHUB_USER = 'LeandroFeitozaGnu';
const GITHUB_URL = `https://github.com/${GITHUB_USER}`;
const LINKEDIN_URL = 'https://www.linkedin.com/in/leandrofeitoza';

const NAV = [
  { href: '#home', label: 'Home' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#trajetoria', label: 'Trajetória' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#contato', label: 'Contato' },
];

const TIMELINE = [
  {
    icon: <SupportIcon />,
    title: 'Suporte Técnico',
    text: 'Larga experiência profissional na área de suporte técnico.',
  },
  {
    icon: <CodeIcon />,
    title: '2020 · A virada para o desenvolvimento Web',
    text: 'Decidi mudar de área e começar a construir uma carreira como desenvolvedor.',
  },
  {
    icon: <SchoolIcon />,
    title: 'Junho de 2020 · Início na Trybe',
    text: 'Comecei a estudar desenvolvimento web na Trybe.',
  },
  {
    icon: <WorkIcon />,
    title: 'Dezembro de 2020 · Desenvolvedor Front-End Júnior',
    text: 'Concluí a formação como Desenvolvedor Front-End Júnior.',
  },
  {
    icon: <StorageIcon />,
    title: '2021 · Rumo ao Full-Stack',
    text: 'Planejei estudar Back-End e Ciência da Computação para me formar como desenvolvedor Full-Stack.',
  },
];

const BUILT_WITH = ['React', 'Material-UI', 'CSS', 'GitHub Pages'];

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
          <h2>sou desenvolvedor Front-End Júnior</h2>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#projetos">Ver projetos</a>
            <a className="btn" href="#contato">Entre em contato</a>
          </div>
        </section>

        <section id="sobre" className="section-sobre">
          <h2 className="section-title">Sobre mim</h2>
          <div className="wraper-text-sobre">
            <p>
              Seja bem-vindo ao meu site pessoal. Fique à vontade para explorar e conhecer a seção Projetos, onde você confere o que desenvolvi, e a seção Sobre, para que me conheça um pouco mais.
            </p>
            <p>
              Depois de uma larga experiência profissional como Suporte Técnico, no ano de 2020 resolvi mudar para a área de desenvolvimento Web.
            </p>
            <p>
              Em junho de 2020 comecei a estudar desenvolvimento web na Trybe e, em dezembro de 2020, me formei como Desenvolvedor Front-End Júnior.
            </p>
            <p>
              Procuro uma oportunidade de iniciar a carreira de desenvolvedor e continuar aperfeiçoando as minhas habilidades de Dev.
            </p>
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
            <article className="card">
              <h3>Este site</h3>
              <p>Meu site pessoal, feito com React e Material-UI e publicado no GitHub Pages.</p>
              <ul className="tags">
                {BUILT_WITH.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <a className="card-link" href={`${GITHUB_URL}/${GITHUB_USER.toLowerCase()}.github.io`} target="_blank" rel="noreferrer">
                Ver código
              </a>
            </article>
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
              <GitHubIcon fontSize="large" />
              <span>GitHub</span>
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedInIcon fontSize="large" />
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
