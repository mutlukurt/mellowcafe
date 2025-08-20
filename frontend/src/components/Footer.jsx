import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';
import { contactInfo } from '../mock';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'menu', label: 'Menu' },
    { id: 'location', label: 'Location' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' }
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/mellowcafe', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com/mellowcafe', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/mellowcafe', label: 'Twitter' }
  ];

  return (
    <footer 
      className="py-16"
      style={{ background: 'var(--accent-espresso)', color: 'white' }}
    >
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-serif heading-2 mb-4">Mellow Café</h3>
            <p className="body-medium opacity-90 mb-6 max-w-md">
              Where every sip tells a story. Experience the perfect blend of quality coffee, 
              delicious food, and warm hospitality in the heart of our community.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center hover-scale transition-all duration-200"
                  style={{ background: 'rgba(255, 255, 255, 0.1)' }}
                  aria-label={label}
                  onMouseEnter={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.2)'}
                  onMouseLeave={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.1)'}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="heading-3 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="body-medium opacity-90 hover:opacity-100 transition-opacity duration-200 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="heading-3 mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 opacity-75" />
                <p className="body-small opacity-90">{contactInfo.address}</p>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone size={16} className="opacity-75" />
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="body-small opacity-90 hover:opacity-100 transition-opacity duration-200"
                >
                  {contactInfo.phone}
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail size={16} className="opacity-75" />
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="body-small opacity-90 hover:opacity-100 transition-opacity duration-200"
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="mt-6">
              <h5 className="font-medium mb-2">Hours</h5>
              <div className="space-y-1 body-small opacity-90">
                <p>Mon-Fri: {contactInfo.hours.weekdays}</p>
                <p>Sat-Sun: {contactInfo.hours.weekends}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div 
          className="h-px mb-8"
          style={{ background: 'rgba(255, 255, 255, 0.2)' }}
        />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="body-small opacity-75">
            © 2024 Mellow Café. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a 
              href="#" 
              className="body-small opacity-75 hover:opacity-100 transition-opacity duration-200"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="body-small opacity-75 hover:opacity-100 transition-opacity duration-200"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Structured Data for Local Business */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            "name": "Mellow Café",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Sage Street",
              "addressLocality": "Downtown District",
              "addressRegion": "City",
              "postalCode": "12345"
            },
            "telephone": "+1-555-123-4567",
            "email": "hello@mellowcafe.com",
            "url": "https://mellowcafe.com",
            "openingHours": [
              "Mo-Fr 07:00-18:00",
              "Sa-Su 08:00-20:00"
            ],
            "servesCuisine": ["Coffee", "Breakfast", "Lunch", "Desserts"],
            "priceRange": "$$"
          })
        }}
      />
    </footer>
  );
};

export default Footer;