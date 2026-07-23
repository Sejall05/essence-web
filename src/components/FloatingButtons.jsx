import { Link } from "react-router-dom";
import "../assets/css/floatingbuttons.css";

import whatsappIcon from "../assets/img/whatsapp.svg";
import callIcon from "../assets/img/call.svg";

function FloatingButtons() {
  return (
    <div className="floating-buttons">
      <a
        href="https://api.whatsapp.com/send?phone=919891605101"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn"
      >
        <img src={whatsappIcon} alt="WhatsApp" />
      </a>

      <a href="tel:+919891605101" className="floating-btn">
        <img src={callIcon} alt="Call" />
      </a>
    </div>
  );
}

export default FloatingButtons;
