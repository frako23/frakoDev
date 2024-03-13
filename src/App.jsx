import Header from "./components/Head/Header";
// import Features from "./components/Features/Features";
import Home from "./components/Hero/Home";
import Portfolio from "./components/Portfolio/Portfolio";
import Resume from "./components/Resume/Resume";
// import Testimonial from "./components/Testimonial/Testimonial";
// import Blog from "./components/Blog/Blog"
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      {/* <Features /> */}
      <Resume />
      <Portfolio />
      {/* <Testimonial /> */}
      {/* <Blog /> */}
      <Contact />
      <Footer />
    </>
  );
};

export default App;
