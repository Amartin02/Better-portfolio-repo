// Bringing in the required import from 'react-router-dom'
import { Outlet } from "react-router-dom";
import NavTabs from "./components/Navbar";
import FooterTabs from "./components/Footer";
import ModalForm from "./components/ModalForm";

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <NavTabs />
      <main className="mx-3">
        <Outlet />
        <ModalForm />
      </main>
      <FooterTabs />
    </>
  );
}

export default App;
