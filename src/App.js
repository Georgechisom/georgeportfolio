import Intro from "./components/Intro/Intro";
import Navbar from "./components/NavBar/Navbar";
import Skills from "./components/Skills/Skills";
import Works from "./components/Works/Works";
import Contact from "./components/Contact/Contact";
import "./index.css";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <div className="main-content">
        <Navbar />
        <Intro />
        <Skills />
        <Works />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
