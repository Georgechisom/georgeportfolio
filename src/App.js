import Intro from "./components/Intro/Intro";
import Navbar from "./components/NavBar/Navbar";
import Skills from "./components/Skills/Skills";
import './index.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
    </div>
  );
}

export default App;
