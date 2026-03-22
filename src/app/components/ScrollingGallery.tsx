import React from 'react';

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
  // Multiply images to ensure seamless infinite scroll
  const displayImages = [...images, ...images];

  return (
    <section className="py-12 bg-white overflow-hidden" style={{ overflow: 'hidden', maxWidth: '100vw' }}>
      <div className="container mx-auto px-4 mb-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Professional Work</h2>
        <div className="w-24 h-1 bg-yellow-400 mx-auto mt-4 rounded-full"></div>
      </div>
      
      <div className="relative flex overflow-x-hidden" style={{ overflow: 'hidden', width: '100%' }}>
        <div className="animate-marquee whitespace-nowrap flex py-4">
          {displayImages.map((src, index) => (
            <div
              key={index}
              className="mx-3 flex-shrink-0 rounded-xl overflow-hidden shadow-md border border-gray-100 transition-transform duration-300 hover:scale-105"
              style={{ width: '260px', height: '320px', minWidth: '260px' }}
            >
              <img 
                src={src} 
                alt={`Locksmith work ${index + 1}`} 
                style={{ width: '260px', height: '320px', objectFit: 'cover', display: 'block' }}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollingGallery;
