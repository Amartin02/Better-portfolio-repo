import weatherapp from "../assets/images/weatherapp.png";
import Taskboard from "../assets/images/Taskboard.png";
import blog from "../assets/images/blog2.png";
import jate from "../assets/images/JATEimage.png";

function Portfolio() {
  return (
    <section>
      <p className="portEntry">
        This is my Portfolio and this is where you can see projects i have
        worked one or made.
      </p>

      <ul className="photoContainer">
        <li>
          {" "}
          <a className="portPhoto">
            {" "}
            <img src={weatherapp} alt="weatherApp" />{" "}
          </a>{" "}
          <p>Trackable weather using API</p>{" "}
        </li>
        <li>
          {" "}
          <a className="portPhoto">
            {" "}
            <img src={Taskboard} alt="Taskboard" />{" "}
          </a>{" "}
          <p>Draggable Taskboard</p>{" "}
        </li>
        <li>
          {" "}
          <a className="portPhoto">
            {" "}
            <img src={blog} alt="Blog" />{" "}
          </a>{" "}
          <p>Blog using local storage</p>{" "}
        </li>
        <li>
          {" "}
          <a className="portPhoto">
            {" "}
            <img src={jate} alt="Text Editor PWA" />{" "}
          </a>{" "}
          <p>Text Editor PWA</p>{" "}
        </li>
      </ul>
    </section>
  );
}
export default Portfolio;
