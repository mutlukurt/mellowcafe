import React, { useState } from 'react';
import { Send, Calendar, Instagram, Mail } from 'lucide-react';
import { instagramPosts } from '../mock';

const ContactSection = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Mock newsletter subscription
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const handleBookTable = () => {
    // Mock booking functionality - in real app, this would open a booking system
    alert('Booking system would open here! For now, please call us or use WhatsApp.');
  };

  return (
    <section id="contact" className="py-20" style={{ background: 'var(--bg-section)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif heading-1 mb-4">Stay Connected</h2>
          <p className="body-large text-text-secondary max-w-2xl mx-auto">
            Join our community for the latest updates, seasonal specials, and exclusive events. 
            We'd love to keep you in the loop!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Newsletter & Booking */}
          <div className="space-y-8">
            {/* Book a Table CTA */}
            <div 
              className="p-8 rounded-xl text-center"
              style={{ background: 'var(--bg-card)' }}
            >
              <Calendar 
                size={48} 
                style={{ color: 'var(--accent-espresso)' }} 
                className="mx-auto mb-4"
              />
              <h3 className="font-serif heading-2 mb-3">Reserve Your Table</h3>
              <p className="body-medium text-text-secondary mb-6">
                Skip the wait and secure your spot at Mellow Café. 
                Perfect for date nights, business meetings, or catching up with friends.
              </p>
              <button 
                className="btn-primary"
                onClick={handleBookTable}
              >
                <Calendar size={18} />
                Book a Table
              </button>
            </div>

            {/* Newsletter Signup */}
            <div 
              className="p-8 rounded-xl"
              style={{ background: 'var(--bg-card)' }}
            >
              <Mail 
                size={48} 
                style={{ color: 'var(--accent-sage)' }} 
                className="mx-auto mb-4"
              />
              <h3 className="font-serif heading-2 mb-3 text-center">Newsletter</h3>
              <p className="body-medium text-text-secondary mb-6 text-center">
                Get the first taste of our seasonal menu updates, special events, 
                and exclusive offers delivered to your inbox.
              </p>

              {!isSubscribed ? (
                <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                  <div className="flex gap-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="flex-1 px-4 py-3 rounded-full border focus:outline-none focus:ring-2 transition-all duration-200"
                      style={{
                        border: '1px solid var(--border-input)',
                        background: 'var(--bg-page)',
                        '--focus-ring': 'var(--accent-sage)40'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--border-input-focus)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--border-input)'}
                    />
                    <button
                      type="submit"
                      className="btn-primary px-6"
                    >
                      <Send size={18} />
                    </button>
                  </div>
                  <p className="caption text-text-muted text-center">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </form>
              ) : (
                <div 
                  className="text-center py-4 px-6 rounded-full"
                  style={{ background: 'var(--accent-sage)20', color: 'var(--accent-sage)' }}
                >
                  ✓ Thank you for subscribing!
                </div>
              )}
            </div>
          </div>

          {/* Instagram Feed */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Instagram 
                size={32} 
                style={{ color: 'var(--accent-espresso)' }}
              />
              <div>
                <h3 className="font-serif heading-2">@mellowcafe</h3>
                <p className="body-small text-text-secondary">Follow us for daily inspiration</p>
              </div>
            </div>

            {/* Instagram Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {instagramPosts.map(post => (
                <div
                  key={post.id}
                  className="aspect-square rounded-xl overflow-hidden hover-lift cursor-pointer group relative"
                >
                  <img
                    src={post.image}
                    alt={post.caption}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                  
                  {/* Caption on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                       style={{ background: 'linear-gradient(transparent, rgba(0,0,0,0.7))' }}>
                    <p className="body-small">{post.caption}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Follow Button */}
            <button 
              className="btn-secondary w-full"
              onClick={() => window.open('https://instagram.com/mellowcafe', '_blank')}
            >
              <Instagram size={18} />
              Follow @mellowcafe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;