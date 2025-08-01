import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Contact.css';

const Contact = () => {
  const navigate = useNavigate();

  // ✅ Safe fallback if env var is missing
  const API_URL = process.env.REACT_APP_API_URL ||
    (window.location.hostname === "localhost"
      ? "http://localhost:5000"
      : "https://portfolio-backend-6idz.onrender.com");

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      console.log("📡 Sending request to:", `${API_URL}/api/contact`);

      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (data.success) {
        setIsSubmitted(true);
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error("❌ Error:", error);
      setStatus('Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page">
      <button className="back-btn" onClick={() => navigate('/')}>
        ⬅ Back
      </button>

      {isSubmitted ? (
        <div className="thank-you-screen">
          <div className="success-icon">✔️</div>
          <h1>Thank You!</h1>
          <p>Your message has been successfully sent. I will get back to you soon.</p>
          <button className="submit-btn" onClick={() => setIsSubmitted(false)}>
            Send Another Message
          </button>
        </div>
      ) : (
        <>
          <h1 className="contact-heading">Contact Me</h1>
          <p className="contact-description">
            Feel free to reach out to me for any collaboration, project inquiries, or just to say hello!
          </p>
          <div className="form">
            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="input-field"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="input-field"
              />
              <textarea
                placeholder="please put your mobile number in last text to easily connect"
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="input-field"
              ></textarea>
              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? (
                  <span className="block-loader">
                    <span className="block"></span>
                    <span className="block"></span>
                    <span className="block"></span>
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>
          {status && <p className="status-message">{status}</p>}
        </>
      )}
    </div>
  );
};

export default Contact;
