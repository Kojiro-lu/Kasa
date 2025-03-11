import "./Banner.scss";

function Banner({ image, text }) {
  return (
    <div className="banner" style={{ backgroundImage: `url(${image})` }}>
      {text && <p>{text}</p>}
    </div>
  );
}

export default Banner;
