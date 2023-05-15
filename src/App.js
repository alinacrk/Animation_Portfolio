import Top from "./components/top/Top";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import "./app.scss";
import { useState } from "react";

function App() {
  const[menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Top menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
      <Portfolio/>
      <Intro/>
      <Works/>    
      <Contact/>  
      </div>
    </div>
  );
}

export default App;
