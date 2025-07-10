import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import "../App.css";

gsap.registerPlugin(useGSAP);

function Apropos() {
  const containerRef = useRef(null);

  useGSAP(() => {
    if (!containerRef.current) return;
    const titreSpans = containerRef.current.querySelectorAll("h1 span");
    const btns = containerRef.current.querySelectorAll(".btn-first");
    const l1 = containerRef.current.querySelector(".l1");
    const l2 = containerRef.current.querySelector(".l2");
    const lignes = containerRef.current.querySelectorAll(".text-info .ligne");

    const Anim = gsap.timeline({ paused: true });

    Anim
      .staggerFrom(titreSpans, 0.6, { top: -50, opacity: 0, ease: "power2.out" }, 0.3)
      .staggerFrom(lignes, 0.7, { opacity: 0, x: -30, ease: "power2.out" }, 0.2, "-=0.8")
      .staggerFrom(btns, 0.6, { opacity: 0, ease: "power2.out" }, 0.3, "-=0.8")
       .from(l1, 0.6, { scaleX: 0, transformOrigin: "left center", ease: "power2.out"}, "-=1.2")
      .from(l2, 0.6, { scaleX: 0, transformOrigin: "left center", ease: "power2.out"}, "-=1.5")

    Anim.play();
  }, []);

  return (
    <div ref={containerRef}>
      <header>
        <div className="lignes">
          <div className="l1"></div>
          <div className="l2"></div>
        </div>

       <div className="cv">
          <a href={process.env.PUBLIC_URL + "/ressources/cv.pdf"}>
           <img src={process.env.PUBLIC_URL + "/ressources/cv.png"}  alt="lien pour accéder au curriculum vitae"/>
           <div className="content">Télécharger le CV</div>
          </a> 
        </div>
      </header>

      <main>
        <div className="container-first a_propos">
          <h1>
            <span>A </span>
            <span>propos </span>
            <span>de </span>
            <span>moi : </span>
          </h1>

          <article>
            <p className="text-info">
              <span className="ligne">Bonjour et bienvenue sur mon portfolio ! </span>
              <br />
              <span className="ligne">
                Je m'appelle Mélissa Bedhomme. J'ai commencé mon parcours dans ce domaine en 2022.
              </span>
              <br />
              <span className="ligne">
                Après avoir obtenu mon diplôme de développeuse web, j'ai poursuivi ma formation avec le
                titre CDA - conceptrice d'applications mobiles.
              </span>
              <br />
              <span className="ligne">
                Depuis, j'ai acquis une solide expérience dans la création de sites web dynamiques et
                interactifs.
              </span>
              <br />
              <span className="ligne">
                N'hésitez pas à parcourir mon portfolio pour découvrir mes projets et mes compétences.
              </span>
              <br />
              <span className="ligne">Merci de votre visite !</span>
            </p>
          </article>

          <div className="container-btns a_propos">
            <Link to="/">
              <button type="button" className="btn-first b2">Accueil</button>
            </Link>
            <Link to="/projet">
              <button type="button" className="btn-first b1">Discover</button>
            </Link>
            <Link to="/contact">
              <button type="button" className="btn-first b2">Contact</button>
            </Link>
          </div>
        </div>
      </main>

      <footer className="footer_a_propos">
        <p>&copy; 2025 Mélissa Bedhomme. Tous droits réservés.</p>
      </footer>
    </div>
  );
}

export default Apropos;