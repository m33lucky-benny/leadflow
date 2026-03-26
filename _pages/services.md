---
layout: page
title: "Services & Demo"
subtitle: "Try LeadFlow's scraping engine"
permalink: /services/
---

## How LeadFlow Works

LeadFlow uses Google Places data to find local businesses that are **successful offline but invisible online**. Here's what we look for:

### Our Criteria

| Factor | Why It Matters |
|--------|----------------|
| **4+ Star Rating** | Proves they deliver quality service |
| **20+ Reviews** | Shows they have an active customer base |
| **No Website** | They're losing online customers daily |

### The Results

You get a list of businesses with:
- ✅ Business name and address
- ✅ Phone number
- ✅ Email (when available)
- ✅ Review count and rating
- ✅ Google Maps link

---

## Try the Demo

Enter a location and business category to see what LeadFlow can find. 

**Note:** This is a limited demo. Full version includes more filters, exports, and contact enrichment.

<div class="scrape-form">
  <h3 class="scrape-form-title">Scrape Local Businesses</h3>
  
  <form id="scrape-demo-form" novalidate>
    <div class="form-row">
      <div class="form-group">
        <label for="demo-location" class="form-label form-label-required">Location</label>
        <input 
          type="text" 
          id="demo-location" 
          name="location" 
          class="form-input" 
          placeholder="e.g., Punggol, Singapore"
          required
        >
        <p class="form-hint">Enter a city, neighborhood, or area</p>
        <div class="form-error" id="demo-location-error" role="alert" aria-live="polite"></div>
      </div>
      
      <div class="form-group">
        <label for="demo-category" class="form-label form-label-required">Business Category</label>
        <select id="demo-category" name="category" class="form-select" required>
          <option value="">Select a category</option>
          <option value="restaurant">Restaurants & Cafes</option>
          <option value="salon">Beauty & Salon</option>
          <option value="repair">Auto Repair</option>
          <option value="plumber">Plumbers & HVAC</option>
          <option value="cleaning">Cleaning Services</option>
          <option value="childcare">Childcare & Preschools</option>
          <option value="fitness">Gyms & Fitness</option>
          <option value="retail">Retail Stores</option>
          <option value="other">Other Local Services</option>
        </select>
        <div class="form-error" id="demo-category-error" role="alert" aria-live="polite"></div>
      </div>
    </div>
    
    <div class="form-row">
      <div class="form-group">
        <label for="demo-min-reviews" class="form-label">Minimum Reviews</label>
        <select id="demo-min-reviews" name="min_reviews" class="form-select">
          <option value="10">10+ reviews</option>
          <option value="20" selected>20+ reviews</option>
          <option value="50">50+ reviews</option>
          <option value="100">100+ reviews</option>
        </select>
      </div>
      
      <div class="form-group">
        <label for="demo-min-rating" class="form-label">Minimum Rating</label>
        <select id="demo-min-rating" name="min_rating" class="form-select">
          <option value="3.5">3.5+ stars</option>
          <option value="4.0" selected>4.0+ stars</option>
          <option value="4.5">4.5+ stars</option>
        </select>
      </div>
    </div>
    
    <div class="form-actions">
      <button type="submit" class="button button-primary button-large">
        <span class="button-text">Find Leads</span>
        <span class="spinner" aria-hidden="true" style="display: none;"></span>
      </button>
    </div>
    
    <div id="demo-status" class="alert" role="status" aria-live="polite" style="display: none;"></div>
  </form>
</div>

<div class="scrape-results" id="scrape-results">
  <div class="scrape-results-empty" id="scrape-results-empty">
    <p>👆 Enter a location and category above to see sample results</p>
    <p class="text-muted">Demo limited to 5 results. Full version returns up to 100 leads per search.</p>
  </div>
  <div id="scrape-results-list" style="display: none;"></div>
</div>

---

## Pricing Plans

Choose the plan that fits your business:

### Starter
**$49/month**

- 100 leads per month
- Basic filters (location, category)
- CSV export
- Email support

[Get Started](/signup/){: .button .button-secondary}

### Professional
**$149/month**

- 500 leads per month
- Advanced filters (rating, review count, hours)
- Contact enrichment (email finder)
- Email templates
- Priority support

[Get Started](/signup/){: .button .button-primary}

### Agency
**$399/month**

- Unlimited leads
- All Pro features
- White-label reports
- API access
- Dedicated account manager
- Team collaboration (5 seats)

[Contact Sales](/contact/){: .button .button-secondary}

---

## What You Can Do With LeadFlow

### For Web Designers
Find businesses that desperately need a website but have no idea where to start. Pitch: *"I found you on Google but couldn't find your website. You're losing customers every day."*

### For SEO Consultants
Target businesses with reviews but zero search visibility. Easy wins with huge impact.

### For Marketing Agencies
Full-service digital transformation for offline-successful businesses. Bigger deals, longer relationships.

### For Payment Consultants
Local retailers and service businesses that need to accept digital payments but don't know how.

---

**Ready to start finding leads?**

[Join the Waitlist](/waitlist/){: .button .button-primary}
