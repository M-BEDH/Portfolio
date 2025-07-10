import "../App.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { Link } from "react-router-dom";

gsap.registerPlugin(useGSAP);

function Accueil() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const titreSpans = containerRef.current.querySelectorAll("h1 span");
    const btns = containerRef.current.querySelectorAll(".btn-first");
    const l1 = containerRef.current.querySelector(".l1");
    const l2 = containerRef.current.querySelector(".l2");
    const medias = containerRef.current.querySelectorAll(".medias .bulle"); 

    const Anim = gsap.timeline({ paused: true });

    Anim
      .staggerFrom(titreSpans, 0.6, { top: -50, opacity: 0, ease: "power2.out" }, 0.3)
      .staggerFrom(btns, 0.6, { opacity: 0, ease: "power2.out" }, 0.3, "-=1")
      .from(l1, 1, { width: 0.6, ease: "power2.out" }, "-=1.2")
      .from(l2, 1, { width: 0, ease: "power2.out" }, "-=1.5")
      .staggerFrom(medias, 0.6, {right: -200, ease: "power2.out"}, 0.3, '-=1');

    Anim.play();
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
        <div className="container-first">
          <h1>
            <span>Bienvenue </span>
            <span>sur </span>
            <span>mon </span>
            <span>portfolio</span>
          </h1>
          <div className="container-btns">
            <Link to="/projet">
              <button className="btn-first b1">Discover</button>
            </Link>
            <Link to="/a_propos">
              <button className="btn-first b2">À propos</button>
            </Link>
            <Link to="/contact">
              <button className="btn-first b2">Contact</button>
            </Link>
          </div>
        </div>

       <a href={process.env.PUBLIC_URL + "/ressources/cv.pdf"}>
          <img src={process.env.PUBLIC_URL + "/ressources/cv.png"} className="logo" alt="lien pour accéder au curriculum vitae" />
        </a>


        <ul className="medias">
          <li className="bulle">
            <a href="https://www.linkedin.com/in/melissa-bedhomme" target="_blank" rel="noopener noreferrer">
              <img src={process.env.PUBLIC_URL + "/ressources/linkedin.png"} className="logo-medias" alt="Lien vers LinkedIn" />
            </a>
          </li>
          <li className="bulle">
            <a href="https://github.com/M-BEDH" target="_blank" rel="noopener noreferrer">
              <img src={process.env.PUBLIC_URL + "/ressources/github.svg"} className="logo-medias" alt="Lien vers GitHub" />
            </a>
          </li>
        </ul>
      </main>

      <footer>
        <p>&copy; 2025 Mélissa Bedhomme. Tous droits réservés.</p>
      </footer>
    </div>
  );
}

export default Accueil;