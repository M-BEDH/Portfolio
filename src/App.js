import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Accueil from "./pages/Accueil";
import Projet from "./pages/Projet";
import APropos from "./pages/APropos";
import Contact from "./pages/Contact";

function App() {
  return (

    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/projet" element={<Projet />} />
        <Route path="/a_propos" element={<APropos />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

