import "./menu.scss";
import Piramide from "../top/Piramide.jsx";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu "+(menuOpen && "active")}>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#portfolio">Intro</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#works">Portfolio</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#contact">Contact</a>
          <Piramide/>
        </li>
      </ul>
    </div>
     
  );
}