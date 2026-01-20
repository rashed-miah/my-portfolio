import React, { useState, useEffect, useRef } from "react";
import "../css/ContactForm.css";
import profileImage from "../images/emon.png"; // Replace with your local image or URL
import ContactAnimaiton from "./animations/ContactAnimation";
// Add EmailJS import
import emailjs from "@emailjs/browser";

function ProgressBar({ progress }) {
  return (
    <div className="progress-bar">
      <div
        className="progress-bar-fill"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}

const ContactForm = () => {
  const [progress, setProgress] = useState(0);
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(null);
  const form = useRef();

  useEffect(() => {
    setTimeout(() => {
      setProgress(98);
    }, 100);
  }, []);

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => setSuccess(null), 2000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  // Use environment variables for EmailJS config
  const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const USER_ID = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
  const THANK_YOU_TEMPLATE_ID =
    process.env.REACT_APP_EMAILJS_THANK_YOU_TEMPLATE_ID;

  const sendThankYouEmail = (userEmail, userName, message) => {
    emailjs.send(
      SERVICE_ID,
      THANK_YOU_TEMPLATE_ID,
      { email: userEmail, name: userName, message },
      USER_ID,
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setSuccess(null);

    const formData = new FormData(form.current);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    const title = "Contact Form Submission";

    // 1. Send to your email
    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name,
          email,
          message,
          title,
        },
        USER_ID,
      )
      .then(() => {
        // 2. Send thank you to user
        return emailjs.send(
          SERVICE_ID,
          THANK_YOU_TEMPLATE_ID,
          {
            name,
            email, // user's email
          },
          USER_ID,
        );
      })
      .then(() => {
        setSending(false);
        setSuccess("Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        console.log(error);
        setSending(false);
        setSuccess("Failed to send message. Please try again.");
      });
  };

  return (
    <>
      <div className="container" id="contact">
        <h3 className="contactHeading">Contact Me</h3>
        <div className="progressBox mb-5">
          <ProgressBar progress={progress} />
        </div>
      </div>
      <div className="contact-container">
        <div className="contact-image">
          {/* <img src={profileImage} alt="contact profile" /> */}
          <ContactAnimaiton />
        </div>
        <form className="contact-form" ref={form} onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name*" required />
          <input
            type="email"
            name="email"
            placeholder="Email Address*"
            required
          />
          <textarea name="message" placeholder="Message*" rows="5" required />
          <button type="submit" disabled={sending}>
            {sending ? "Sending..." : "Send"}
          </button>
        </form>
        {/* Move success message here, at the bottom of the parent div */}
        {success && (
          <div
            className="contact-success"
            style={{
              position: "absolute",
              bottom: 10,
              left: 0,
              right: 0,
              textAlign: "center",
            }}
          >
            {success}
          </div>
        )}
      </div>
    </>
  );
};

export default ContactForm;
