import "./Home.scss";
import Banner from "../../components/Banner/Banner";
import BannerHome from "../../assets/images/banner.png";
import Card from "../../components/Cards/Cards";
import logementsData from "../../data/Logements.json";

function Home() {
  return (
    <div className="home-container">
      <div className="banner-container">
        <Banner image={BannerHome} text="Chez vous, partout et ailleurs" />
      </div>
      <div className="card-container">
        {logementsData.map((logement) => (
          <Card
            key={logement.id}
            id={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
