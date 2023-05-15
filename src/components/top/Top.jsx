import "./top.scss";
import EmailIcon from "@mui/icons-material/Email";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";

export default function Top({ menuOpen, setMenuOpen }) {
  return (
    <div className={"top " + (menuOpen && "active")}>     
      <div className="wrapper">
        <div className="left">
        
          <a href="#intro" className="logo">  Web developer</a>
          <div className="itemContainer">
            <EmojiPeopleIcon className="icon"/>
            <span><a href="tel:+4369010000000">Call me</a></span>
          </div>
          <div className="itemContainer">
            <EmailIcon className="icon"/>
            <span><a href="mailto:portfolio@gmail.com?subject=Example%20Subject&body=Example%20Body">Write me an email !</a>
           </span>
            
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>

      </div>
    </div>
  )
}


