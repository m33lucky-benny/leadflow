// Main JavaScript for LeadFlow
// No inline scripts - CSP compliant

document.addEventListener('DOMContentLoaded', function() {
  // Mobile navigation toggle
  initMobileNav();
  
  // Smooth scroll for anchor links
  initSmoothScroll();
});

// Mobile Navigation
function initMobileNav() {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  if (!navToggle || !navMenu) return;
  
  navToggle.addEventListener('click', function() {
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', !isExpanded);
    navMenu.classList.toggle('is-open');
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
      navToggle.setAttribute('aria-expanded', 'false');
      navMenu.classList.remove('is-open');
    }
  });
  
  // Close menu on escape key
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && navMenu.classList.contains('is-open')) {
      navToggle.setAttribute('aria-expanded', 'false');
      navMenu.classList.remove('is-open');
      navToggle.focus();
    }
  });
}

// Smooth Scroll
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Utility: Show loading state on button
function setButtonLoading(button, isLoading) {
  const text = button.querySelector('.button-text');
  const spinner = button.querySelector('.spinner');
  
  if (isLoading) {
    button.disabled = true;
    if (text) text.style.display = 'none';
    if (spinner) spinner.style.display = 'inline-block';
  } else {
    button.disabled = false;
    if (text) text.style.display = 'inline';
    if (spinner) spinner.style.display = 'none';
  }
}

// Utility: Show form status message
function showFormStatus(container, type, message) {
  container.className = 'alert alert-' + type;
  container.textContent = message;
  container.style.display = 'block';
  
  // Auto-hide success messages after 5 seconds
  if (type === 'success') {
    setTimeout(() => {
      container.style.display = 'none';
    }, 5000);
  }
}

// Utility: Validate email format
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Utility: Clear form errors
function clearFormErrors(form) {
  form.querySelectorAll('.form-error').forEach(error => {
    error.textContent = '';
  });
  form.querySelectorAll('.form-input, .form-textarea, .form-select').forEach(input => {
    input.classList.remove('is-invalid');
  });
}

// Utility: Show field error
function showFieldError(inputId, message) {
  const input = document.getElementById(inputId);
  const error = document.getElementById(inputId + '-error');
  
  if (input) input.classList.add('is-invalid');
  if (error) error.textContent = message;
}
