import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  const currentPage = useLocation().pathname;
  // const currentPage = "";
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/"
          className={currentPage === "/" ? "nav-link active" : "nav-link"}
        >
          Aboutme
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Projects"
          className={
            currentPage === "/Projects" ? "nav-link active" : "nav-link"
          }
        >
          Projects
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Resume"
          className={currentPage === "/Resume" ? "nav-link active" : "nav-link"}
        >
          Resume
        </Link>
      </li>
    </ul>
  );
}
export default NavTabs;
