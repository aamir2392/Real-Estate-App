import React from "react";
import { FaLinkedinIn, FaFacebookF, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <>
      <section id="contact">
        <h1>CONTACT Us</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error.</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi aliquid
          similique voluptas!
        </p>
        <div className="container">
          <img src="/about.jpg" alt="about" />
          <div className="content">
            <h3>Let's connect</h3>
            <div>
              <p>Phone : </p>
              <span>+92 316 9344927</span>
            </div>
            <div>
              <p>Email : </p>
              <span>aamirab1017@gmail.com</span>
            </div>
            <div>
              <p>Address : </p>
              <span>Attock, Pakistan</span>
            </div>
            <ul>
              <Link
                to={"https://www.facebook.com/profile.php?id=100013095541457"}
                target="_blank"
              >
                <FaFacebookF />
              </Link>
              <Link
                to={
                  "https://www.linkedin.com/in/muhammad-aamir-bin-habib-30695a313/"
                }
                target="_blank"
              >
                <FaLinkedinIn />
              </Link>
              <Link to={"https://github.com/aamir2392"} target="_blank">
                <FaGithub />
              </Link>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
