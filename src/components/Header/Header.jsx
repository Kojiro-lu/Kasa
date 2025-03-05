import "./Header.scss";
import logoheader from "../../assets/images/logokasa.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img src={logoheader} alt="Logo Kasa" className="header__logo" />
      </Link>

      <nav className="header__navbarre">
        <ul className="header__navbarre__ul">
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/">A Propos</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
