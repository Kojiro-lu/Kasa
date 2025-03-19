import "./Navigation.scss";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className="Navigation-Container">
      <NavLink to="/">Accueil</NavLink>
      <NavLink to="/Apropos">À Propos</NavLink>
    </nav>
  );
}

export default Navigation;
