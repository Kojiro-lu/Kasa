import "./Home.scss";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Cards/Cards";

function Home() {
  return (
    <div className="home-container">
      <div className="banner-container">
        <Banner />
      </div>
      <div className="card-container">
        <Card />
      </div>
    </div>
  );
}

export default Home;
