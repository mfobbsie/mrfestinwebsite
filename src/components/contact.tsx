import { useEffect, useState } from "react";
import "./contact.css";
import bg from "../assets/contact-bg.jpg";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(data).toString(),
    })
      .then(() => setSubmitted(true))
      .catch((error) => alert(error));
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    });

    document.querySelectorAll(".fade-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  if (submitted) {
    return (
      <div className="contact-success fade-on-scroll">
        <h1>Thank you!</h1>
        <p>Your message has been sent successfully.</p>
      </div>
    );
  }

  return (
    <section className="contact-page">
      <div className="contact-bg">
        <img src={bg} alt="background" />
      </div>

      <div className="contact-wrapper fade-on-scroll">
        <h1 className="contact-title">Get in Touch</h1>

        <form
          className="contact-form"
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="bot-field" />

          <label>Name</label>
          <input type="text" name="name" placeholder="Your name" required />

          <label>Email</label>
          <input type="email" name="email" placeholder="Your email" required />

          <label>Message</label>
          <textarea
            name="message"
            placeholder="Write your message here"
            required
          />

          <label className="newsletter">
            <input type="checkbox" name="newsletter" />
            <span>Sign me up for the newsletter</span>
          </label>

          <button type="submit" className="tag submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
