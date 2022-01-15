import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "./components/Slider/Slider";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Track from "./components/Track/Track";
import Reviews from "./components/Reviews/Reviews";
import Contact from "./components/Contact/Contact";
function App() {
  return (
    <div>
      <Slider />
      <About />
      <Services />
      <Track />
      <Reviews />
      <Contact />
    </div>
  );
}

export default App;
