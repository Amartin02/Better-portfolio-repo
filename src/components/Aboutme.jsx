import photo from "../assets/images/photo.jpg";

function Aboutme() {
  return (
    <div className="aboutMe-container">
      <p>
        My name is Anthony Martin. Here you can see my upcoming projects and my
        contact information in case you'd like to work with me. In the past I
        worked in HVAC for years but now I've decided in a career change. In
        HVAC I quickly moved from an apprentice to lead installer where I
        managed a crew of installers. I enjoy the backend and have learned alot
        during a three month coding bootcamp. Please see resume for further
        details. I plan to continue my education in this field and look forward
        to on the job training as well. To see the projects you can head to
        Projects tab and you can see them all.
      </p>

      <img class="myPhoto" src={photo}></img>
    </div>
  );
}
export default Aboutme;
