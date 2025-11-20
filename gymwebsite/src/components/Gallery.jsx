// src/components/Gallery.jsx
import { useState } from 'react';
import React from 'react';

export default function Gallery() {
  const [mainImage, setMainImage] = useState(
    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  );

  const thumbnails = [
    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1571019614471-6a33b6995032?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1571019614471-6a33b6995032?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  ];
  

  return (
    <div className="relative w-[100vw] h-[100vh] overflow-hidden">
      {/* Main Background – FULL WIDTH, NO RADIUS, NO PADDING */}
      <div
        className="w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${mainImage})` }}
      />

      {/* Thumbnails Row – Bottom Overlay */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 p-3 sm:p-4 bg-gradient-to-t from-black/70 to-transparent">
        {thumbnails.map((thumb, index) => (
          <button
            key={index}
            onClick={() => setMainImage(thumb)}
            className="w-16 h-12 sm:w-20 sm:h-16 rounded-sm overflow-hidden border-2 border-white/90 hover:border-cyan-400 transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-1 focus:ring-cyan-300"
            aria-label={`Select gym image ${index + 1}`}
          >
            <img
              src={thumb}
              alt=""
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </button>
        ))}
      </div>
    </div>
  );
}