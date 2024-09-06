import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedinIn, FaFacebookF, FaGithub } from "react-icons/fa";
const SubContact = () => {
  return (
    <>
      <section id="contact_Mini">
        <div className="super_container">
          <div className="container_1">
            <h3>Let's connect</h3>
            <div>
              <p>Phone</p>
              <span>+92 316 9344927</span>
            </div>
            <div>
              <p>Email</p>
              <span>aamirab1017@gmail.com</span>
            </div>
            <div>
              <p>Address</p>
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

          <div className="container_2">
            <h3>We'd love to hear from you</h3>
            <form>
              <div>
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Email" />
              </div>
              <textarea rows="4" placeholder="Your Message..." />
              <button type="submit">SEND</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default SubContact;
