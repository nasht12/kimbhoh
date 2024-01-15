"use client";
import { HomeNews } from "@/components/component/home-news";
import ImageScroll from "@/components/component/image-scroll";
import ImageWithText from "@/components/component/image-text";
import Story from "@/components/component/story";
import {
  ClerkProvider,
  OrganizationSwitcher,
  SignedIn,
  UserButton,
} from "@clerk/nextjs";
import { useEffect } from "react";

const stories = [
  {
    imageUrl: 'https://images.unsplash.com/photo-1575425186775-b8de9a427e67',
    text: 'This is the first story.',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1630053905273-2dd2f41f0127',
    text: 'This is the second story.',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee',
    text: 'This is the third story.',
  },
];

const images = [
  'https://images.unsplash.com/photo-1575425186775-b8de9a427e67',
  'https://images.unsplash.com/photo-1630053905273-2dd2f41f0127',
  'https://images.unsplash.com/photo-1583337130417-3346a1be7dee',
];

export default function Home() {
  const handleScroll = (event: React.UIEvent) => {
    console.log('User scrolled:', (event.target as HTMLElement).scrollTop);
  };
  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-white" onScroll={handleScroll}>
      {/* <HomeNews /> */}
      <ImageWithText
        imageUrl="https://images.unsplash.com/photo-1568315056770-f4a63027dcd3"
        overlayText="Hello"
      />
      {/* <Story stories={stories} />{" "} */}
      {/* <ImageScroll images={images}/> */}
    </div>
  );
}
