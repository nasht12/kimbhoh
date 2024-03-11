"use client";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import Image from "next/image";
import Link from "next/link";

export default function Stories() {
    const stories = useQuery(api.stories.get);
    return (
      <main className="flex min-h-screen flex-wrap items-center justify-between p-2 gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {stories?.map(({ _id, title, url }) => (
          <Link
            key={_id}
            href={`/?storyId=${_id}`}
            as={`/s/${_id}`}
            className="after:content group relative mb-5 block w-full after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
          >
            <div className="w-full h-64 relative">
              <Image
                alt={title}
                className="absolute top-0 left-0 w-full h-full rounded-lg object-cover brightness-90 transition will-change-auto group-hover:brightness-110"
                style={{ transform: "translate3d(0, 0, 0)" }}
                src={url}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="absolute bottom-0 bg-black bg-opacity-50 text-white p-2">
              {title}
            </div>
          </Link>
        ))}
      </main>
    );
  }