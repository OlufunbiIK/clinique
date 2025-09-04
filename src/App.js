import logo from "./logo.svg";
import "./App.css";
import CliniqueLanding from "./components/HeroSection";
import CosmeticsLandingSection from "./components/AboutProduct";
import Services from "./components/Services";
import Footer from "./components/Footer";
import NewsLetter from "./components/NewsLetter";
import Mission from "./components/Mission";

function App() {
  return (
    <div className="App space-y-4">
      <CliniqueLanding />
      <CosmeticsLandingSection />
      <Services />
      <Mission />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
