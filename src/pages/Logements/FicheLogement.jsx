import { useParams } from "react-router";
import "./FicheLogement.scss";
import LogementsData from "../../data/Logements.json";
import Carrousel from "../../components/Caroussel/Carrousel";
import DisplayTitleAndLocation from "../../components/TitleAndLocation/TitleAndLocation";
import Profile from "../../components/Profile/Profile";
import Tags from "../../components/Tags/Tags";
import Rating from "../../components/Rating/Rating";
import Collapse from "../../components/Collapse/Collapse";

function FicheLogement() {
  const { id } = useParams(); // récupèration de l'ID dans l'url
  const logement = LogementsData.find((logement) => logement.id === id); // on recherche le logement qui correspond

  return (
    <div className="logement-container">
      <Carrousel images={logement?.pictures} />
      <div className="middle-container">
        <div className="tile-and-tags-container">
          <DisplayTitleAndLocation
            title={logement.title}
            location={logement.location}
          />
          <Tags tags={logement.tags} />
        </div>
        <div className="profile-and-rate-container">
          <Profile name={logement.host.name} picture={logement.host.picture} />
          <Rating rating={logement.rating} />
        </div>
      </div>
      <div className="logement-collapse-container">
        <Collapse title="Description" content={logement.description} />
        <Collapse
          title="Equipements"
          content={
            <ul className="equipements-liste">
              {logement.equipments.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          }
        />
      </div>
    </div>
  );
}

export default FicheLogement;
