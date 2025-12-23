import React from "react";
import "./Footer.css";

export default function Footer(props) {
  return (
    <div className="footer-div">
      <p className="footer-text">© {new Date().getFullYear()} Rudra Prasadh</p>
    </div>
  );
}
