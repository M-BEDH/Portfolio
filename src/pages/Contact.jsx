import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Link } from "react-router-dom"; // Ajouté
import "../App.css";

gsap.registerPlugin(useGSAP);

function Contact() {
  const containerRef = useRef(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const titre = containerRef.current.querySelectorAll("h1 span");
    const btns = containerRef.current.querySelectorAll(".btn-first");
    const lignes = containerRef.current.querySelectorAll(".ligne");
    const textes = containerRef.current.querySelectorAll(".container-contact p, .form-contact label, .form-contact input, .form-contact textarea, .form-contact button");

    const TL = gsap.timeline({ paused: true });

    TL
      .staggerFrom(titre, 1, { top: -50, opacity: 0, ease: "power2.out" }, 0.3)
      .staggerFrom(lignes, 0.7, { opacity: 0, x: -30, ease: "power2.out" }, 0.15, "-=0.8")
      .staggerFrom(btns, 1, { opacity: 0, ease: "power2.out" }, 0.3, "-=0.8")
      .staggerFrom(textes, 0.5, { opacity: 0, y: 30, ease: "power2.out" }, 0.1, "-=1");

    TL.play();
  }, []);

  return (
    <div ref={containerRef}>
      <header>
        <div className="lignes">
          <div className="ligne l1"></div>
          <div className="ligne l2"></div>
        </div>
      </header>

      <main>
        <div className="container-first contact">
          <h1>
            <span>Mon </span>
            <span>Contact </span>
          </h1>
        </div>

        <div className="container-btns contact">
          <Link to="/">
            <button type="button" className="btn-first b2">Accueil</button>
          </Link>
          <Link to="/projet">
            <button type="button" className="btn-first b1">Discover</button>
          </Link>
          <Link to="/a_propos">
            <button type="button" className="btn-first b2">À propos</button>
          </Link>
        </div>

        <a href={process.env.PUBLIC_URL + "/ressources/cv.pdf"}>
          <img src={process.env.PUBLIC_URL + "/ressources/cv.png"} className="logo" alt="lien pour accéder au curriculum vitae" />
        </a>

        <div className="container-contact">
          <p>
            Si vous avez des questions, des suggestions ou si vous souhaitez discuter d'un projet, n'hésitez pas à me contacter.
          </p>
          <p>
            Vous pouvez me joindre par email via le formulaire ci-dessous. Je me ferai un plaisir de vous répondre dans les plus brefs délais.
          </p>
          <p>
            Pour toute question ou information, veuillez me contacter :
          </p>
        </div>

        <form action="#" method="post" className="form-contact">
          <label htmlFor="nom">Nom :</label>
          <input type="text" id="nom" name="nom" required placeholder="votre nom" defaultValue="" />

          <label htmlFor="email">Email :</label>
          <input type="email" id="email" name="email" required placeholder="votre email" defaultValue="" />

          <label htmlFor="message">Message :</label>
          <textarea id="message" name="message" rows="5" required placeholder="votre message" defaultValue=""></textarea>

          <button type="submit">Envoyer</button>
        </form>
      </main>

      <footer className="footer-contact">
        <p>&copy; 2025 Mélissa Bedhomme. Tous droits réservés.</p>
      </footer>
    </div>
  );
}

export default Contact;