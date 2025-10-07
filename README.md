# Michael's House - Erie County Children's Advocacy Center
## Modern Website Redesign

A trauma-informed, accessible website redesign for Michael's House, Erie County's Children's Advocacy Center.

---

## 🎯 Project Overview

This redesign focuses on creating a compassionate, professional, and accessible web presence for Michael's House. The design prioritizes:

- **Trauma-Informed Design**: Clear, calm, supportive interface
- **Accessibility**: WCAG 2.1 AA compliant
- **Mobile-First**: Fully responsive across all devices
- **Performance**: Fast loading times with optimized assets
- **Trust & Safety**: Design communicates security and professionalism

---

## 📁 Project Structure

```
Michael's House/
├── index.html              # Homepage
├── about.html              # About Us page with timeline & gallery
├── story.html              # Michael's Story page
├── resources.html          # Resources & support services
├── donate.html             # How You Can Help / Donations
├── contact.html            # Contact Us with form
├── css/
│   ├── styles.css          # Global styles & design system
│   ├── about.css           # About page specific styles
│   ├── story.css           # Story page specific styles
│   ├── resources.css       # Resources page specific styles
│   ├── donate.css          # Donate page specific styles
│   └── contact.css         # Contact page specific styles
├── js/
│   ├── main.js             # Core JavaScript functionality
│   └── contact.js          # Contact form handling
├── public/
│   ├── logo.png            # Michael's House logo
│   ├── insidehouse1-9.jpg  # Interior facility photos
│   └── IMAGE_NOTES.md      # Guide for additional images needed
└── README.md               # This file
```

---

## 🎨 Design System

### Color Palette
- **Primary Purple**: `#7B4397` - Main brand color
- **Deep Plum**: `#6B4C7C` - Headers and emphasis
- **Soft Lavender**: `#E6E6FA` - Backgrounds and accents
- **Warm Cream**: `#FAF7F2` - Contrast and softness
- **Soft Sage**: `#B8C5B0` - Calming accent
- **Pure White**: `#FFFFFF` - Clarity
- **Charcoal Gray**: `#4A4A4A` - Body text

### Typography
- **Headings**: Poppins (Google Fonts)
- **Body**: Open Sans (Google Fonts)
- **Base Size**: 16px
- **Line Height**: 1.7 (body), 1.3 (headings)

### Spacing Scale
- XS: 0.5rem (8px)
- SM: 1rem (16px)
- MD: 1.5rem (24px)
- LG: 2rem (32px)
- XL: 3rem (48px)
- 2XL: 4rem (64px)
- 3XL: 6rem (96px)

---

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional but recommended for testing)

### Installation

1. **Clone or Download** this repository to your local machine

2. **Add Required Images**
   - Review `/public/IMAGE_NOTES.md` for image requirements
   - Add placeholder images to `/public` directory
   - Images already included: logo.png, insidehouse1-9.jpg

3. **Open in Browser**

   **Option A: Direct File Opening**
   ```
   Simply open index.html in your browser
   ```

   **Option B: Local Server (Recommended)**
   ```bash
   # Using Python 3
   python -m http.server 8000

   # Using Python 2
   python -m SimpleHTTPServer 8000

   # Using Node.js (http-server)
   npx http-server
   ```

   Then navigate to `http://localhost:8000`

---

## 📄 Page Details

### Homepage (`index.html`)
- Crisis banner with National Child Abuse Hotline
- Hero section with organization name
- Mission statement
- Our Goals section with three key objectives
- Card grid linking to main sections
- Donation call-to-action
- Newsletter signup in footer

### About Us (`about.html`)
- Organization background and purpose
- Detailed goals list
- Timeline: "A Vision Becomes a Reality" (2002-Today)
- Board Members listing
- Photo gallery (9 interior images) with lightbox
- Community Resources download link

### Michael's Story (`story.html`)
- Sensitive, respectful memorial content
- Story of Michael Wasserman
- Quote from Judge James McMonagle
- Purpose statement
- Donation call-to-action

### Resources (`resources.html`)
- Emergency contacts (prominent display)
- Erie County Community Resource Guide download
- Service categories (counseling, legal, medical, etc.)
- Important information (confidentiality, accessibility)
- Contact call-to-action

### Donate (`donate.html`)
- Impact statement
- Mailing address for donations
- Tax-deductible information
- Other ways to support (volunteer, in-kind, awareness)
- Impact statistics
- Thank you message

### Contact Us (`contact.html`)
- Contact information cards
- Contact form with validation
- Important emergency contacts
- Community partners list
- Privacy assurance

---

## ✨ Features

### Accessibility
- ✅ Semantic HTML5 structure
- ✅ Proper heading hierarchy (h1 → h2 → h3)
- ✅ ARIA labels and roles
- ✅ Skip to content link
- ✅ Keyboard navigation support
- ✅ Focus states clearly visible
- ✅ Color contrast compliance (4.5:1 minimum)
- ✅ Alt text for all images
- ✅ Form labels and validation

### Responsive Design
- ✅ Mobile-first approach
- ✅ Breakpoints: Mobile (< 768px), Tablet (768-1023px), Desktop (1024px+)
- ✅ Flexible grid layouts
- ✅ Touch-friendly tap targets (44x44px minimum)
- ✅ Responsive typography (clamp functions)

### Interactive Features
- ✅ Sticky header with scroll effects
- ✅ Mobile hamburger menu
- ✅ Photo gallery lightbox with keyboard navigation
- ✅ Form validation with helpful error messages
- ✅ Smooth scrolling for anchor links
- ✅ Fade-in animations on scroll
- ✅ Newsletter signup
- ✅ Contact form with success messaging

### Performance
- ✅ Minimal dependencies (vanilla JS)
- ✅ CSS organized by page for efficient loading
- ✅ Optimized font loading (Google Fonts)
- ✅ Image lazy loading ready
- ✅ Clean, efficient code

---

## 🔧 Customization

### Changing Colors
Edit the CSS custom properties in `/css/styles.css`:
```css
:root {
  --primary-purple: #7B4397;
  --deep-plum: #6B4C7C;
  /* etc. */
}
```

### Updating Content
- **Text**: Edit HTML files directly
- **Images**: Replace files in `/public` directory
- **Links**: Update `href` attributes in navigation and footer

### Adding Pages
1. Create new HTML file following existing structure
2. Add corresponding CSS file in `/css` directory
3. Update navigation in all pages
4. Update footer links

---

## 📱 Browser Support

- ✅ Chrome (latest 2 versions)
- ✅ Firefox (latest 2 versions)
- ✅ Safari (latest 2 versions)
- ✅ Edge (latest 2 versions)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🎯 Accessibility Compliance

This website aims for **WCAG 2.1 Level AA** compliance:

- ✅ Color contrast ratios meet AA standards
- ✅ All functionality available via keyboard
- ✅ Screen reader friendly
- ✅ Form inputs properly labeled
- ✅ Skip navigation links provided
- ✅ Semantic HTML structure
- ✅ No reliance on color alone for information

---

## 📝 Content Guidelines

When updating content, follow these principles:

1. **Tone**: Compassionate, professional, supportive
2. **Clarity**: Use simple, direct language
3. **Sensitivity**: Consider trauma-informed communication
4. **Brevity**: Keep paragraphs short and scannable
5. **Action-Oriented**: Clear calls-to-action
6. **Inclusive**: Culturally sensitive language

---

## 🔒 Privacy & Security

- All forms include privacy notices
- No tracking/analytics included by default
- Newsletter signup is frontend only (requires backend integration)
- Contact form is frontend only (requires backend integration)
- SSL/HTTPS strongly recommended for production

---

## 🚀 Deployment

### Preparing for Production

1. **Optimize Images**
   ```bash
   # Use tools like ImageOptim, TinyPNG, or Squoosh
   # Target: < 200KB per image
   ```

2. **Test Thoroughly**
   - All links working
   - Forms validating correctly
   - Mobile responsive on real devices
   - Cross-browser testing
   - Accessibility audit (WAVE, aXe, Lighthouse)

3. **Backend Integration**
   - Newsletter signup needs email service integration
   - Contact form needs server-side handling
   - Consider services: Netlify Forms, Formspree, or custom backend

4. **Hosting Options**
   - **Netlify**: Free, easy deployment, form handling built-in
   - **Vercel**: Free tier, excellent performance
   - **GitHub Pages**: Free, simple for static sites
   - **Traditional hosting**: Any web host with static file support

### Quick Deploy with Netlify
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

---

## 📞 Support & Contact

For questions about this redesign:
- Review documentation in this README
- Check `/public/IMAGE_NOTES.md` for image requirements
- Review inline code comments for specific functionality

For questions about Michael's House services:
- Visit the Contact page
- Call: 1-800-4-A-CHILD (1-800-422-4453)

---

## 🙏 Credits

**Design & Development**: Created with compassion and care for the children and families served by Michael's House

**Fonts**:
- Poppins by Indian Type Foundry (Google Fonts)
- Open Sans by Steve Matteson (Google Fonts)

**Inspiration**: Original Michael's House website and the mission of child advocacy centers nationwide

---

## 📄 License

This website redesign is created specifically for Michael's House - Erie County Children's Advocacy Center.

---

## 💙 A Note on Trauma-Informed Design

This redesign was created with trauma-informed principles:

- **Safety**: Clear, predictable navigation
- **Trust**: Professional, compassionate presentation
- **Choice**: Multiple ways to access information and help
- **Collaboration**: Community partner recognition
- **Empowerment**: Clear paths to getting help

Every design decision prioritizes the wellbeing of visitors who may be experiencing trauma or crisis.

---

**Built with care for the children and families of Erie County.**

*Last Updated: October 2025*
# michaelshouse
