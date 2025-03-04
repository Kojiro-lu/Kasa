import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./componentes/Header/Header";
import Footer from "./componentes/Footer/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes></Routes>
      <Footer />
    </Router>
  );
}

export default App;
