import "./intro.scss";
import TypingText from "../typingtext/TypingText.jsx";
import Scroll from "./../scroll/Scroll.jsx";
export default function Intro() {

  return (
    <div className='intro' id="portfolio">
      <div className="left">
        <div className="imgcont"><img src="assets/Alina.jpg" alt="" /></div>
         </div>
            <div className="right">
             <div className="wrapper">
             <h2>Hey, there, I am </h2>
             <h1 ityped-cursor>Alina Sereda</h1>
             <h3>Web <TypingText text="Developer "/>and designer
             </h3>
             </div>           
            <a href="#works">
          <Scroll/>
        </a>
      </div>
    </div>
  )
}
