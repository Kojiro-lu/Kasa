import "./Header.scss";
import logoheader from "../../assets/images/logokasa.png";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <NavLink to="/">
        <img src={logoheader} alt="Logo Kasa" className="header__logo" />
      </NavLink>

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
