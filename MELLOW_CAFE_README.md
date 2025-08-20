# Mellow Café Website

A modern, responsive one-page website for Mellow Café built with React and beautiful design.

## Features

### ✨ Core Features
- **Sticky Navigation** - Smooth scroll navigation with jump links
- **Hero Section** - Ambient background video with compelling CTA
- **Interactive Menu** - Tabbed menu with dietary filters (Vegetarian, Gluten Free)
- **Photo Gallery** - Masonry layout with lightbox functionality
- **Location Integration** - Google Maps embed with contact information
- **Newsletter Signup** - Email collection with validation
- **Instagram Feed** - Social media integration preview
- **Mobile Responsive** - Optimized for all device sizes

### 🎨 Design Elements
- **Typography** - Fraunces serif for headings, Nunito for body text
- **Color Palette** - Warm cream background (#FFF9F2) with espresso and sage accents
- **Interactions** - Hover animations, smooth transitions, glass morphism effects
- **Accessibility** - Semantic HTML, ARIA labels, keyboard navigation
- **SEO Optimized** - Schema.org structured data for local business

## Tech Stack

- **React 19** - Modern React with hooks
- **Tailwind CSS** - Custom design system with CSS variables
- **Lucide React** - Beautiful icons
- **Google Fonts** - Fraunces and Nunito typography
- **Google Maps** - Location integration

## Installation & Setup

1. **Clone/Extract the project**
   ```bash
   # If you have the zip file, extract it
   unzip mellow_cafe_website.zip
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   yarn install
   # or
   npm install
   ```

3. **Start development server**
   ```bash
   yarn start
   # or
   npm start
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

## Project Structure

```
frontend/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── components/         # React components
│   │   ├── Header.jsx      # Sticky navigation
│   │   ├── HeroSection.jsx # Hero with video background
│   │   ├── MenuSection.jsx # Interactive menu with tabs
│   │   ├── GallerySection.jsx # Photo gallery with lightbox
│   │   ├── LocationSection.jsx # Maps and contact info
│   │   ├── ContactSection.jsx # Newsletter and Instagram
│   │   ├── Footer.jsx      # Footer with social links
│   │   └── ui/            # Reusable UI components
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   ├── App.js             # Main application component
│   ├── App.css            # Custom styles and design system
│   ├── index.css          # Global styles and Tailwind
│   └── mock.js            # Sample data for development
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind configuration
└── craco.config.js        # Build configuration
```

## Customization

### 🎨 Colors
Edit CSS variables in `src/App.css`:
```css
:root {
  --bg-page: #FFF9F2;           /* Main background */
  --accent-espresso: #3C2614;    /* Primary dark color */
  --accent-sage: #87A96B;        /* Primary accent color */
  /* ... */
}
```

### 📝 Content
Update mock data in `src/mock.js`:
- Menu items with images and prices
- Gallery images
- Contact information
- Instagram posts

### 🗺️ Google Maps
Replace the map embed URL in `src/mock.js` with your location's embed code.

### 📱 Responsive Design
The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1279px  
- Desktop: 1280px+

## Key Components

### Navigation (Header.jsx)
- Sticky header with backdrop blur
- Smooth scroll to sections
- Mobile hamburger menu
- "Book a Table" CTA button

### Menu System (MenuSection.jsx)  
- Tab-based navigation (Breakfast, Lunch, Drinks, Desserts)
- Dietary filter chips (Vegetarian, Gluten Free)
- Grid layout with hover effects
- Lazy-loaded images

### Gallery (GallerySection.jsx)
- Masonry grid layout
- Lightbox modal with navigation
- Image counter and captions
- Smooth hover animations

### Contact Forms (ContactSection.jsx)
- Newsletter signup with validation
- Instagram feed preview
- Social media integration
- Table booking CTA

## Performance Features

- **Lazy Loading** - Images load only when needed
- **Optimized Assets** - Compressed images and efficient loading
- **Smooth Animations** - Hardware-accelerated CSS transitions
- **SEO Ready** - Structured data and semantic markup

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Deployment

### Production Build
```bash
yarn build
# or
npm run build
```

The build folder contains optimized files ready for deployment.

### Environment Variables
For production, you may want to add:
- `REACT_APP_GOOGLE_MAPS_API_KEY` - For enhanced maps features
- `REACT_APP_INSTAGRAM_TOKEN` - For live Instagram feed

## Next Steps

To make this a fully functional website, consider adding:

1. **Backend Integration**
   - Contact form submission
   - Newsletter signup storage
   - Table booking system
   - Menu management

2. **CMS Integration**
   - Content management for menu items
   - Gallery image management
   - Easy content updates

3. **Analytics**
   - Google Analytics
   - Conversion tracking
   - Performance monitoring

4. **Advanced Features**
   - Online ordering
   - Loyalty program
   - Event booking
   - Live Instagram feed

## Support

For questions or customization help, refer to:
- React Documentation: https://react.dev
- Tailwind CSS: https://tailwindcss.com
- Component Library: Shadcn/ui

---

**Mellow Café Website** - Built with ❤️ for coffee lovers everywhere.