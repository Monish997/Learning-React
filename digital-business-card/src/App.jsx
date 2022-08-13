import Info from "./components/Info";
import About from "./components/About";
import "./App.css";
import Interests from "./components/Interests";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="card">
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}

export default App;
