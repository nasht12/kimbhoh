"use client"
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function ScrollCard() {
  const stories = useQuery(api.stories.get);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ container: ref });

  return (
    <div className="flex pt-24 items-center h-full">
      <div className="hidden sm:block">
        <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
          <motion.circle
            cx="50"
            cy="50"
            r="30"
            pathLength="1"
            className="indicator"
            style={{ pathLength: scrollYProgress }}
          />
        </svg>
      </div>
      <ul
        ref={ref}
        className="flex-col list-none h-[600px] overflow-y-scroll bg-transparent py-5 flex-none w-4/5 m-auto bg-red-100 no-underline"
      >
        {stories?.map(({ _id, title, url, summary }) => (
          <Link
            key={_id}
            href={`/?storyId=${_id}`}
            as={`/s/${_id}`}
            className="no-underline after:content group relative mb-5 block w-full after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
          >
            <Card className="flex justify-end md:flex w-5/6 h-[160px] bg-white my-5">
              <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{summary}</CardDescription>
              </CardHeader>
              <CardContent className="fixed w-64 h-40">
                <Image
                  alt={title}
                  className="w-full h-full rounded-lg object-cover brightness-90 transition will-change-auto group-hover:brightness-110"
                  src={url}
                  width={300}
                  height={300}
                  objectFit="cover"
                />
              </CardContent>
            </Card>
          </Link>
        ))}
      </ul>
    </div>
  );
}