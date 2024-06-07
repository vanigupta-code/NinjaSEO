import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Section from "./components/Section/Section";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Section />
      <Footer />
    </div>
  );
}

export default App;
