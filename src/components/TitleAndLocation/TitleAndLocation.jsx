import "./TitleAndLocation.scss";

function DisplayTitleAndLocation({ title, location }) {
  return (
    <div className="titleandlogement">
      <h1 className="titleandlogement__title">{title}</h1>
      <p className="titleandlogement__location">{location}</p>
    </div>
  );
}

export default DisplayTitleAndLocation;
