import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Apropos from "./pages/Apropos/Apropos";
import Footer from "./components/Footer/Footer";
import "./App.css";
import Erreur from "./pages/Erreur/Erreur";
import FicheLogement from "./pages/Logements/FicheLogement";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/FicheLogement/:id" element={<FicheLogement />} />
        <Route path="/Apropos" element={<Apropos />} />
        <Route path="*" element={<Erreur />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
