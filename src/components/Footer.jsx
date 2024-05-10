// import { Link, useLocation } from "react-router-dom";
import photo1 from "../assets/images/GitHublogo.png";
import photo2 from "../assets/images/linkedInLogo.png";
import photo3 from "../assets/images/stackLogo.png";

function FooterTabs() {
  return (
    <footer className="footer-Tabs">
      <p>Click on logo's below to visit!</p>
      <a href="https://github.com/Amartin02">
        <img className="footerPhotos" src={photo1}></img>
      </a>
      <a href="https://www.linkedin.com/in/anthony-martin-2803582b8/">
        <img className="footerPhotos" src={photo2}></img>
      </a>
      <a href="https://stackoverflow.com/users/24980999/anthony-m">
        <img className="footerPhotos" src={photo3}></img>
      </a>
    </footer>
  );
}
export default FooterTabs;
