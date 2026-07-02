"use client";

import { useEffect, useState } from "react";

const services = [
  {
    number: "01",
    title: "Identidade visual",
    text: "Sistemas visuais consistentes para sua marca parecer maior, mais clara e mais confiável.",
  },
  {
    number: "02",
    title: "Design de posts",
    text: "Conteúdos com linguagem visual própria, pensados para feed, campanhas e presença diária.",
  },
  {
    number: "03",
    title: "Impressos",
    text: "Materiais físicos com acabamento profissional: embalagens, papelaria, folders e peças comerciais.",
  },
  {
    number: "04",
    title: "Sites",
    text: "Landing pages e sites que organizam a oferta, elevam percepção e facilitam o próximo contato.",
  },
];

const projects = [
  {
    className: "project-card project-card-light project-large reveal",
    image: "/assets/project-notebook.png",
    alt: "Mockup de caderno da identidade visual Galeria Oslo",
    label: "Branding",
    title: "Galeria Oslo",
    href: "https://www.behance.net/gallery/219908677/Identidade-Visual-Galeria-Oslo",
  },
  {
    className: "project-card reveal",
    image: "/assets/project-mockup.png",
    alt: "Mockup de crachas da identidade visual Andre Mendes",
    label: "Identidade visual",
    title: "Andre Mendes",
    href: "https://www.behance.net/gallery/206443825/Identidade-Visual-Andre-Mendes",
  },
  {
    className: "project-card reveal",
    image: "/assets/project-screen.png",
    alt: "Tela digital azul com projeto de marca",
    label: "Identidade visual",
    title: "Escola Picasso",
    href: "https://www.behance.net/gallery/242826793/Escola-Picasso",
  },
];

const testimonials = [
  {
    image: "/assets/avatar-adriani.png",
    name: "Adriani Guillen",
    text: "Estou muito feliz com o resultado que estou tendo com minha marca. Hoje posso dizer que finalmente encontrei a identidade que eu sempre procurei para minha marca!",
  },
  {
    image: "/assets/avatar-luana.png",
    name: "Luana Bastos",
    text: "Profissional super atencioso que demonstrou realmente ter estudado e analisado a minha marca. Trabalho excelente, muito útil!",
  },
  {
    image: "/assets/avatar-marcela.png",
    name: "Marcela Oliveira",
    text: "O profissionalismo e a dedicação em entender minha marca transformaram minha estratégia com uma análise personalizada e nada genérica.",
  },
  {
    image: "/assets/avatar-cristina.png",
    name: "Cristina Santos",
    text: "Entregaram uma marca autêntica, exatamente como imaginei. Me surpreenderam, o trabalho é impecável. Super indico!",
  },
];

const navLinks = [
  ["Início", "#inicio"],
  ["Serviços", "#servicos"],
  ["Projetos", "#projetos"],
  ["Contato", "#contato"],
];

const whatsappUrl =
  "https://wa.me/5535992009129?text=Ol%C3%A1%2C%20quero%20solicitar%20um%20or%C3%A7amento%20com%20a%20Melo%20Studio%20Design.";
const instagramUrl = "https://www.instagram.com/melo_studiodesign/";
const tickerItems = ["Design", "Identidade visual", "Sites", "Impressos", "Social Media"];

function Brand({ dark = false }: { dark?: boolean }) {
  return (
    <a className={`brand${dark ? " brand-dark" : ""}`} href="#inicio" aria-label="Melo Studio Design">
      <span className="brand-mark" aria-hidden="true">
        <img src="/assets/logos/melo-mark.svg" alt="" />
      </span>
      <span className="brand-copy">
        <strong>Melo</strong>
        <span>Studio Design</span>
      </span>
    </a>
  );
}

function CreatedBrands() {
  return (
    <div className="created-brands" aria-label="Logos de marcas criadas">
      <span className="created-brand-card yellow-brand">
        <img className="created-brand-bg" src="/assets/logos/logo-circle.svg" alt="" />
        <img className="created-brand-mark yellow-mark" src="/assets/logos/logo-yellow-mark.svg" alt="Marca criada com símbolo amarelo" />
      </span>
      <span className="created-brand-card andre-brand">
        <img className="andre-part andre-gray-left" src="/assets/logos/andre-gray-left.svg" alt="" />
        <img className="andre-part andre-gray-right" src="/assets/logos/andre-gray-right.svg" alt="" />
        <img className="andre-part andre-red-left" src="/assets/logos/andre-red-left.svg" alt="" />
        <img className="andre-part andre-red-right" src="/assets/logos/andre-red-right.svg" alt="" />
        <img className="andre-part andre-red-line" src="/assets/logos/andre-red-line.svg" alt="" />
        <span className="andre-name">Andre Mendes</span>
        <span className="andre-role">Consultor Imobiliário</span>
      </span>
      <span className="created-brand-card star-brand">
        <img src="/assets/logos/logo-star.svg" alt="Logo Star" />
      </span>
      <span className="created-brand-card plus-brand" aria-label="Mais marcas">
        +
      </span>
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" role="img" aria-label="WhatsApp">
      <path d="M20.4 3.6A11.4 11.4 0 0 0 2.9 18l-1 4 4.1-1a11.4 11.4 0 0 0 14.4-17.4Zm-8.9 16a8 8 0 0 1-4.1-1.1l-.3-.2-2.4.7.7-2.3-.2-.4a8.2 8.2 0 1 1 6.3 3.3Zm4.6-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.3-.7.8-.8 1-.2.2-.3.2-.6.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.3 0-.4.1-.6l.4-.5c.1-.2.2-.4.3-.5.1-.2 0-.4 0-.5l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-1 1-1 2.4s1 2.8 1.2 3a9.3 9.3 0 0 0 3.6 3.2c1.3.6 1.8.7 2.5.6.8-.1 2.3-.9 2.6-1.8.3-.8.3-1.5.2-1.7-.1-.1-.3-.2-.5-.3Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" role="img" aria-label="Instagram">
      <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8Zm8.8 2.2a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4ZM12 7.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8Zm0 2a2.9 2.9 0 1 0 0 5.8 2.9 2.9 0 0 0 0-5.8Z" />
    </svg>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 12);

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  useEffect(() => {
    const revealTargets = document.querySelectorAll<HTMLElement>(".reveal");

    if (!("IntersectionObserver" in window)) {
      revealTargets.forEach((target) => target.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -60px 0px" },
    );

    revealTargets.forEach((target, index) => {
      target.style.transitionDelay = `${Math.min(index * 35, 240)}ms`;
      observer.observe(target);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!canHover || prefersReducedMotion) return;

    const cards = document.querySelectorAll<HTMLElement>("[data-tilt-card]");

    const handleMouseMove = (event: MouseEvent) => {
      const card = event.currentTarget as HTMLElement;
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      card.style.transform = `perspective(900px) rotateX(${y * -5}deg) rotateY(${x * 6}deg) translateY(-3px)`;
    };

    const handleMouseLeave = (event: MouseEvent) => {
      const card = event.currentTarget as HTMLElement;
      card.style.transform = "";
    };

    cards.forEach((card) => {
      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener("mousemove", handleMouseMove);
        card.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
        <Brand />

        <button
          className={`nav-toggle${menuOpen ? " is-open" : ""}`}
          type="button"
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span />
          <span />
        </button>

        <nav className={`main-nav${menuOpen ? " is-open" : ""}`}>
          {navLinks.map(([label, href]) => (
            <a key={href} href={href} onClick={closeMenu}>
              {label}
            </a>
          ))}
        </nav>

        <a className="button button-yellow header-cta" href="#contato">
          Solicitar orçamento
        </a>
      </header>

      <main>
        <section className="hero section-shell" id="inicio">
          <div className="hero-copy reveal">
            <p className="eyebrow">Design para marcas que querem crescer</p>
            <h1>
              Melo Studio
              <span>Design</span>
            </h1>
            <p className="hero-lede">
              Identidade visual, sites e peças gráficas para sua marca parecer maior, vender melhor e ser lembrada antes da primeira conversa.
            </p>

            <ul className="hero-proof" aria-label="Destaques do studio">
              <li>
                <strong>4+ anos</strong>
                <span>criando marcas</span>
              </li>
              <li>
                <strong>Branding</strong>
                <span>com direção</span>
              </li>
              <li>
                <strong>Sites</strong>
                <span>para converter</span>
              </li>
            </ul>

            <div className="hero-actions">
              <a className="button button-yellow" href="#contato">
                Entrar em contato
              </a>
              <a className="button button-ghost" href="#projetos">
                Ver projetos
              </a>
            </div>
          </div>

          <div className="hero-visual reveal" data-tilt-card>
            <div className="hero-frame">
              <img src="/assets/hero-founder.png" alt="Designer da Melo Studio trabalhando em um notebook" />
            </div>
            <div className="floating-note note-top">
              <span>Identidade</span>
              <strong>com direção</strong>
            </div>
            <div className="floating-note note-bottom">
              <span>Visual</span>
              <strong>que vende</strong>
            </div>
          </div>
        </section>

        <section className="ticker" aria-label="Serviços em destaque">
          <div className="ticker-track">
            {Array.from({ length: 8 }).map((_, groupIndex) => (
              <div className="ticker-group" key={`ticker-group-${groupIndex}`} aria-hidden={groupIndex > 0}>
                {tickerItems.map((item) => (
                  <span key={`${item}-${groupIndex}`}>{item}</span>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section className="services section-shell" id="servicos">
          <div className="section-heading reveal">
            <p className="eyebrow">Serviços disponíveis</p>
            <h2>Confira como podemos te ajudar.</h2>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card reveal" key={service.number}>
                <span className="service-number">{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <span className="service-check" aria-hidden="true" />
              </article>
            ))}
          </div>
        </section>

        <section className="projects section-shell" id="projetos">
          <div className="section-heading reveal">
            <p className="eyebrow">Projetos realizados</p>
            <h2>Marcas com presença, método e acabamento.</h2>
          </div>

          <div className="project-board">
            {projects.map((project) => (
              <a
                className={project.className}
                data-tilt-card
                href={project.href}
                key={project.image}
                target="_blank"
                rel="noreferrer"
                aria-label={`Ver projeto ${project.title} no Behance`}
              >
                <img src={project.image} alt={project.alt} />
                <div>
                  <span>{project.label}</span>
                  <h3>{project.title}</h3>
                </div>
              </a>
            ))}
          </div>

          <a className="project-banner reveal" href="#contato">
            E muito mais. Vamos construir a próxima marca?
          </a>
        </section>

        <section className="about" id="sobre">
          <div className="section-shell about-inner">
            <div className="about-copy reveal">
              <p className="eyebrow eyebrow-inverse">Sobre a</p>
              <h2>Melo Studio Design</h2>
              <p>
                A marca nasceu com seu fundador Natan Melo, designer gráfico com mais de 4 anos de experiência. O propósito do
                Studio é criar marcas com destaque no mercado através de um visual funcional e elegante.
              </p>
              <a className="button button-yellow" href="#contato">
                Elevar minha marca
              </a>
            </div>

            <div className="about-portrait reveal">
              <div className="about-portrait-crop">
                <img src="/assets/about-founder.png" alt="Natan Melo, fundador da Melo Studio Design" />
              </div>
              <span className="about-badge" aria-hidden="true">
                <img src="/assets/logos/melo-mark.svg" alt="" />
              </span>
            </div>
          </div>
        </section>

        <section className="brand-strip" aria-label="Marcas criadas">
          <div className="brand-strip-inner">
            <CreatedBrands />
            <p>Confiado por várias marcas</p>
          </div>
        </section>

        <section className="testimonials section-shell" id="feedbacks">
          <div className="section-heading reveal">
            <p className="eyebrow">Feedbacks</p>
            <h2>O que muda quando a marca finalmente se encontra.</h2>
          </div>

          <div className="testimonial-grid">
            {testimonials.map((testimonial) => (
              <article className="testimonial-card reveal" key={testimonial.name}>
                <div className="testimonial-author">
                  <img src={testimonial.image} alt={testimonial.name} />
                  <div>
                    <h3>{testimonial.name}</h3>
                    <span>★★★★★</span>
                  </div>
                </div>
                <p>{testimonial.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="cta" id="contato">
          <div className="section-shell cta-inner reveal">
            <div>
              <p className="eyebrow eyebrow-inverse">Próximo passo</p>
              <h2>Vamos elevar o nível da sua marca?</h2>
              <p>Solicite seu orçamento direto pelo WhatsApp.</p>
            </div>
            <a
              className="whatsapp-card"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              <span aria-hidden="true">
                <WhatsAppIcon />
              </span>
              <strong>Chamar no WhatsApp</strong>
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner section-shell">
          <div className="footer-top">
            <a className="footer-brand" href="#inicio" aria-label="Melo Studio Design">
              <img src="/assets/logos/melo-mark.svg" alt="" />
              <span>
                Melo
                <br />
                Studio
              </span>
            </a>
            <nav aria-label="Links do rodapé">
              {navLinks.map(([label, href]) => (
                <a key={href} href={href}>
                  {label}
                </a>
              ))}
            </nav>
            <div className="footer-social" aria-label="Redes sociais">
              <a href={instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram da Melo Studio Design">
                <InstagramIcon />
              </a>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp da Melo Studio Design">
                <WhatsAppIcon />
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              Feito com <span aria-hidden="true">♥</span> por Melo Studio
            </p>
            <p>Todos os direitos reservados</p>
          </div>
        </div>
      </footer>
    </>
  );
}
