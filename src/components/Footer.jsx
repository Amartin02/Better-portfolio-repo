import { Link, useLocation } from "react-router-dom";
import photo1 from "../assets/images/GitHublogo.png";

function footerTabs() {
  return (
    <footer className="footer-Tabs">
      <p className="anchorItem">
        <img class="footerPhotos" src={photo1}></img>
      </p>
    </footer>
  );
}
export default footerTabs;
