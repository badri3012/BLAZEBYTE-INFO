import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, AlertCircle, RefreshCw } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formState, setFormState] = useState('idle'); // idle, sending, success, error
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: 'Website',
    budget: '₹25K–₹50K',
    timeline: 'Within 2–4 weeks',
    message: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleRetry = () => {
    setFormState('idle');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState('sending');

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      console.warn('Web3Forms access key is missing. Simulation mode active.');
      setTimeout(() => {
        setFormState('success');
      }, 1000);
      return;
    }

    const payload = {
      access_key: accessKey,
      subject: `🚀 New BlazeByte Studio Enquiry: ${formData.name} (${formData.company || 'Brand'})`,
      from_name: formData.name,
      company: formData.company || 'Not specified',
      email: formData.email,
      phone: formData.phone || 'Not specified',
      project_type: formData.projectType,
      budget: formData.budget,
      timeline: formData.timeline,
      message: formData.message,
      submitted_at: new Date().toLocaleString(),
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      if (result.success) {
        setFormState('success');
      } else {
        throw new Error('Web3Forms returned unsuccessful response');
      }
    } catch (err) {
      console.error('Submission failed:', err);
      setFormState('error');
    }
  };

  return (
    <section className="contact-section section-padding" id="contact">
      <div className="container">
        <div className="contact-cta-card editorial-card">
          <div className="contact-cta-header">
            <div className="section-badge">
              <span className="section-badge-dot"></span> BLAZEBYTE STUDIO // INITIATE
            </div>
            <h2 className="cta-headline">
              Tell us what<br />you’re building.
            </h2>
            <p className="cta-paragraph">
              Share a few details and we’ll get back to you with the right next step.
            </p>
          </div>

          {/* Form Container */}
          <div className="contact-form-container">
            {formState === 'success' ? (
              <div className="form-state-card success-card">
                <CheckCircle2 size={48} className="icon-success" />
                <h3>Thanks — we’ve received your enquiry.</h3>
                <p>
                  We’ll review the details and get back to you shortly.
                </p>
                <div className="state-action">
                  <button className="btn-secondary" onClick={() => setFormState('idle')}>
                    SUBMIT ANOTHER ENQUIRY
                  </button>
                </div>
              </div>
            ) : formState === 'error' ? (
              <div className="form-state-card error-card">
                <AlertCircle size={48} className="icon-error" />
                <h3>Something went wrong while sending your enquiry.</h3>
                <p>
                  Please try again or contact us directly at <strong>blazebytestudio7@gmail.com</strong>.
                </p>
                <div className="state-action">
                  <button className="btn-primary" onClick={handleRetry}>
                    <RefreshCw size={16} /> RETRY SUBMISSION
                  </button>
                </div>
              </div>
            ) : (
              <form className="project-brief-form" onSubmit={handleSubmit}>
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">
                      FULL NAME *
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                      required
                      placeholder="Your name"
                      disabled={formState === 'sending'}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="company">
                      COMPANY / BRAND
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Your company or brand"
                      disabled={formState === 'sending'}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="email">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                      required
                      placeholder="you@company.com"
                      disabled={formState === 'sending'}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">
                      PHONE / WHATSAPP *
                    </label>
                    <input
                      type="text"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input"
                      required
                      placeholder="Your phone or WhatsApp number"
                      disabled={formState === 'sending'}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="projectType">
                      PROJECT TYPE
                    </label>
                    <select
                      id="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="form-select"
                      disabled={formState === 'sending'}
                    >
                      <option value="Website">Website</option>
                      <option value="Digital Product">Digital Product</option>
                      <option value="E-commerce">E-commerce</option>
                      <option value="AI / Automation">AI / Automation</option>
                      <option value="Digital Marketing">Digital Marketing</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="budget">
                      BUDGET RANGE
                    </label>
                    <select
                      id="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="form-select"
                      disabled={formState === 'sending'}
                    >
                      <option value="Under ₹25K">Under ₹25K</option>
                      <option value="₹25K–₹50K">₹25K–₹50K</option>
                      <option value="₹50K–₹1L">₹50K–₹1L</option>
                      <option value="₹1L+">₹1L+</option>
                      <option value="Not sure yet">Not sure yet</option>
                    </select>
                  </div>

                  <div className="form-group full-width">
                    <label className="form-label" htmlFor="timeline">
                      EXPECTED TIMELINE
                    </label>
                    <select
                      id="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="form-select"
                      disabled={formState === 'sending'}
                    >
                      <option value="ASAP">ASAP</option>
                      <option value="Within 2–4 weeks">Within 2–4 weeks</option>
                      <option value="1–2 months">1–2 months</option>
                      <option value="3+ months">3+ months</option>
                      <option value="Not decided">Not decided</option>
                    </select>
                  </div>

                  <div className="form-group full-width">
                    <label className="form-label" htmlFor="message">
                      PROJECT BRIEF / OBJECTIVES *
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="form-textarea"
                      required
                      placeholder="Tell us what you’re looking to build."
                      disabled={formState === 'sending'}
                    ></textarea>
                  </div>
                </div>

                <div className="form-submit-row">
                  <button
                    type="submit"
                    className="btn-primary form-submit-btn"
                    disabled={formState === 'sending'}
                  >
                    {formState === 'sending' ? (
                      'SENDING BRIEF...'
                    ) : (
                      <>
                        START A PROJECT <ArrowUpRight size={18} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
