import "./TitleAndLocation.scss";

function DisplayTitleAndLocation({ title, location }) {
  return (
    <>
      <h1 className="title-logement">{title}</h1>
      <p className="location-logement">{location}</p>
    </>
  );
}

export default DisplayTitleAndLocation;
