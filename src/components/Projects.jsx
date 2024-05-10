import recipeApp from "../assets/images/recipeApp.png";
import Taskboard from "../assets/images/Taskboard.png";
import blog from "../assets/images/blog2.png";
import jate from "../assets/images/JATEimage.png";
import spinMe from "../assets/images/spinMe.png";
import svgLogo from "../assets/images/svgLogo.png";
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
            <img src={recipeApp} alt="recipeApp" />
          </a>
          <div>
            <a href="https://github.com/oh-shift/recipe-sifting-repo">
              <button className="proButton">Github Repo</button>
            </a>
            <a href="https://oh-shift.github.io/recipe-sifting-repo/">
              <button className="proButton">Deployed Site</button>
            </a>
          </div>
        </li>

        <li>
          <a className="project">
            <img src={Taskboard} alt="Taskboard" />
          </a>
          <div>
            <a href="https://github.com/Amartin02/Task-board-repo">
              <button className="proButton">Github Repo</button>
            </a>
            <a href="https://amartin02.github.io/Task-board-repo/">
              <button className="proButton">Deployed Site</button>
            </a>
          </div>
        </li>

        <li>
          <a className="project">
            <img src={spinMe} alt="recordApp" />
          </a>
          <div>
            <a href="https://github.com/Init-To-Win/spin-me-round">
              <button className="proButton">Github Repo</button>
            </a>
            <a href="https://spin-me-round.onrender.com">
              <button className="proButton">Deployed Site</button>
            </a>
          </div>
        </li>

        <li>
          <a className="project">
            <img src={svgLogo} alt="" />
          </a>
          <div>
            <a href="https://github.com/Amartin02/SVG-Logo-Maker">
              <button className="proButton">Github Repo</button>
            </a>
            <a href="https://youtu.be/qVo6KzkOvhY">
              <button className="proButton">Youtube Demo</button>
            </a>
          </div>
        </li>

        <li>
          <a className="project">
            <img src={blog} alt="blog" />
          </a>
          <div>
            <a href="https://github.com/Amartin02/my-blog-Mockup">
              <button className="proButton">Github Repo</button>
            </a>
            <a href="https://amartin02.github.io/my-blog-Mockup/">
              <button className="proButton">Deployed Site</button>
            </a>
          </div>
        </li>

        <li>
          <a className="project">
            <img src={jate} alt="Text Editor PWA" />
          </a>
          <div>
            <a href="https://github.com/Amartin02/PWA-text-editor">
              <button className="proButton">Github Repo</button>
            </a>
            <a href="https://pwa-text-editor-pgek.onrender.com/">
              <button className="proButton">Deployed Site</button>
            </a>
          </div>
        </li>
      </ul>
    </section>
  );
}
export default Projects;
