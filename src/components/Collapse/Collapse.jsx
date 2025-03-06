import "./Collapse.scss";
import { useState } from "react";
import Arrow from "../../assets/images/arrow.png";

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse-container">
      <div className="collapse-header" onClick={() => setIsOpen(!isOpen)}>
        <h2 className="collapse-title">{title}</h2>
        <img
          src={Arrow}
          alt="Flèche"
          className={`arrow ${isOpen ? "open" : "close"}`}
        />
      </div>
      {isOpen && <div className="content">{content}</div>}
    </div>
  );
}

export default Collapse;
