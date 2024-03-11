"use client";

import React from 'react'
import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import { EmblaOptionsType } from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'

type PropType = {
  slides?: any[]
  options?: EmblaOptionsType
}

const OPTIONS: EmblaOptionsType = { loop: true }

const EmblaCarousel: React.FC<PropType> = () => {
  const stories = useQuery(api.stories.get);
  const imageUrls = stories?.map(story => story.url);
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [Autoplay()])


  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {stories?.map((story, index) => (
            <div className="embla__slide" key={index}>
              <div className="flex">
                <div className='w-4/5'>
                  <Image
                    width={200}
                    height={100}
                    src={story.url}
                    alt={`Slide ${index + 1}`}
                  />
                </div>
                <div className="ml-0">{story.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EmblaCarousel
