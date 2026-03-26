---
layout: page
title: "Join the Waitlist"
subtitle: "Be the first to access LeadFlow when we launch"
permalink: /waitlist/
---

<div class="waitlist-form">
  <p class="lead">
    LeadFlow is launching soon. Join our waitlist to get early access, 
    exclusive pricing, and be the first to tap into this goldmine of local business leads.
  </p>
  
  <form id="waitlist-form" action="{{ site.waitlist_endpoint }}" method="POST" novalidate>
    <div class="form-group">
      <label for="waitlist-email" class="form-label form-label-required">Email Address</label>
      <input 
        type="email" 
        id="waitlist-email" 
        name="email" 
        class="form-input form-input-large" 
        placeholder="you@example.com"
        required
        autofocus
      >
      <div class="form-error" id="waitlist-email-error" role="alert" aria-live="polite"></div>
    </div>
    
    <div class="form-group">
      <label for="waitlist-name" class="form-label">Name (optional)</label>
      <input 
        type="text" 
        id="waitlist-name" 
        name="name" 
        class="form-input" 
        placeholder="Your name"
      >
    </div>
    
    <div class="form-group">
      <label for="waitlist-business" class="form-label">What type of business are you in?</label>
      <select id="waitlist-business" name="business_type" class="form-select">
        <option value="">Select your industry</option>
        <option value="web-design">Web Design / Development</option>
        <option value="seo">SEO / Digital Marketing</option>
        <option value="agency">Full-Service Agency</option>
        <option value="consulting">Business Consulting</option>
        <option value="payments">Payment Solutions</option>
        <option value="other">Other</option>
      </select>
    </div>
    
    <div class="form-group">
      <label class="form-check">
        <input type="checkbox" name="early_access" value="yes" class="form-check-input" checked>
        <span class="form-check-label">I want early access and exclusive launch pricing</span>
      </label>
    </div>
    
    <div class="form-actions">
      <button type="submit" class="button button-primary button-large">
        <span class="button-text">Join Waitlist</span>
        <span class="spinner" aria-hidden="true" style="display: none;"></span>
      </button>
    </div>
    
    <div id="waitlist-status" class="alert" role="status" aria-live="polite" style="display: none;"></div>
  </form>
  
  <div class="waitlist-info">
    <h3>What You'll Get</h3>
    <ul>
      <li>✅ Early access to LeadFlow before public launch</li>
      <li>✅ 50% off your first 3 months (waitlist exclusive)</li>
      <li>✅ Free onboarding call to get you started</li>
      <li>✅ Priority support during your first month</li>
      <li>✅ Access to our private community of lead generation experts</li>
    </ul>
  </div>
</div>

## Launch Timeline

| Phase | Date | Status |
|-------|------|--------|
| Waitlist Opens | Now | ✅ Active |
| Beta Testing | Q2 2026 | 🚧 Planned |
| Public Launch | Q3 2026 | 🚧 Planned |
| Feature Complete | Q4 2026 | 🚧 Planned |

**No spam, ever.** We only email you about LeadFlow updates and relevant tips. Unsubscribe anytime.
