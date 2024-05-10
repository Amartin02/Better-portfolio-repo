import weatherapp from "../assets/images/weatherapp.png";
import Taskboard from "../assets/images/Taskboard.png";
import blog from "../assets/images/blog2.png";
import jate from "../assets/images/JATEimage.png";
// use anchors with buttons inside. not wrapped around both buttons //
function Projects() {
  return (
    <section>
      <p className="portEntry">
        This is my Portfolio and this is where you can see projects i have
        worked one or made. Click the image to be taken to the project or, the
        link in the comment below for the actual repo.
      </p>

      <ul className="photoContainer">
        <li>
          <a className="project">
            <img src={weatherapp} alt="weatherApp" />
          </a>
          <div>
            <a href="https://github.com/Amartin02/my-blog-Mockup">
              <button>Github Repo</button>
            </a>
            <button></button>
          </div>
        </li>
        <li>
          <a className="project">
            <img src={Taskboard} alt="Taskboard" />
          </a>
          <p>Draggable Taskboard</p>
        </li>
        <li>
          <a className="project">
            <img
              src={blog}
              alt="Blog"
              href="https://github.com/Amartin02/my-blog-Mockup"
            />
          </a>
          <p>Blog using local storage</p>
        </li>
        <li>
          <a className="project">
            <img src={jate} alt="Text Editor PWA" />
          </a>
          <p>Text Editor PWA</p>
        </li>
      </ul>
    </section>
  );
}
export default Projects;
