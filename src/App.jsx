import "./App.css";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import About from "./Components/About";
function App() {
  return (
    <main className="md:w-full md:mx-auto h-[100vh]" >
      <header className=" bg-[url('./Images/Decore.png')]  bg-cover bg-center">
        <Nav />
        <Home />
      </header>

      <About />
    </main>
  );
}

export default App;
