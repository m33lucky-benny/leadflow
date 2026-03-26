// Scraping Demo Handler
// Simulates the scraping functionality for the demo

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('scrape-demo-form');
  if (!form) return;
  
  form.addEventListener('submit', handleScrapeDemo);
});

async function handleScrapeDemo(event) {
  event.preventDefault();
  
  const form = event.target;
  const submitButton = form.querySelector('button[type="submit"]');
  const statusContainer = document.getElementById('demo-status');
  const resultsContainer = document.getElementById('scrape-results-list');
  const emptyState = document.getElementById('scrape-results-empty');
  
  // Clear previous errors and results
  clearFormErrors(form);
  
  // Validate form
  const errors = validateScrapeForm(form);
  if (errors.length > 0) {
    errors.forEach(error => {
      showFieldError(error.field, error.message);
    });
    return;
  }
  
  // Show loading state
  setButtonLoading(submitButton, true);
  statusContainer.style.display = 'none';
  
  // Get form values
  const location = form.querySelector('#demo-location').value.trim();
  const category = form.querySelector('#demo-category').value;
  const minReviews = form.querySelector('#demo-min-reviews').value;
  const minRating = form.querySelector('#demo-min-rating').value;
  
  try {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Generate mock results based on inputs
    const results = generateMockResults(location, category, minReviews, minRating);
    
    // Display results
    displayResults(results, resultsContainer, emptyState);
    
    // Show success message
    showFormStatus(statusContainer, 'success', `Found ${results.length} businesses matching your criteria. This is a demo with sample data.`);
    
  } catch (error) {
    showFormStatus(statusContainer, 'error', 'Something went wrong. Please try again.');
  } finally {
    setButtonLoading(submitButton, false);
  }
}

function validateScrapeForm(form) {
  const errors = [];
  
  // Location validation
  const location = form.querySelector('#demo-location').value.trim();
  if (!location) {
    errors.push({ field: 'demo-location', message: 'Please enter a location' });
  }
  
  // Category validation
  const category = form.querySelector('#demo-category').value;
  if (!category) {
    errors.push({ field: 'demo-category', message: 'Please select a business category' });
  }
  
  return errors;
}

function generateMockResults(location, category, minReviews, minRating) {
  // Mock data based on category
  const mockData = {
    'restaurant': [
      { name: 'Joe\'s Diner', reviews: 127, rating: 4.8 },
      { name: 'Mama\'s Kitchen', reviews: 89, rating: 4.6 },
      { name: 'Spice Garden', reviews: 203, rating: 4.9 },
      { name: 'The Burger Spot', reviews: 156, rating: 4.5 },
      { name: 'Cafe Delight', reviews: 78, rating: 4.7 }
    ],
    'salon': [
      { name: 'Glamour Cuts', reviews: 134, rating: 4.7 },
      { name: 'Style Studio', reviews: 92, rating: 4.5 },
      { name: 'Elite Barbers', reviews: 178, rating: 4.8 },
      { name: 'Beauty Haven', reviews: 245, rating: 4.9 },
      { name: 'The Hair Lounge', reviews: 67, rating: 4.6 }
    ],
    'repair': [
      { name: 'QuickFix Auto', reviews: 189, rating: 4.8 },
      { name: 'Pro Mechanics', reviews: 134, rating: 4.6 },
      { name: 'Reliable Repairs', reviews: 267, rating: 4.9 },
      { name: 'Auto Care Center', reviews: 98, rating: 4.5 },
      { name: 'Speedy Service', reviews: 156, rating: 4.7 }
    ],
    'plumber': [
      { name: 'Drain Masters', reviews: 145, rating: 4.7 },
      { name: 'Flow Right Plumbing', reviews: 203, rating: 4.8 },
      { name: 'Pipe Pros', reviews: 89, rating: 4.6 },
      { name: 'Emergency Plumbers', reviews: 312, rating: 4.9 },
      { name: 'H2O Solutions', reviews: 167, rating: 4.5 }
    ],
    'default': [
      { name: 'Local Business A', reviews: 145, rating: 4.7 },
      { name: 'Quality Service B', reviews: 203, rating: 4.8 },
      { name: 'Trusted Provider C', reviews: 89, rating: 4.6 },
      { name: 'Expert Solutions D', reviews: 312, rating: 4.9 },
      { name: 'Professional Services E', reviews: 167, rating: 4.5 }
    ]
  };
  
  const businesses = mockData[category] || mockData['default'];
  
  // Filter by min reviews and rating
  return businesses.filter(b => 
    b.reviews >= parseInt(minReviews) && 
    b.rating >= parseFloat(minRating)
  ).slice(0, 5); // Limit to 5 for demo
}

function displayResults(results, container, emptyState) {
  if (results.length === 0) {
    container.style.display = 'none';
    emptyState.style.display = 'block';
    emptyState.innerHTML = '<p>No businesses found matching your criteria. Try adjusting your filters.</p>';
    return;
  }
  
  emptyState.style.display = 'none';
  container.style.display = 'block';
  
  const html = results.map(business => `
    <div class="scrape-result-item">
      <div class="scrape-result-info">
        <span class="scrape-result-name">${escapeHtml(business.name)}</span>
        <span class="scrape-result-meta">${business.reviews} reviews • ${generateAddress()}</span>
      </div>
      <div class="scrape-result-rating">
        ⭐ ${business.rating}
      </div>
    </div>
  `).join('');
  
  container.innerHTML = html;
}

function generateAddress() {
  const streets = ['Main St', 'Oak Ave', 'Park Rd', 'Market St', 'Highland Ave'];
  const street = streets[Math.floor(Math.random() * streets.length)];
  const number = Math.floor(Math.random() * 900) + 100;
  return `${number} ${street}`;
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}
