import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Banner from "./Components/Banner/Banner";
import About from "./Pages/About/About";
import Services from "./Pages/Services/Services";
import Testimonials from "./Pages/Testimonials/Testimonials";
import Contact from "./Pages/Contact/Contact";
import "./style.css";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <div id="home">
          <Banner />
        </div>
        <About />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;