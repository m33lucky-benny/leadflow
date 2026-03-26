// Waitlist Form Handler

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('waitlist-form');
  if (!form) return;
  
  form.addEventListener('submit', handleWaitlistSubmit);
});

async function handleWaitlistSubmit(event) {
  event.preventDefault();
  
  const form = event.target;
  const submitButton = form.querySelector('button[type="submit"]');
  const statusContainer = document.getElementById('waitlist-status');
  
  // Clear previous errors
  clearFormErrors(form);
  
  // Validate form
  const errors = validateWaitlistForm(form);
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
    
    // Add metadata
    formData.append('source', window.location.href);
    formData.append('timestamp', new Date().toISOString());
    
    const response = await fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });
    
    if (response.ok) {
      showFormStatus(statusContainer, 'success', '🎉 You\'re on the list! We\'ll email you as soon as LeadFlow is ready for early access.');
      form.reset();
      
      // Track conversion (if analytics is set up)
      if (typeof gtag !== 'undefined') {
        gtag('event', 'waitlist_signup', {
          'event_category': 'engagement',
          'event_label': 'waitlist_form'
        });
      }
    } else {
      const data = await response.json();
      throw new Error(data.error || 'Something went wrong. Please try again.');
    }
  } catch (error) {
    showFormStatus(statusContainer, 'error', error.message || 'Failed to join waitlist. Please try again or email us at hello@leadflow.ebiya.sg');
  } finally {
    setButtonLoading(submitButton, false);
  }
}

function validateWaitlistForm(form) {
  const errors = [];
  
  // Email validation
  const email = form.querySelector('#waitlist-email').value.trim();
  if (!email) {
    errors.push({ field: 'waitlist-email', message: 'Please enter your email address' });
  } else if (!isValidEmail(email)) {
    errors.push({ field: 'waitlist-email', message: 'Please enter a valid email address' });
  }
  
  return errors;
}
