"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface ImageScrollProps {
  images: string[];
}

const ImageScroll: React.FC<ImageScrollProps> = ({ images }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const newActiveIndex = Math.min(
      Math.floor(scrollPosition / window.innerHeight),
      images.length - 1
    );
    setActiveImageIndex(newActiveIndex);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [images]);

  return (
    <div className="h-screen relative overflow-auto">
      <Image className="object-cover w-full h-full" src={images[activeImageIndex]} alt={`Image ${activeImageIndex}`} width={32} height={32}/>
    </div>
  );
};

export default ImageScroll;