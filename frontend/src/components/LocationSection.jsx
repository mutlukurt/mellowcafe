import React from 'react';
import { MapPin, Clock, Phone, MessageCircle } from 'lucide-react';
import { contactInfo } from '../mock';

const LocationSection = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'd like to make a reservation at Mellow Café.");
    window.open(`https://wa.me/${contactInfo.whatsapp.replace(/\D/g, '')}?text=${message}`, '_blank');
  };

  const handlePhoneClick = () => {
    window.open(`tel:${contactInfo.phone}`, '_self');
  };

  return (
    <section id="location" className="py-20" style={{ background: 'var(--bg-page)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif heading-1 mb-4">Visit Us</h2>
          <p className="body-large text-text-secondary max-w-2xl mx-auto">
            Located in the heart of the city, we're easy to find and even easier to love. 
            Come experience our warm hospitality in person.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Address */}
            <div className="flex items-start gap-4">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                style={{ background: 'var(--accent-sage)20' }}
              >
                <MapPin size={20} style={{ color: 'var(--accent-sage)' }} />
              </div>
              <div>
                <h3 className="heading-3 mb-2">Location</h3>
                <p className="body-medium text-text-secondary">{contactInfo.address}</p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                style={{ background: 'var(--accent-espresso)20' }}
              >
                <Clock size={20} style={{ color: 'var(--accent-espresso)' }} />
              </div>
              <div>
                <h3 className="heading-3 mb-2">Opening Hours</h3>
                <div className="space-y-1">
                  <p className="body-medium text-text-secondary">
                    <span className="font-medium">Mon - Fri:</span> {contactInfo.hours.weekdays}
                  </p>
                  <p className="body-medium text-text-secondary">
                    <span className="font-medium">Sat - Sun:</span> {contactInfo.hours.weekends}
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Buttons */}
            <div className="space-y-4">
              <button
                onClick={handlePhoneClick}
                className="w-full flex items-center gap-3 p-4 rounded-xl border hover-lift transition-all duration-200"
                style={{ 
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-light)'
                }}
              >
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: 'var(--accent-sage)20' }}
                >
                  <Phone size={18} style={{ color: 'var(--accent-sage)' }} />
                </div>
                <div className="text-left">
                  <p className="font-medium">Call Us</p>
                  <p className="body-small text-text-secondary">{contactInfo.phone}</p>
                </div>
              </button>

              <button
                onClick={handleWhatsAppClick}
                className="w-full flex items-center gap-3 p-4 rounded-xl border hover-lift transition-all duration-200"
                style={{ 
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-light)'
                }}
              >
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: '#25D36620' }}
                >
                  <MessageCircle size={18} style={{ color: '#25D366' }} />
                </div>
                <div className="text-left">
                  <p className="font-medium">WhatsApp</p>
                  <p className="body-small text-text-secondary">Quick reservation</p>
                </div>
              </button>
            </div>

            {/* Additional Info */}
            <div 
              className="p-6 rounded-xl"
              style={{ background: 'var(--bg-section)' }}
            >
              <h4 className="heading-3 mb-3">Getting Here</h4>
              <div className="space-y-2 body-small text-text-secondary">
                <p>🚗 Free parking available</p>
                <p>🚇 2 blocks from Metro Station</p>
                <p>🚌 Bus routes 15, 23, 47</p>
                <p>♿ Wheelchair accessible</p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-medium">
            <iframe
              src={contactInfo.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mellow Café Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;