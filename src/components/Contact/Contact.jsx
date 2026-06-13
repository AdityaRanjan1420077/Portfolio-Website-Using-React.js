import React , {useEffect, useState}from "react";
import "./Contact.scss";
import { mobileNumber, email } from "../../constants/contactConstants";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp, FaLinkedin,  FaGithub, FaArrowUp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import gsap from "gsap"; import { ScrollToPlugin } from "gsap/ScrollToPlugin"; 
// import { FaArrowUp } from "react-icons/fa"; 
gsap.registerPlugin(ScrollToPlugin);
// /**
//  * @author Sisvanthkumar Sathivadivel
//  * @description Contact component for the portfolio website. This section includes a form for visitors to get in touch, as well as contact information and social media links.
//  * @returns Contact section with a form to get in touch, including contact information and social links.
//  * The form submits to Formspree for handling contact messages.
//  * 
//  */
export default function Contact() {
    const scrollToTop = () => { gsap.to(window, { duration: 1.5, scrollTo: { y: "#home", offsetY: 0, }, ease: "power3.inOut", }); };
    const [currentDateTime, setCurrentDateTime] = useState("");
    const [location, setLocation] = useState("Detecting location...");

    //Time Fetching
    useEffect(() => { 
        const updateClock = () => {
         const now = new Date();
         const formatted = now.toLocaleString("en-GB", { 
            day: "2-digit",
            month: "short",
            year: "numeric", 
            hour: "2-digit",
            minute: "2-digit", 
            second: "2-digit", 
            hour12: false, });
        setCurrentDateTime(formatted);
    };
    updateClock(); const interval = setInterval(updateClock, 1000); return () => clearInterval(interval); }, []);

    //Location Fetching
    useEffect(() => {
        if ("geolocation" in navigator) {
          navigator.geolocation.getCurrentPosition(
            async (position) => {
              const { latitude, longitude } = position.coords;
      
              try {
                const response = await fetch(
                  `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
                );
      
                const data = await response.json();
      
                setLocation(
                  `${data.address.city || data.address.town || data.address.village}, ${
                    data.address.state
                  }, ${data.address.country}`
                );
              } catch {
                setLocation("Location unavailable");
              }
            },
            () => {
              setLocation("Location permission denied");
            }
          );
        }
      }, []);
    const whatsappMessage = encodeURIComponent(
        "Hi Aditya! I visited your portfolio and would like to connect regarding a Software Engineer opportunity."
      );
  return (
    <section className="contact" id="contact">
      <div className="contact__bg" aria-hidden="true" />

      <div className="contact-header">
        <p className="contact-sub-heading">06. Contact</p>
        <h2>GET IN <span style={{ color: "#c46b1f" }}>TOUCH</span></h2>
        <p className="contact-description">
          I’m always open to discussing product ideas, creative strategies, or potential collaborations. Actively looking for summer internships.
        </p>
      </div>

      <div className="contact__container">

        <div className="contact__left">
          <h2 className="contact__title">
            Let’s build <br />
            something <br />
            <span className="contact__titleAccent">impactful.</span>
          </h2>

          <p className="contact__desc">
            Actively seeking summer internship opportunities. Feel free to reach out if you have a project in mind or just want to say hi! I’m always open to discussing product ideas, creative strategies, or potential collaborations.
          </p>

          <div className="contact__info">
            <a className="contact__email" href={`mailto:${email}`}>
                <FaEnvelope className="contact__icon" />
                Get in Touch
            </a>
            <div className="contact__phone">
            <FaPhoneAlt className="contact__icon" />{mobileNumber}</div>
          </div>
          <div className="contact__socials">
  <a
    href={`https://wa.me/918198074264?text=${whatsappMessage}`}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="WhatsApp"
    className="social whatsapp"
  >
    <FaWhatsapp />
  </a>

  <a
    href="https://instagram.com/adityaranjan2241572"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
    className="social instagram"
  >
    <FaInstagram />
  </a>

  <a
    href="https://www.linkedin.com/in/aditya-ranjan-a3b77724a/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    className="social linkedin"
  >
    <FaLinkedin />
  </a>

  <a
    href="https://github.com/YOUR-GITHUB-USERNAME"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
    className="social github"
  >
    <FaGithub />
  </a>
</div>
        </div>

        {/* RIGHT */}
        <div className="contact__card">
          <form
            className="contact__form"
            action="https://formspree.io/f/xlgkoroz"  // 👈 replace with your Formspree endpoint
            method="POST"
            onKeyDownCapture={(e) => {
              const isField =
                e.target instanceof HTMLInputElement ||
                e.target instanceof HTMLTextAreaElement ||
                e.target instanceof HTMLSelectElement ||
                e.target.isContentEditable;

              if (isField && e.key === " ") e.stopPropagation();
            }}
          >
            {/* optional extras */}
            <input type="hidden" name="_subject" value="Portfolio Contact" />
            <input type="text" name="_gotcha" style={{ display: "none" }} tabIndex="-1" autoComplete="off" />

            <label className="field">
              <span className="field__label">NAME</span>
              <input
                className="field__input"
                name="name"
                placeholder="Your name"
                required
                autoComplete="name"
              />
            </label>

            <label className="field">
              <span className="field__label">EMAIL</span>
              <input
                className="field__input"
                type="email"
                name="email"
                placeholder="you@example.com"
                required
                autoComplete="email"
              />
            </label>

            <label className="field">
              <span className="field__label">MESSAGE</span>
              <textarea
                className="field__textarea"
                name="message"
                placeholder="Reaching out about a job or internship? Share role details + timeline…"
                rows={5}
                required
              />
            </label>

            <button type="submit" className="contact__btn">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>

      {/* FOOTER */}
      <div className="contact__footer">
  <div className="footer-gradient" />

  <div className="contact__footerInner">
    <div className="footer-left">
      📍 {location}
    </div>

    <div className="footer-center">
      © {new Date().getFullYear()} Aditya Ranjan. All rights reserved.
    </div>

    <div className="footer-right">
      {currentDateTime}
    </div>
  </div>
</div>
<button className="scrollToTopBtn" onClick={scrollToTop} aria-label="Back to Top" > <FaArrowUp /> </button>
    </section>
  );
}