import { useParams, useNavigate } from "react-router";
import { useEffect } from "react";
import "./FicheLogement.scss";
import LogementsData from "../../data/Logements.json";
import Carrousel from "../../components/Caroussel/Carrousel";
import DisplayTitleAndLocation from "../../components/TitleAndLocation/TitleAndLocation";
import Profile from "../../components/Profile/Profile";
import Tags from "../../components/Tags/Tags";
import Rating from "../../components/Rating/Rating";
import Collapse from "../../components/Collapse/Collapse";

function FicheLogement() {
  const { id } = useParams(); // Récupération de l'ID dans l'URL
  const navigate = useNavigate(); // Hook pour la navigation
  const logement = LogementsData.find((logement) => logement.id === id); // Recherche du logement correspondant

  useEffect(() => {
    if (!logement) {
      navigate("/error", { replace: true }); // Redirection vers la page erreur si logement non trouvé
    }
  }, [logement, navigate]);

  if (!logement) return null; // Empêche l'affichage du reste du composant si la redirection ne s'est pas encore effectuée

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
        <div className="profile-and-rating-container">
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
