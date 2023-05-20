import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Galleries from "./pages/Galleries";
import Pagenotfound from "./pages/Pagenotfound";
import Service from "./pages/Services";
function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/galleries" element={<Galleries/>}></Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/Service" element={<Service/>}></Route>
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
    </div>
  );
}

export default App;
