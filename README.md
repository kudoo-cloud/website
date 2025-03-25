# Kudoo Marketing Website

## Overview

This repository contains the source code for the Kudoo marketing website, a Quarto-based site showcasing our ISO 27001 compliance platform designed for Australian businesses. The website includes product information, pricing details, blog content, and lead generation forms.

## Folder Structure
WEBSITE
├── _site
├── .quarto
├── assets
│   ├── css
│   ├── images
│   │   └── logos
│   │       ├── logo.jpg
│   │       ├── logo.png
│   │       └── logo2.png
│   ├── docs
│   ├── forms
│   │   ├── demo.html
│   │   ├── pricing.html
│   │   └── special-offer.html
│   └── includes
│       ├── cookie-banner.html
│       ├── cookie-consent.js
│       ├── copilot.html
│       ├── meta-tags.html
│       ├── schema.html
│       └── special-offer-tracking.html
├── pages
│   ├── blog
│   │   ├── categories
│   │   ├── posts
│   │   └── index.qmd
│   ├── legal
│   │   ├── cookie-policy.qmd
│   │   ├── privacy.qmd
│   │   └── terms.qmd
│   ├── marketing
│   │   ├── demo.qmd
│   │   ├── pricing.qmd
│   │   ├── sales.qmd
│   │   └── special-offer.qmd
│   └── product.qmd
├── _quarto.yml
├── .gitignore
├── custom.scss
├── index.qmd
├── README.md
└── robots.txt

## Development Setup

### Prerequisites

- [Quarto](https://quarto.org/docs/get-started/) installed
- Basic knowledge of Markdown, HTML, and SCSS
- Git for version control

### Local Development

1. Clone the repository:
   ```
   git clone https://github.com/your-org/kudoo-website.git
   cd kudoo-website
   ```

2. Preview the website locally:
   ```
   quarto preview
   ```
   This will start a local server at http://localhost:4096

3. Make changes to the .qmd files, SCSS, or HTML components as needed

## Building and Deployment

The website uses GitHub Pages for hosting. The deployment flow is:

1. Develop and test changes locally
2. Run `quarto render` to generate the website files
3. The rendered files are stored in the ./docs folder
4. Commit and push changes to the develop branch
5. GitHub Pages automatically deploys once a PR to master is merged

```bash
# Render the website
quarto render

# Commit and push changes
git add .
git commit -m "Update website content"
git push origin master
```

## Key Features

- Responsive design using Bootstrap and custom SCSS
- Blog with categorization and filtering
- Interactive forms for lead generation
- Microsoft Teams Copilot integration
- Cookie consent management
- Schema.org structured data for SEO

## Marketing and Sales Tracking

### Tracking Implementation

The website implements comprehensive tracking to monitor user journeys from various sources through to conversion. This is particularly evident in the special offer page (`special-offer.qmd`).

### LinkedIn and Email Campaign Tracking

The special offer campaign demonstrates how to track leads from LinkedIn and email:

1. **UTM Parameter Tracking**:
   All marketing campaigns use UTM parameters to track traffic sources:

   ```javascript
   // From special-offer.qmd
   document.addEventListener('DOMContentLoaded', function() {
     // Get UTM parameters from URL
     const urlParams = new URLSearchParams(window.location.search);
     const utmSource = urlParams.get('utm_source') || 'unknown';
     const utmMedium = urlParams.get('utm_medium') || '';
     const utmCampaign = urlParams.get('utm_campaign') || '';
     
     // Store in sessionStorage for use across pages
     sessionStorage.setItem('utm_source', utmSource);
     sessionStorage.setItem('utm_medium', utmMedium);
     sessionStorage.setItem('utm_campaign', utmCampaign);
     
     // Add to hidden form fields
     const sourceField = document.getElementById('source_channel');
     if (sourceField) {
       sourceField.value = utmSource;
     }
   });
   ```

2. **LinkedIn Campaign Setup**:
   - Create LinkedIn links with specific UTM parameters:
     - utm_source=linkedin
     - utm_campaign=iso27001_accelerator
   - Example link: `https://kudoo.io/content/special-offer.html?utm_source=linkedin&utm_campaign=iso27001_accelerator`

3. **Email Campaign Setup**:
   - Email marketing templates include links with unique UTM parameters:
     - utm_source=email
     - utm_medium=newsletter
     - utm_campaign=iso27001_accelerator
   - Example link: `https://kudoo.io/content/special-offer.html?utm_source=email&utm_medium=newsletter&utm_campaign=iso27001_accelerator`

4. **Referrer Detection**:
   If UTM parameters aren't present, the system falls back to referrer detection:

   ```javascript
   // From special-offer.html
   const referrer = document.referrer;
   let referrerSource = 'unknown';
   
   if (referrer) {
     try {
       const url = new URL(referrer);
       const domain = url.hostname;
       
       if (domain.includes('linkedin.com')) {
         referrerSource = 'linkedin';
       } else if (domain.includes('facebook.com')) {
         referrerSource = 'facebook';
       } else if (domain.includes('twitter.com') || domain.includes('x.com')) {
         referrerSource = 'twitter';
       } else if (domain.includes('google.com')) {
         referrerSource = 'google';
       } else if (domain.includes('bing.com')) {
         referrerSource = 'bing';
       } else if (domain.includes('kudoo.io')) {
         referrerSource = 'internal';
       } else if (domain.includes('mail.')) {
         referrerSource = 'email';
       } else {
         referrerSource = 'external';
       }
       
       document.getElementById('source_channel').value = referrerSource;
     } catch (e) {
       console.error('Error parsing referrer', e);
     }
   }
   ```

5. **Conversion Tracking**:
   When a user completes the form, the tracking data is included in the submission:

   ```javascript
   // Send data to Azure Function
   fetch(form.action, {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json'
     },
     body: JSON.stringify(formData)
   })
   .then(response => {
     // Success tracking
     if (typeof gtag === 'function') {
       gtag('event', 'accelerator_form_submission', {
         'source': formData.source_channel
       });
     }
   })
   ```

### Creating and Analyzing a Campaign

To create a LinkedIn campaign for the special offer:

1. **Campaign Setup**:
   - Create a dedicated landing page (e.g., special-offer.qmd)
   - Ensure the page has proper UTM parameter capture
   - Set up conversion tracking in Google Analytics 

2. **LinkedIn Campaign Creation**:
   - Set up a campaign in LinkedIn Campaign Manager
   - Target relevant audience (e.g., IT Security professionals, Compliance Officers)
   - Use the URL with UTM parameters in ad links

3. **Data Flow**:
   ```
   LinkedIn Ad → special-offer.qmd with UTM params → Form Submission → Azure Function → CRM
   ```

4. **Visitor Identification**:
   - The website generates and stores a visitor ID:
     ```javascript
     let visitorId = localStorage.getItem('kudoo_visitor_id');
     if (!visitorId) {
       visitorId = 'visitor_' + Math.random().toString(36).substring(2, 15) + 
                 Math.random().toString(36).substring(2, 15);
       localStorage.setItem('kudoo_visitor_id', visitorId);
     }
     ```

5. **CRM Integration**:
   - Form submissions are sent to an Azure Function that processes the data and sends it to the CRM
   - The source channel and visitor ID are included to track the lead's origin

6. **Analysis**:
   - Use Google Analytics events to track conversions by source
   - Custom reports can identify which sources generate the most leads

## Forms and Integrations

The website uses FormSubmit.co for form handling:

```html
<form id="demo-request-form" action="https://formsubmit.co/jtrollip@kudoo.io" method="POST">
```

Special forms (like the accelerator offer) use a custom Azure Function for processing.

## Cookie Consent

The website implements cookie consent management in accordance with privacy regulations. The consent mechanism is defined in `cookie-consent.js` and `cookie-banner.html`.

## Customization

### Styling

The website uses Quarto's theming capabilities with Bootstrap and custom SCSS. Main styling is in `custom.scss`.

### Adding New Pages

1. Create a new .qmd file in the appropriate directory
2. Add YAML front matter for title, description, etc.
3. Write content using Markdown and HTML as needed
4. Render the site to see changes

## License

© 2025 Kudoo. All rights reserved.