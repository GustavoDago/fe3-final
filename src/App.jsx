import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

import Contacto from "./Routes/Contact";
import Detalle from "./Routes/Detail";
import Destacados from "./Routes/Favs";
import Home from "./Routes/Home";
import { ContextGlobal } from "./Components/utils/global.context";

function App() {
  return (
    <div className="App">

      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contacto />} />
        <Route path="/dentist/:id" element={<Detalle />} />
        <Route path="/favs" element={<Destacados />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
