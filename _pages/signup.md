---
layout: page
title: "Sign Up"
subtitle: "Create your LeadFlow account"
permalink: /signup/
---

<div class="signup-form">
  <form id="signup-form" action="#" method="POST" novalidate>
    <div class="form-group">
      <label for="signup-name" class="form-label form-label-required">Full Name</label>
      <input 
        type="text" 
        id="signup-name" 
        name="name" 
        class="form-input" 
        placeholder="Your full name"
        required
        minlength="2"
      >
      <div class="form-error" id="signup-name-error" role="alert" aria-live="polite"></div>
    </div>
    
    <div class="form-group">
      <label for="signup-email" class="form-label form-label-required">Email Address</label>
      <input 
        type="email" 
        id="signup-email" 
        name="email" 
        class="form-input" 
        placeholder="you@example.com"
        required
      >
      <div class="form-error" id="signup-email-error" role="alert" aria-live="polite"></div>
    </div>
    
    <div class="form-group">
      <label for="signup-password" class="form-label form-label-required">Password</label>
      <input 
        type="password" 
        id="signup-password" 
        name="password" 
        class="form-input" 
        placeholder="Create a secure password"
        required
        minlength="8"
      >
      <p class="form-hint">Must be at least 8 characters with letters and numbers</p>
      <div class="form-error" id="signup-password-error" role="alert" aria-live="polite"></div>
    </div>
    
    <div class="form-group">
      <label for="signup-password-confirm" class="form-label form-label-required">Confirm Password</label>
      <input 
        type="password" 
        id="signup-password-confirm" 
        name="password_confirm" 
        class="form-input" 
        placeholder="Confirm your password"
        required
      >
      <div class="form-error" id="signup-password-confirm-error" role="alert" aria-live="polite"></div>
    </div>
    
    <div class="form-group">
      <label class="form-check">
        <input type="checkbox" name="terms" value="yes" class="form-check-input" required>
        <span class="form-check-label">
          I agree to the <a href="/terms/">Terms of Service</a> and 
          <a href="/privacy/">Privacy Policy</a> *
        </span>
      </label>
      <div class="form-error" id="signup-terms-error" role="alert" aria-live="polite"></div>
    </div>
    
    <div class="form-group">
      <label class="form-check">
        <input type="checkbox" name="newsletter" value="yes" class="form-check-input" checked>
        <span class="form-check-label">Send me tips on finding and closing local business leads</span>
      </label>
    </div>
    
    <div class="form-actions">
      <button type="submit" class="button button-primary button-large">
        <span class="button-text">Create Account</span>
        <span class="spinner" aria-hidden="true" style="display: none;"></span>
      </button>
    </div>
    
    <div id="signup-status" class="alert" role="status" aria-live="polite" style="display: none;"></div>
  </form>
  
  <div class="signup-footer">
    <p>Already have an account? <a href="/login/">Log in</a></p>
  </div>
</div>

## Why Create an Account?

- **Save your searches** — Keep track of leads you've found
- **Export to CSV** — Download leads for your CRM
- **Email templates** — Access proven outreach scripts
- **Priority support** — Get help when you need it

**Note:** LeadFlow is currently in waitlist mode. Creating an account now secures your spot for early access.
