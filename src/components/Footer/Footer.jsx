import "./Footer.css";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
          <div className="rrss-container">
            <a href="https://www.facebook.com/profile.php?id=61550659575214&locale=es_ES">
              <img
                className="rrss"
                src="./assets/face-rosa.png"
                alt="facebook"
              />
            </a>
            <a href="https://www.instagram.com/donbigoteasoc/">
              <img
                className="rrss"
                src="./assets/insta-rosa.png"
                alt="instagram"
              />
            </a>
            <a href="mailto: asociaciondonbigote@gmail.com">
              <img className="rrss" src="./assets/correo-rosa.png" alt="correo" />
            </a>
          </div>
          <p>
            © Created by{" "}
            <a href="mailto: p.a.castrorodriguez@gmail.com">PaulaCR</a> with
            love for <span>Don Bigote</span>
          </p>
        </footer>
    </>
  );
};

export default Footer;
