import { useParams, useNavigate } from "react-router";
import "./FicheLogement.scss";
import LogementsData from "../../data/Logements.json";
import Carrousel from "../../components/Caroussel/Carrousel";

function FicheLogement() {
  const { id } = useParams(); // récupèration de l'ID dans l'url
  const navigate = useNavigate(); // Initialisation de useNavigate
  const logement = LogementsData.find((logement) => logement.id === id); // on recherche le logement qui correspond

  if (!logement) {
    navigate("/Erreur", { replace: true });
    return null;
  }
  return (
    <div className="Logement-Container">
      {logement && <Carrousel images={logement.pictures} />}
    </div>
  );
}

export default FicheLogement;
