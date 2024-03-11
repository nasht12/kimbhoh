import React from 'react';
import Image from 'next/image';

interface ImageWithTextProps {
  imageUrl: string;
  overlayText: string;
}

const ImageWithText: React.FC<ImageWithTextProps> = ({ imageUrl, overlayText }) => {
  return (
    <div className="relative w-full h-screen sm:h-auto sm:min-h-screen">
      <Image className="object-contain" src={imageUrl} alt="Background" layout="fill"/>
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <p className="text-white text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">{overlayText}</p>
      </div>
    </div>
  );
};

export default ImageWithText;