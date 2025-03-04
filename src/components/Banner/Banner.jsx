import "./Banner.scss";
import bannerimage from "../../assets/images/banner.png";

function Banner() {
  return (
    <div className="banner">
      <img src={bannerimage} alt="banniére" className="banner__image" />
      <div className="banner__overlay"></div>
      <p>Chez vous, partout et ailleurs</p>
    </div>
  );
}

export default Banner;
