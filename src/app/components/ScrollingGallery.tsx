'use client';

import React, { useRef, useState, useEffect } from 'react';

const images = [
  "/sidbar/Picsart_26-03-15_19-25-44-905.jpg.jpeg",
  "/sidbar/Picsart_26-03-15_19-47-59-775.jpg.jpeg",
  "/sidbar/Picsart_26-03-15_21-18-21-741.jpg.jpeg",
  "/sidbar/Picsart_26-03-15_21-50-33-606.jpg.jpeg",
  "/sidbar/Picsart_26-03-15_22-06-40-648.jpg.jpeg",
  "/sidbar/Picsart_26-03-16_12-39-07-738.jpg.jpeg",
  "/sidbar/Picsart_26-03-16_13-02-27-417.jpg.jpeg",
  "/sidbar/Picsart_26-03-16_13-04-23-736.jpg.jpeg",
  "/sidbar/Picsart_26-03-18_16-50-14-403.jpg.jpeg",
];

const ScrollingGallery = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const displayImages = [...images, ...images];

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      if (scrollRef.current) {
        if (scrollRef.current.scrollLeft + scrollRef.current.clientWidth >= scrollRef.current.scrollWidth - 10) {
          scrollRef.current.scrollLeft = 0;
        } else {
          scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section className="gallery-section">
      <div className="gallery-header">
        <h2 className="gallery-title">Our Professional Work</h2>
        <div className="gallery-divider"></div>
      </div>
      
      <div 
        className="gallery-container group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <button 
          onClick={scrollLeft}
          className="gallery-nav-btn gallery-nav-left"
          aria-label="Scroll left"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div ref={scrollRef} className="gallery-scroll-area">
          {displayImages.map((src, index) => (
            <div key={index} className="gallery-item shadow-md">
              <img 
                src={src} 
                alt={`Locksmith work ${index + 1}`} 
                className="gallery-image"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <button 
          onClick={scrollRight}
          className="gallery-nav-btn gallery-nav-right"
          aria-label="Scroll right"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .gallery-section {
          padding: 48px 0;
          background-color: transparent;
          overflow: hidden;
          position: relative;
        }
        .gallery-header {
          text-align: center;
          margin-bottom: 32px;
          padding: 0 16px;
        }
        .gallery-title {
          font-size: 32px;
          font-weight: 700;
          font-family: inherit; /* Should inherit Elementor font */
          color: #ffffff;
          margin: 0;
        }
        .gallery-divider {
          width: 96px;
          height: 4px;
          background-color: #FBBF24;
          margin: 16px auto 0;
          border-radius: 9999px;
        }
        .gallery-container {
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 16px;
        }
        .gallery-scroll-area {
          display: flex;
          overflow-x: auto;
          gap: 24px;
          padding: 16px 0;
          scroll-behavior: smooth;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .gallery-scroll-area::-webkit-scrollbar {
          display: none;
        }
        .gallery-item {
          flex-shrink: 0;
          width: 260px;
          height: 320px;
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid #f3f4f6;
          transition: transform 0.3s ease;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
        .gallery-item:hover {
          transform: scale(1.05);
        }
        .gallery-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .gallery-nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          background-color: rgba(255, 255, 255, 0.9);
          border: none;
          color: #333;
          padding: 12px;
          border-radius: 50%;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .gallery-nav-btn:hover {
          background-color: #FBBF24;
          color: #000;
        }
        .gallery-nav-left {
          left: 8px;
        }
        .gallery-nav-right {
          right: 8px;
        }
        @media (min-width: 768px) {
          .gallery-title { font-size: 36px; }
          .gallery-nav-btn { opacity: 0; }
          .gallery-container:hover .gallery-nav-btn { opacity: 1; }
          .gallery-nav-left { left: -16px; }
          .gallery-nav-right { right: -16px; }
        }
      `}} />
    </section>
  );
};

export default ScrollingGallery;
