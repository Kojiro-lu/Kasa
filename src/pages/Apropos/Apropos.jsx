import "./apropos.scss";
import Banner from "../../components/Banner/Banner";
import bannerapropos from "../../assets/images/bannerapropos.png";
import Collapse from "../../components/Collapse/Collapse";
import AproposContent from "../../data/Apropos-Content.json";

function Apropos() {
  return (
    <div className="apropos-container">
      <Banner text="" image={bannerapropos} />
      <ul className="apropos-content">
        {AproposContent.map((content) => (
          <li key={content.id}>
            <Collapse title={content.title} content={content.description} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Apropos;
