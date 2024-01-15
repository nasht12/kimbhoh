"use client";    
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface StoryProps {
  stories: { imageUrl: string; text: string }[];
}

const Story: React.FC<StoryProps> = ({ stories }) => {
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const newActiveIndex = Math.min(
      Math.floor(scrollPosition / window.innerHeight),
      stories.length - 1
    );
    setActiveStoryIndex(newActiveIndex);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [stories]);

  return (
    <div className="relative w-full h-screen overflow-auto">
      {stories.map((story, index) => (
        <div key={index} className="h-screen relative">
          {index === activeStoryIndex && (
            <>
              <Image className="object-cover w-full h-full" src={story.imageUrl} alt="Story" layout="fill"/>
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <p className="text-white text-lg">{story.text}</p>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Story;