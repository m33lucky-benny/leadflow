# LeadFlow Website

A secure, CSP-compliant Jekyll site for LeadFlow - Local business lead generation tool.

## Structure

```
leadflow-website/
├── _config.yml              # Jekyll configuration
├── _includes/               # Reusable components
│   ├── head.html           # Head with CSP
│   ├── header.html         # Navigation
│   ├── footer.html         # Footer
│   ├── contact-form.html   # Contact form component
│   ├── waitlist-form.html  # Waitlist signup
│   ├── scrape-demo.html    # Scraping demo
│   └── scripts.html        # External scripts
├── _layouts/               # Page templates
│   ├── default.html        # Base layout
│   ├── page.html           # Standard page
│   └── home.html           # Homepage
├── _sass/                  # SCSS modules
│   ├── _base.scss
│   ├── _components.scss
│   ├── _layout.scss
│   ├── _forms.scss
│   └── _responsive.scss
├── assets/
│   ├── css/main.scss       # Main stylesheet
│   ├── js/
│   │   ├── main.js         # Core functionality
│   │   ├── contact.js      # Contact form handler
│   │   ├── waitlist.js     # Waitlist handler
│   │   └── scrape-demo.js  # Scraping demo
│   └── images/
├── _pages/                 # Site pages
│   ├── about.md
│   ├── contact.md
│   ├── waitlist.md
│   ├── signup.md
│   └── services.md
└── index.md                # Homepage
```

## Security Features

- Strict CSP (Content Security Policy)
- No inline styles or scripts
- All external resources via SRI (Subresource Integrity)
- HTTPS enforcement
- Secure form handling

## Development

```bash
# Install dependencies
bundle install

# Serve locally
bundle exec jekyll serve

# Build for production
JEKYLL_ENV=production bundle exec jekyll build
```

## Deployment

Push to GitHub Pages:
```bash
git add .
git commit -m "Initial LeadFlow website"
git push origin main
```
