import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, User, MessageSquare, Send, CheckCircle, ArrowLeft } from 'lucide-react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import '../Styles/Contact.css';

const Contact = () => {
  const navigate = useNavigate();

  const API_URL = process.env.REACT_APP_API_URL ||
    (window.location.hostname === "localhost"
      ? "http://localhost:5000"
      : "https://portfolio-backend-6idz.onrender.com");

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      setStatus('Something went wrong. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-wrapper">
      <div className="glow-orb orb-contact"></div>
      
      <div className="contact-container">
        <motion.button 
          whileHover={{ x: -5 }}
          className="back-btn-modern" 
          onClick={() => navigate('/')}
        >
          <ArrowLeft size={18} /> Back to Home
        </motion.button>

        <div className="contact-grid">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="contact-info-panel"
          >
            <h1>Let's Start a <span className="highlight">Project</span></h1>
            <p>I'm currently available for freelance work and full-time positions. Let's build something amazing together.</p>
            
            <div className="contact-methods">
              <div className="method-card glass-card">
                <div className="method-icon"><Mail size={24} /></div>
                <div>
                  <h4>Email Me</h4>
                  <p>prakashmishra262005@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="social-links-row">
              <a href="#" className="social-icon-btn"><FaLinkedin size={20} /></a>
              <a href="#" className="social-icon-btn"><FaGithub size={20} /></a>
              <a href="#" className="social-icon-btn"><FaTwitter size={20} /></a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="contact-form-panel glass-card"
          >
            <AnimatePresence mode='wait'>
              {isSubmitted ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="success-message-panel"
                >
                  <CheckCircle size={64} className="success-icon" />
                  <h2>Message Sent!</h2>
                  <p>Thank you for reaching out. I'll get back to you within 24 hours.</p>
                  <button className="btn-primary" onClick={() => setIsSubmitted(false)}>
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit} 
                  className="modern-form"
                >
                  <div className="input-group-modern">
                    <User className="input-icon" size={18} />
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="input-group-modern">
                    <Mail className="input-icon" size={18} />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="input-group-modern">
                    <MessageSquare className="input-icon textarea-icon" size={18} />
                    <textarea
                      name="message"
                      placeholder="Your Message (include your phone number if you'd like a call back)"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-primary full-width" disabled={loading}>
                    {loading ? "Sending..." : "Send Message"} <Send size={18} />
                  </button>
                  
                  {status && <p className="error-status">{status}</p>}
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
