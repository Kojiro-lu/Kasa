import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./componentes/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./componentes/Footer/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
