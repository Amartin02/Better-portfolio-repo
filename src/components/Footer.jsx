import { Link, useLocation } from "react-router-dom";
import photo1 from "../assets/images/GitHublogo.png";

function footerTabs() {
  return (
    <footer className="footer-Tabs">
      <img class="footerPhotos" src={photo1}></img>
    </footer>
  );
}
export default footerTabs;
