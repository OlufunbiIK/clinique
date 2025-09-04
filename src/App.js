import logo from "./logo.svg";
import "./App.css";
import CliniqueLanding from "./components/HeroSection";
import CosmeticsLandingSection from "./components/AboutProduct";
import Services from "./components/Services";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App space-y-4">
      <CliniqueLanding />
      <CosmeticsLandingSection />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
