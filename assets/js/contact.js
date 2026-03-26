// Contact Form Handler
// Submits to Formspree or similar form endpoint

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  
  form.addEventListener('submit', handleContactSubmit);
});

async function handleContactSubmit(event) {
  event.preventDefault();
  
  const form = event.target;
  const submitButton = form.querySelector('button[type="submit"]');
  const statusContainer = document.getElementById('form-status');
  
  // Clear previous errors
  clearFormErrors(form);
  
  // Validate form
  const errors = validateContactForm(form);
  if (errors.length > 0) {
    errors.forEach(error => {
      showFieldError(error.field, error.message);
    });
    return;
  }
  
  // Show loading state
  setButtonLoading(submitButton, true);
  
  try {
    const formData = new FormData(form);
    const response = await fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });
    
    if (response.ok) {
      showFormStatus(statusContainer, 'success', 'Thank you! Your message has been sent. We\'ll get back to you within 24 hours.');
      form.reset();
    } else {
      const data = await response.json();
      throw new Error(data.error || 'Something went wrong. Please try again.');
    }
  } catch (error) {
    showFormStatus(statusContainer, 'error', error.message || 'Failed to send message. Please try again or email us directly at hello@leadflow.ebiya.sg');
  } finally {
    setButtonLoading(submitButton, false);
  }
}

function validateContactForm(form) {
  const errors = [];
  
  // Name validation
  const name = form.querySelector('#name').value.trim();
  if (!name) {
    errors.push({ field: 'name', message: 'Please enter your name' });
  } else if (name.length < 2) {
    errors.push({ field: 'name', message: 'Name must be at least 2 characters' });
  }
  
  // Email validation
  const email = form.querySelector('#email').value.trim();
  if (!email) {
    errors.push({ field: 'email', message: 'Please enter your email address' });
  } else if (!isValidEmail(email)) {
    errors.push({ field: 'email', message: 'Please enter a valid email address' });
  }
  
  // Subject validation
  const subject = form.querySelector('#subject').value;
  if (!subject) {
    errors.push({ field: 'subject', message: 'Please select a subject' });
  }
  
  // Message validation
  const message = form.querySelector('#message').value.trim();
  if (!message) {
    errors.push({ field: 'message', message: 'Please enter your message' });
  } else if (message.length < 10) {
    errors.push({ field: 'message', message: 'Message must be at least 10 characters' });
  }
  
  return errors;
}
