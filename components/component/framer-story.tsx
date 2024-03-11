import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ id }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section className="h-screen w-screen flex justify-center items-center relative">
      <div
        ref={ref}
        className="w-64 h-96 relative max-h-90 m-5 bg-white overflow-hidden"
      >
        <Image
          src={`https://images.unsplash.com/photo-1568315056770-f4a63027dcd3`}
          alt="A London skyscraper"
          className="absolute top-0 left-0 right-0 bottom-0 w-full h-full"
          width={32}
          height={32}
        />
      </div>
      <motion.h2
        style={{ y }}
        className="absolute left-1/2 ml-32 text-5xl font-bold leading-tight"
      >{`#00${id}`}</motion.h2>
    </section>
  );
}

export default function FramerStory() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="bg-green-100 text-white">
      {[1, 2, 3, 4, 5].map((image) => (
        <Image id={image} key={image} />
      ))}
      <motion.div className="fixed left-0 right-0 h-1 bg-white bottom-24" style={{ scaleX }} />
    </div>
  );
}