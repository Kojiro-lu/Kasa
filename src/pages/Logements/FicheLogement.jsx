import { useParams, useNavigate } from "react-router";
import "./FicheLogement.scss";
import LogementsData from "../../data/Logements.json";
import Carrousel from "../../components/Caroussel/Carrousel";

function FicheLogement() {
  const { id } = useParams(); // récupèration de l'ID dans l'url
  const logement = LogementsData.find((logement) => logement.id === id); // on recherche le logement qui correspond

  return (
    <div className="Logement-Container">
      {logement && <Carrousel images={logement.pictures} />}
    </div>
  );
}

export default FicheLogement;
