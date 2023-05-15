import { useState } from "react";
import "./contact.scss";
import Piramide from "../top/Piramide.jsx";



export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">   
      <div className="left">
      <Piramide/>
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>I'll get back to you right away :)</span>}
        </form>
      </div>
      <section>
      <div className="contact" id="contact"></div>
      <div class='air air1'></div>
      <div class='air air2'></div>
      <div class='air air3'></div>
      <div class='air air4'></div>
      </section>
    </div>
  );
}