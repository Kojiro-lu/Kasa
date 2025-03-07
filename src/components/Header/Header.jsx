import "./Header.scss";
import logoheader from "../../assets/images/logokasa.png";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img src={logoheader} alt="Logo Kasa" className="header__logo" />
      </Link>

      <Navigation />
    </div>
  );
}

export default Header;
