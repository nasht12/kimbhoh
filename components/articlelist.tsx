"use client";
import React from 'react'
import { ComponentProps } from "react"
import { ScrollArea } from './ui/scroll-area';
import { Badge } from './ui/badge';
import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';

export default function Articlelist() {
    const stories = useQuery(api.stories.get);

  return (
    <ScrollArea className="h-screen">
      <div className="flex flex-col gap-2 p-4 pt-0">
        {stories?.map((item) => (
          <Link
            key={item.id}
            href={`/?storyId=${item._id}`}
            className={cn(
              "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent hover:no-underline text-current"
            )}
          >
            <div className="flex justify-between w-full">
              <div className='flex flex-col gap-2 w-2/3'>
                <div className="flex w-full flex-col gap-1">
                  <div className="flex items-center">
                    <div className="flex items-center gap-2">
                      <div className="font-semibold">{item.title}</div>
                    </div>
                  </div>
                  <div className="text-xs">{item.published_date}</div>
                  <div className="text-xs font-medium">{item.subject}</div>
                </div>
                <div className="line-clamp-2 text-xs text-muted-foreground">
                  {item.summary.substring(0, 300)}
                </div>
                {item.category.length ? (
                  <div className="flex items-center gap-2">
                    {item.category.map((label) => (
                      <Badge
                        key={label}
                        variant={getBadgeVariantFromLabel(label)}
                      >
                        {label}
                      </Badge>
                    ))}
                  </div>
                ) : null}
              </div>
              <div className="m-auto">
                <Image
                  width={90}
                  height={160}
                  src={item.url}
                  alt={item.title}
                  className="object-cover"
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </ScrollArea>
  );
}

function getBadgeVariantFromLabel(
    label: string
  ): ComponentProps<typeof Badge>["variant"] {
    if (["work"].includes(label.toLowerCase())) {
      return "default"
    }
  
    if (["personal"].includes(label.toLowerCase())) {
      return "outline"
    }
  
    return "secondary"
  }
