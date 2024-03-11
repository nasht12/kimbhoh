"use client";
import React from 'react'
import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import EmblaCarousel from './embla-carousel';
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'

const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function Banner() {
    const stories = useQuery(api.stories.get);
    const imageUrls = stories?.map(story => story.url);
    const [emblaRef] = useEmblaCarousel()


  return (
    <div className="w-full h-1/2 border rounded-md">
      <EmblaCarousel slides={imageUrls} options={OPTIONS} />
    </div>
  );
}
