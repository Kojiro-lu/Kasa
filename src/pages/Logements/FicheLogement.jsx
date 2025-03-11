import { useParams } from "react-router";
import "./FicheLogement.scss";
import LogementsData from "../../data/Logements.json";
import Carrousel from "../../components/Caroussel/Carrousel";
import DisplayTitleAndLocation from "../../components/TitleAndLocation/TitleAndLocation";
import Profile from "../../components/Profile/Profile";
import Tags from "../../components/Tags/Tags";

function FicheLogement() {
  const { id } = useParams(); // récupèration de l'ID dans l'url
  const logement = LogementsData.find((logement) => logement.id === id); // on recherche le logement qui correspond

  return (
    <div className="Logement-Container">
      <Carrousel images={logement?.pictures} />
      <div className="tile-and-profil-container">
        <DisplayTitleAndLocation
          title={logement.title}
          location={logement.location}
        />
        <Profile name={logement.host.name} picture={logement.host.picture} />
      </div>
      <div className="tags-and-rate-container">
        <Tags tags={logement.tags} />
      </div>
    </div>
  );
}

export default FicheLogement;
