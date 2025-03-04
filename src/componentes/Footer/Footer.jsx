import "./Footer.scss";
import logofooter from "../../assets/images/logofooter.png";

function Footer() {
  return (
    <div className="footer">
      <img src={logofooter} alt="Logo Kasa Footer" className="footer__logo" />
      <p>© 2025 Kasa. All rights reserved</p>
    </div>
  );
}

export default Footer;
