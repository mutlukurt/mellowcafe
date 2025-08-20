import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'menu', label: 'Menu' },
    { id: 'location', label: 'Location' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-overlay backdrop-blur-md shadow-soft' : 'bg-transparent'
      }`}
      style={{
        background: isScrolled ? 'var(--bg-overlay)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(8px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(8px)' : 'none'
      }}
    >
      <div className="container">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            className="font-serif heading-2 cursor-pointer hover-scale"
            onClick={() => scrollToSection('home')}
            style={{ color: 'var(--accent-espresso)' }}
          >
            Mellow Café
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="body-medium font-medium text-text-primary hover:text-accent-sage transition-colors duration-200 cursor-pointer"
                style={{ 
                  color: 'var(--text-primary)',
                  '--hover-color': 'var(--accent-sage)'
                }}
                onMouseEnter={(e) => e.target.style.color = 'var(--accent-sage)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--text-primary)'}
              >
                {item.label}
              </button>
            ))}
            <button 
              className="btn-primary"
              onClick={() => scrollToSection('contact')}
            >
              Book a Table
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover-scale"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={24} color="var(--text-primary)" />
            ) : (
              <Menu size={24} color="var(--text-primary)" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation Menu */}
        <div 
          className={`md:hidden absolute top-full left-0 right-0 transition-all duration-300 ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
          style={{
            background: 'var(--bg-overlay)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)'
          }}
        >
          <div className="container py-4">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left body-medium font-medium py-2 hover:text-accent-sage transition-colors duration-200"
                  style={{ color: 'var(--text-primary)' }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--accent-sage)'}
                  onMouseLeave={(e) => e.target.style.color = 'var(--text-primary)'}
                >
                  {item.label}
                </button>
              ))}
              <button 
                className="btn-primary mt-2"
                onClick={() => scrollToSection('contact')}
              >
                Book a Table
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;