/** @format */

import React, { useRef } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
export default function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gegoo8r",
        "template_g84gh1j",
        form.current,
        "0_ms2Ev4kOBjyPEU1qzxQ"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email Sent!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <section id="contactPage">
        <div id="contact">
          <h1 className="contactPageTitle">Contact Me</h1>
          <span className="contactDesc">
            Please fill the form below to discuss any work opportunities.
          </span>
          <form className="contactForm" ref={form}     onSubmit={sendEmail}>
            <input
              type="text"
              className="name"
              placeholder="Your Name"
              name="your_name"
            />
            <input
              type="email"
              className="email"
              placeholder="Your Email"
              name="your_email"
            />
            <textarea
              className="msg"
              name="message"
              rows="5"
              placeholder="Your Message"></textarea>
            <button
              type="submit"
              value="send"
              className="submitBtn"
          >
              Submit
            </button>
            <div className="links">
              <a  rel="noopener" target="_blank" href="https://www.linkedin.com/in/mukesh-kumar01/">
                <img
                  src="https://img.icons8.com/?size=48&id=xuvGCOXi8Wyg&format=png"
                  alt="Linkedin"
                  className="link"
                />
              </a>
              <a href="https://github.com/MukeshKumar0101" rel="noopener" target="_blank">
                <img
                  src="https://img.icons8.com/?size=50&id=12599&format=png"
                  alt="GitHub"
                  className="link"
                />
              </a>
              <a href="https://www.instagram.com/iammk01/" rel="noopener" target="_blank">
                <img
                  src="https://img.icons8.com/?size=48&id=Xy10Jcu1L2Su&format=png"
                  alt="Instagram"
                  className="link"
                />
              </a>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
