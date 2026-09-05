import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Terminal, CheckCircle, AlertTriangle, RefreshCw } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formState, setFormState] = useState('idle'); // idle, transmitting, success, error
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'web',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleRetry = () => {
    setFormState('idle');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState('transmitting');
    
    // 1. Check for missing configuration safely
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      console.warn("Web3Forms configuration is missing. Transmission aborted.");
      setTimeout(() => {
        setFormState('error');
      }, 1000); // Small delay to show transmitting state before failing
      return;
    }

    // 2. Prepare Web3Forms Payload
    const payload = {
      access_key: accessKey,
      subject: `🚀 New BlazeByte Project Enquiry`,
      from_name: formData.name,
      email: formData.email,
      phone: formData.phone || 'Not provided',
      service: formData.projectType,
      message: formData.message,
      submitted_at: new Date().toLocaleString()
    };

    // 3. Transmit via Web3Forms API
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });
      
      const result = await response.json();
      if (result.success) {
        setFormState('success');
      } else {
        throw new Error('Web3Forms returned unsuccessful status');
      }
    } catch (error) {
      console.error("Transmission failed:", error);
      setFormState('error');
    }
  };

  return (
    <section className="contact-section section-padding" id="contact">
      <div className="container contact-container">
        <motion.div 
          className="contact-header"
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="subheading">05 // INITIATE</h2>
          <h3 className="section-title">TRANSMIT A <span className="text-gradient">MESSAGE.</span></h3>
          <p className="contact-desc">
            Ready to defy gravity? Open a secure channel to our command center and let's discuss your next mission.
          </p>
        </motion.div>

        <motion.div 
          className="contact-form-wrapper glass-panel"
          initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className="form-header">
            <div className="terminal-icon">
              <Terminal size={18} />
            </div>
            <span className="form-title">SECURE_COMM_LINK_V4</span>
            <div className="form-status-lights">
              <span className={`light ${formState === 'transmitting' ? 'active pulse' : ''}`}></span>
              <span className={`light ${formState === 'success' ? 'active-green' : ''}`}></span>
              <span className={`light ${formState === 'error' ? 'active-red' : ''}`}></span>
            </div>
          </div>

          {formState === 'success' ? (
            <div className="transmission-ready-state">
              <CheckCircle size={48} className="ready-icon text-gradient" />
              <h3>TRANSMISSION RECEIVED ✓</h3>
              <p>Your message has been successfully transmitted to BlazeByte Studio. We'll get back to you soon.</p>
            </div>
          ) : formState === 'error' ? (
            <div className="transmission-ready-state error-state">
              <AlertTriangle size={48} className="ready-icon error-icon" color="#ff4b1f" />
              <h3>TRANSMISSION FAILED</h3>
              <p>We couldn't send your message right now. Please try again or contact us through our verified communication channels.</p>
              
              <div className="verified-channels">
                <button onClick={handleRetry} className="btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <RefreshCw size={16} /> RETRY TRANSMISSION
                </button>
              </div>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label" htmlFor="name">NAME / ID</label>
                  <input type="text" id="name" value={formData.name} onChange={handleChange} className="form-input" required placeholder="Enter your designation" disabled={formState === 'transmitting'} />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="email">CONTACT FREQUENCY (EMAIL)</label>
                  <input type="email" id="email" value={formData.email} onChange={handleChange} className="form-input" required placeholder="Enter transmission address" disabled={formState === 'transmitting'} />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="phone">COMM CHANNEL (PHONE / WHATSAPP)</label>
                  <input type="text" id="phone" value={formData.phone} onChange={handleChange} className="form-input" required placeholder="Enter comm channel" disabled={formState === 'transmitting'} />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="projectType">MISSION TYPE</label>
                  <select id="projectType" value={formData.projectType} onChange={handleChange} className="form-input" disabled={formState === 'transmitting'}>
                    <option value="WEB EXPERIENCE">WEB EXPERIENCE</option>
                    <option value="BRAND IDENTITY">BRAND IDENTITY</option>
                    <option value="AI AUTOMATION">AI AUTOMATION</option>
                    <option value="OTHER">OTHER</option>
                  </select>
                </div>
              </div>
              
              <div className="form-group full-width">
                <label className="form-label" htmlFor="message">TRANSMISSION DATA</label>
                <textarea id="message" value={formData.message} onChange={handleChange} className="form-input form-textarea" required placeholder="Enter your message parameters..." disabled={formState === 'transmitting'}></textarea>
              </div>
              
              <button 
                type="submit" 
                className={`btn-primary form-submit ${formState === 'transmitting' ? 'transmitting' : ''}`}
                disabled={formState === 'transmitting'}
              >
                {formState === 'idle' && (
                  <>TRANSMIT MESSAGE <Send size={18} style={{ marginLeft: '8px', display: 'inline-block', verticalAlign: 'middle' }} /></>
                )}
                {formState === 'transmitting' && 'TRANSMITTING...'}
              </button>
            </form>
          )}
          
          {/* Subtle scanning effect on form */}
          <div className="form-scanner"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
