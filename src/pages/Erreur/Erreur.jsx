import "./Erreur.scss";
import { Link } from "react-router-dom";

function Erreur() {
  return (
    <div className="erreur-container">
      <h1>404</h1>
      <p>
        Oups! La page que
        <span>vous demandez n'existe pas.</span>
      </p>
      <Link to="/" className="erreur-container__link-home-return">
        Retour à la page d'accueil
      </Link>
    </div>
  );
}

export default Erreur;
