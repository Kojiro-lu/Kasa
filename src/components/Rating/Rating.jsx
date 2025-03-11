import "./Rating.scss";
import OrangeStar from "../../assets/images/starorange.png";
import GreyStar from "../../assets/images/stargrey.png";

function Rating({ rating }) {
  const ratingNumber = parseInt(rating, 10);
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= ratingNumber) {
      stars.push(OrangeStar);
    } else {
      stars.push(GreyStar);
    }
  }
  return (
    <div className="rating-container">
      {stars.map((star) => (
        <img src={star} alt="Star" />
      ))}
    </div>
  );
}

export default Rating;
