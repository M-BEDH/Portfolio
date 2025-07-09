import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import "../App.css";

gsap.registerPlugin(useGSAP);

const projets = [
  {
    titre: "HomyFood",
    img: "/ressources/HoMyFood.webp",
    alt: "image projet HomyFood",
    lienSite: "https://m-bedh.github.io/Ohmyfood-P-3/",
    description: "Intégration d'une maquette (figma) en HTML et CSS dynamique, avec animations",
    lienGithub: "https://github.com/M-BEDH/Ohmyfood-P-3",
  },
  {
    titre: "Kanap - JavaScript",
    img: "/ressources/Kanap.webp",
    alt: "image code backend projet Kanap",
    lienSite: "https://github.com/M-BEDH/KANAP_JavaScript",
    description:
      "JavaScript Ecriture du Backend - API, URLSearchParams, localStorage.",
    lienGithub: "https://github.com/M-BEDH/KANAP_JavaScript",
  },
  {
    titre: "La Panthère - SEO",
    img: "/ressources/Panthere.webp",
    alt: "image projet la panthere",
    lienSite: "https://m-bedh.github.io/la-panthere-P4/",
    description:
      "Reécriture du code pour amélioration de performance, d'accessibilité, de référencement . SEO ",
    lienGithub: "https://github.com/M-BEDH/la-panthere-P4",
  },
  {
    titre: "Agence Immobilière",
    img: "/ressources/Kasa.webp",
    alt: "image code projet kasa",
    lienSite: "https://m-bedh.github.io/Kasa_P7/",
    description:
      "Application d'une agence immobilière complète avec react, react router, react hooks",
    lienGithub: "https://github.com/M-BEDH/Kasa_P7",
  },
  {
    titre: "Hot Takes",
    img: "/ressources/Hot-takes.webp",
    alt: "image code projet Hot-Takes sauce piquante",
    lienSite: "https://github.com/M-BEDH/Projet_6_Hot_Takes",
    description:
      "Construction d'une API avec express, Node.js, MongoDB, Mongoose, JWT, Bcrypt",
    lienGithub: "https://github.com/M-BEDH/Projet_6_Hot_Takes",
  },
  {
    titre: "To do List",
    img: "/ressources/TodoList.webp",
    alt: "image projet To-Do-List",
    lienSite: "https://m-bedh.github.io/To-Do-List/",
    description: "Todolist - Projet Personnel React",
    lienGithub: "https://github.com/M-BEDH/To-Do-List",
  },
  {
    titre: "Site de Burger",
    img: "/ressources/Burger.webp",
    alt: "image code projet burger",
    lienSite: "https://m-bedh.github.io/Burger/",
    description: "Site de Burger - Projet Personnel React",
    lienGithub: "https://github.com/M-BEDH/Burger",
  },
  {
    titre: "Calculatrice",
    img: "/ressources/Calculatrice.webp",
    alt: "image projet calculatrice",
    lienSite: "https://m-bedh.github.io/Calculatrice/",
    description: "Calculatrice - Projet Personnel",
    lienGithub: "https://github.com/M-BEDH/Calculatrice",
  },
];

function Projet() {
  const containerRef = useRef(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const titreSpans = containerRef.current.querySelectorAll("h1 span");
    const btns = containerRef.current.querySelectorAll(".btn-first");
    const l1 = containerRef.current.querySelector(".l1");
    const l2 = containerRef.current.querySelector(".l2");
    const lignes = containerRef.current.querySelectorAll(".text-info .ligne");

    const TL = gsap.timeline({ paused: true });

    TL
      .staggerFrom(titreSpans, 0.6, { top: -50, opacity: 0, ease: "power2.out" }, 0.3)
      .staggerFrom(lignes, 0.7, { opacity: 0, x: -30, ease: "power2.out" }, 0.15, "-=0.8")
      .staggerFrom(btns, 0.6, { opacity: 0, ease: "power2.out" }, 0.3, "-=0.8")
      .from(l1, 0.6, { width: 0, ease: "power2.out" }, "-=1.2")
      .from(l2, 0.6, { width: 0, ease: "power2.out" }, "-=1.5");

    TL.play();
  }, []);

  return (
    <div ref={containerRef}>

      <header>
        <div className="lignes">
          <div className="l1"></div>
          <div className="l2"></div>
        </div>
      </header>

      <main>
        <div className="container-first projets">
          <h1>
            <span>Mes </span>
            <span>Projets </span>
          </h1>
        </div>

        <div className="container-btns projets">
          <Link to="/">
            <button className="btn-first b2">Accueil</button>
          </Link>
          <Link to="/a_propos">
            <button type="button" className="btn-first b1">À propos</button>
          </Link>
          <Link to="/contact">
            <button className="btn-first b2">Contact</button>
          </Link>
        </div>

        <div id="projetsContainer">
          {projets.map((projet, index) => (
            <div
              key={projet.titre}
              className={`divProjet ${index % 2 === 0 ? "scale-up-bl" : "scale-up-tr"}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <p className="projet">
                <a href={projet.lienSite} target="_blank" rel="noopener noreferrer">
                  <span className="titreProjet">{projet.titre}</span>
                  <img
                    src={process.env.PUBLIC_URL + projet.img}
                    alt={projet.alt || projet.titre}
                  />
                </a>
              </p>
              <p className="description">
                {projet.description}
              </p>
              <p className="techno">
                <a href={projet.lienGithub} target="_blank" rel="noopener noreferrer">
                  Code du projet <i className="fa-brands fa-github"></i>
                </a>
              </p>
            </div>
          ))}
        </div>
      </main>

      <footer className="footer-discover">
        <p>&copy; 2025 Mélissa Bedhomme. Tous droits réservés.</p>
      </footer>

    </div>
  );
}

export default Projet;