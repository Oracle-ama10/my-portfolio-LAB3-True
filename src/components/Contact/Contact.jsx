// src/components/Contact/Contact.jsx
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000)); 
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (err) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">Get In Touch with me</h2>
        <p className="section-subtitle">
          I'm always interested in hearing about new projects and opportunities that come out of nowwhere.
        </p>

        <div className="contact-content">
          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? 'error' : ''}
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'error' : ''}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className={errors.message ? 'error' : ''}
                />
                {errors.message && <span className="error-message">{errors.message}</span>}
              </div>

              <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : <><Send size={18} /> Send Message</>}
              </button>

              {submitStatus === 'success' && <div className="success-message">Message sent successfully!</div>}
              {submitStatus === 'error' && <div className="error-message">Something went wrong. Please try again.</div>}
            </form>
          </div>

          {/* Contact Info */}
          <div className="contact-info">
            <div className="contact-item">
              <Mail size={24} />
              <div>
                <h4>Email</h4>
                <p>
                  <a
                    href="https://mail.google.com/mail/u/0/?fs=1&to=phurinutzaza87@gmail.com&tf=cm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Phurinutzaza87@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div className="contact-item">
              <Phone size={24} />
              <div>
                <h4>Phone</h4>
                <p>+66 78 989 9999</p>
              </div>
            </div>

            <div className="contact-item">
              <MapPin size={24} />
              <div>
                <h4>Location</h4>
                <p>Chiang Mai, Thailand</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="social-links">
              <a href="https://github.com/Oracle-ama10" target="_blank" rel="noopener noreferrer"><Github size={24} /></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><Linkedin size={24} /></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><Twitter size={24} /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;