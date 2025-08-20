import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryImages } from '../mock';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % galleryImages.length
      : (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    
    setCurrentIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };

  return (
    <section id="gallery" className="py-20" style={{ background: 'var(--bg-section)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif heading-1 mb-4">Gallery</h2>
          <p className="body-large text-text-secondary max-w-2xl mx-auto">
            Step into our world through these moments captured at Mellow Café. 
            Experience the warmth, craft, and community that defines us.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="break-inside-avoid mb-6 cursor-pointer hover-lift group"
              onClick={() => openLightbox(image, index)}
            >
              <div className="relative overflow-hidden rounded-xl shadow-soft">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                
                {/* Hover Indication */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(255, 255, 255, 0.9)' }}
                  >
                    <span className="text-lg">🔍</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More CTA */}
        <div className="text-center mt-12">
          <button className="btn-secondary">
            Follow @mellowcafe for more
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(0, 0, 0, 0.9)' }}
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 z-60 p-2 rounded-full hover-scale"
            style={{ background: 'rgba(255, 255, 255, 0.1)' }}
            onClick={closeLightbox}
          >
            <X size={24} color="white" />
          </button>

          {/* Navigation Arrows */}
          {galleryImages.length > 1 && (
            <>
              <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-60 p-2 rounded-full hover-scale"
                style={{ background: 'rgba(255, 255, 255, 0.1)' }}
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('prev');
                }}
              >
                <ChevronLeft size={24} color="white" />
              </button>
              <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-60 p-2 rounded-full hover-scale"
                style={{ background: 'rgba(255, 255, 255, 0.1)' }}
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('next');
                }}
              >
                <ChevronRight size={24} color="white" />
              </button>
            </>
          )}

          {/* Image */}
          <div 
            className="max-w-4xl max-h-[80vh] overflow-hidden rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.url}
              alt={selectedImage.alt}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Image Counter */}
          <div 
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full text-white text-sm"
            style={{ background: 'rgba(0, 0, 0, 0.5)' }}
          >
            {currentIndex + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;