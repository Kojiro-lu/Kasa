import { useParams } from "react-router";
import "./FicheLogement.scss";
import LogementsData from "../../data/Logements.json";
import Carrousel from "../../components/Caroussel/Carrousel";
import DisplayTitleAndLocation from "../../components/TitleAndLocation/TitleAndLocation";

function FicheLogement() {
  const { id } = useParams(); // récupèration de l'ID dans l'url
  const logement = LogementsData.find((logement) => logement.id === id); // on recherche le logement qui correspond

  return (
    <div className="Logement-Container">
      <Carrousel images={logement?.pictures} />
      <div className="tilelogement-and-profil-container">
        <DisplayTitleAndLocation
          title={logement.title}
          location={logement.location}
        />
      </div>
    </div>
  );
}

export default FicheLogement;
