import React from 'react';
import { Play, Calendar } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'var(--gradient-hero-warm)' }}
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-30"
          style={{ filter: 'sepia(20%) saturate(80%)' }}
        >
          <source 
            src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761" 
            type="video/mp4" 
          />
          {/* Fallback for browsers that don't support video */}
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1920&h=1080&fit=crop)',
              filter: 'sepia(20%) saturate(80%)'
            }}
          />
        </video>
      </div>

      {/* Overlay */}
      <div 
        className="absolute inset-0 z-10"
        style={{ background: 'rgba(255, 249, 242, 0.4)' }}
      />

      {/* Content */}
      <div className="relative z-20 container text-center px-4 py-20">
        {/* Announcement Badge */}
        <div 
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 hover-lift"
          style={{
            background: 'rgba(255, 255, 255, 0.4)',
            backdropFilter: 'blur(4px)',
            WebkitBackdropFilter: 'blur(4px)',
            border: '1px solid rgba(255, 255, 255, 0.3)'
          }}
        >
          <div 
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ background: 'var(--accent-sage)' }}
          />
          <span className="caption text-text-secondary font-medium uppercase tracking-wider">
            Now Open • Fresh Daily Menu
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="font-serif heading-hero mb-6 max-w-4xl mx-auto">
          Where Every Sip Tells a{' '}
          <span style={{ color: 'var(--accent-espresso)' }}>Story</span>
        </h1>

        {/* Subheading */}
        <p className="body-large text-text-secondary mb-8 max-w-2xl mx-auto">
          Discover our carefully crafted coffee, seasonal menu, and warm atmosphere. 
          From sunrise breakfast to evening desserts, we're your neighborhood haven.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button 
            className="btn-primary flex items-center gap-2"
            onClick={() => scrollToSection('contact')}
          >
            <Calendar size={18} />
            Book a Table
          </button>
          <button 
            className="btn-secondary flex items-center gap-2"
            onClick={() => scrollToSection('menu')}
          >
            <Play size={18} />
            Explore Menu
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="caption text-text-muted">Scroll to explore</span>
          <div 
            className="w-px h-12 animate-pulse"
            style={{ background: 'var(--border-light)' }}
          />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full opacity-20 animate-pulse hidden lg:block"
           style={{ background: 'var(--accent-sage)' }} />
      <div className="absolute bottom-32 right-16 w-16 h-16 rounded-full opacity-15 animate-pulse hidden lg:block"
           style={{ background: 'var(--accent-espresso)' }} />
      <div className="absolute top-1/3 right-20 w-12 h-12 rounded-full opacity-10 animate-pulse hidden lg:block"
           style={{ background: 'var(--accent-sage)' }} />
    </section>
  );
};

export default HeroSection;