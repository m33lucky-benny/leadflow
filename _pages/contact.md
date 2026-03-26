---
layout: page
title: "Contact Us"
subtitle: "Have questions? We'd love to hear from you."
permalink: /contact/
---

<div class="contact-form">
  <form id="contact-form" action="{{ site.contact_endpoint }}" method="POST" novalidate>
    <div class="form-row">
      <div class="form-group">
        <label for="name" class="form-label form-label-required">Name</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          class="form-input" 
          placeholder="Your name"
          required
          minlength="2"
        >
        <div class="form-error" id="name-error" role="alert" aria-live="polite"></div>
      </div>
      
      <div class="form-group">
        <label for="email" class="form-label form-label-required">Email</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          class="form-input" 
          placeholder="you@example.com"
          required
        >
        <div class="form-error" id="email-error" role="alert" aria-live="polite"></div>
      </div>
    </div>
    
    <div class="form-group">
      <label for="subject" class="form-label form-label-required">Subject</label>
      <select id="subject" name="subject" class="form-select" required>
        <option value="">Select a topic</option>
        <option value="general">General Inquiry</option>
        <option value="sales">Sales Question</option>
        <option value="support">Technical Support</option>
        <option value="partnership">Partnership Opportunity</option>
      </select>
      <div class="form-error" id="subject-error" role="alert" aria-live="polite"></div>
    </div>
    
    <div class="form-group">
      <label for="message" class="form-label form-label-required">Message</label>
      <textarea 
        id="message" 
        name="message" 
        class="form-textarea" 
        placeholder="How can we help you?"
        required
        minlength="10"
        rows="5"
      ></textarea>
      <div class="form-error" id="message-error" role="alert" aria-live="polite"></div>
    </div>
    
    <div class="form-group">
      <label class="form-check">
        <input type="checkbox" name="newsletter" value="yes" class="form-check-input">
        <span class="form-check-label">Subscribe to our newsletter for tips and updates</span>
      </label>
    </div>
    
    <div class="form-actions">
      <button type="submit" class="button button-primary button-large">
        <span class="button-text">Send Message</span>
        <span class="spinner" aria-hidden="true" style="display: none;"></span>
      </button>
    </div>
    
    <div id="form-status" class="alert" role="status" aria-live="polite" style="display: none;"></div>
  </form>
</div>

## Other Ways to Reach Us

**Email:** [hello@leadflow.ebiya.sg](mailto:hello@leadflow.ebiya.sg)

**Business Hours:** Monday - Friday, 9am - 6pm SGT

**Response Time:** We typically respond within 24 hours during business days.
