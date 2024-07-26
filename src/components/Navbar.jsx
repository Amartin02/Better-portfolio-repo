import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  const currentPage = useLocation().pathname;
  // const currentPage = "";
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
// {
//   <ul className="nav nav-tabs">
//   <li className="nav-item">
//     <Link
//       to="/"
//       className={currentPage === "/" ? "nav-link active" : "nav-link"}
//     >
//       Aboutme
//     </Link>
//   </li>
//   <li className="nav-item">
//     <Link
//       to="/Projects"
//       className={
//         currentPage === "/Projects" ? "nav-link active" : "nav-link"
//       }
//     >
//       Projects
//     </Link>
//   </li>
//   <li className="nav-item">
//     <Link
//       to="/Resume"
//       className={currentPage === "/Resume" ? "nav-link active" : "nav-link"}
//     >
//       Resume
//     </Link>
//   </li>
// </ul>
// }
export default NavTabs;
