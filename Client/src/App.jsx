import "./App.css";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
// import About from "./Components/About";
import Service from "./Components/Service";
import Destination from "./Components/Destination";
import Book from "./Components/Book"; 
import Testimonials from "./Components/Testimonials";
import Newsletter from "./Components/Newsletter";
import Footer from "./Components/Footer";
function App() {
  return (
    <main className="md:w-full md:mx-auto h-[100vh]" >
      <header className=" bg-[url('./Images/Decore.png')]  bg-cover bg-center">
        <Nav />
        <Home />
      </header>

      {/* <About /> */}
      <Service />
      <Destination />
      <Book />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  );
}

export default App;
