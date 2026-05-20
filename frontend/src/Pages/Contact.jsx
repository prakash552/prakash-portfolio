import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, User, MessageSquare, Send, CheckCircle, ArrowLeft, Phone, MapPin, Clock, ExternalLink } from 'lucide-react';
import { FaLinkedin, FaGithub, FaTwitter, FaWhatsapp } from 'react-icons/fa';
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
      setStatus('Something went wrong. Please check your network connection.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-wrapper">
      <div className="glow-orb orb-contact-1"></div>
      <div className="glow-orb orb-contact-2"></div>
      
      <div className="contact-container">
        <motion.button 
          whileHover={{ x: -6 }}
          className="back-btn-modern" 
          onClick={() => navigate('/')}
        >
          <ArrowLeft size={18} /> Back to Home
        </motion.button>

        <div className="contact-grid">
          {/* Contact Info Panel */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="contact-info-panel"
          >
            <div className="section-badge contact-badge">
              <Mail size={14} className="sparkle-icon" />
              <span>Get In Touch</span>
            </div>
            <h1>Let's Start a <span className="highlight">Project</span></h1>
            <p>I'm currently available for full-time engineering positions, freelance projects, and collaboration. Drop me a line and let's craft something remarkable.</p>
            
            <div className="contact-methods">
              <a href="mailto:prakashmishra262005@gmail.com" className="method-card glass-card">
                <div className="method-icon"><Mail size={20} /></div>
                <div>
                  <h4>Email Me</h4>
                  <p>prakashmishra262005@gmail.com</p>
                </div>
                <ExternalLink size={14} className="method-arrow" />
              </a>

              <a href="https://wa.me/918743821921" target="_blank" rel="noreferrer" className="method-card glass-card">
                <div className="method-icon"><FaWhatsapp size={20} /></div>
                <div>
                  <h4>WhatsApp Chat</h4>
                  <p>+91 8743821921</p>
                </div>
                <ExternalLink size={14} className="method-arrow" />
              </a>

              <div className="method-card glass-card">
                <div className="method-icon"><MapPin size={20} /></div>
                <div>
                  <h4>Location</h4>
                  <p>Noida, Uttar Pradesh, India</p>
                </div>
              </div>

              <div className="method-card glass-card">
                <div className="method-icon"><Clock size={20} /></div>
                <div>
                  <h4>Response Time</h4>
                  <p>Usually within 24 Hours</p>
                </div>
              </div>
            </div>

            <div className="social-links-row">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon-btn" title="LinkedIn"><FaLinkedin size={20} /></a>
              <a href="https://github.com/prakash552" target="_blank" rel="noreferrer" className="social-icon-btn" title="GitHub"><FaGithub size={20} /></a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-icon-btn" title="Twitter"><FaTwitter size={20} /></a>
            </div>
          </motion.div>

          {/* Contact Form Panel */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="contact-form-panel glass-card"
          >
            <AnimatePresence mode='wait'>
              {isSubmitted ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="success-message-panel"
                >
                  <CheckCircle size={60} className="success-icon" />
                  <h2>Message Sent Successfully!</h2>
                  <p>Thank you for reaching out, Prakash has received your query. I'll get back to you shortly.</p>
                  <button className="btn-primary" onClick={() => setIsSubmitted(false)}>
                    Send Another Message
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
                  <h3 className="form-title">Send a Message</h3>
                  <p className="form-subtitle">Fill out the fields below and I'll get right back to you.</p>

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
                      placeholder="Your Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="input-group-modern">
                    <MessageSquare className="input-icon textarea-icon" size={18} />
                    <textarea
                      name="message"
                      placeholder="Your Message..."
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-primary full-width" disabled={loading}>
                    {loading ? (
                      <>Processing...</>
                    ) : (
                      <>
                        Send Message <Send size={16} />
                      </>
                    )}
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
