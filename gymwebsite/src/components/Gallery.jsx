// src/components/Gallery.jsx
import { useState } from 'react';
import React from 'react';

export default function Gallery() {
  return (
    <div id="gallery" className="relative w-[100vw] h-[100vh] overflow-hidden">
      {/* Main Background – FULL WIDTH, NO RADIUS, NO PADDING */}
      <div
        className="w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(Frame5.png)` }}
      />
    </div>
  );
}