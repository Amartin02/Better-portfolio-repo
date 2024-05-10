import photo from "../assets/images/photo.jpg";

function Aboutme() {
  return (
    <div className="aboutMe-container">
      <p>
        My name is Anthony Martin. Here you can see my upcoming projects and my
        contact information in case you'd like to work with me. In the past i
        worked in HVAC for years but got injured, now i've been decided in a
        career switch. I enjoy the backend and have learned alot during a three
        month coding bootcamp learning to use all kinds of things i never
        thought i'd learn. To see the projects you can head to portfolio and you
        can see them all.
      </p>

      <img class="myPhoto" src={photo}></img>
    </div>
  );
}
export default Aboutme;
