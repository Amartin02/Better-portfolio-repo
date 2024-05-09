import photo from "../assets/images/photo.jpg";

function Aboutme() {
  return (
    <div className="aboutMe-container">
      <p>
        My name is Anthony Martin. Here you can see my upcoming projects and my
        contact information in case you'd like to work with me.
      </p>

      <img class="myPhoto" src={photo}></img>
    </div>
  );
}
export default Aboutme;
