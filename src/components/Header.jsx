import "./Header.css";

function Header() {
  return (
    <header>
      <img src="assets/Images/OCTAVIUS P (103).JPG" />
      <h1>Hello and Welcome to my Portfolio</h1>
      <nav>
        <a href="Contact" className="Contact">
          Contact
        </a>
        <a href="#">About me</a>
        <a href="#">Resume</a>
        <a href="#portfolio">Portfolio</a>
      </nav>
    </header>
  );
}
export default Header;
