import "./Rating.scss";
import OrangeStar from "../../assets/images/starorange.png";
import GreyStar from "../../assets/images/stargrey.png";

function Rating({ rating }) {
  return (
    <div className="rating-container">
      {[...Array(5)].map((_, i) => (
        <img key={i} src={i < rating ? OrangeStar : GreyStar} alt="Star" />
      ))}
    </div>
  );
}

export default Rating;
