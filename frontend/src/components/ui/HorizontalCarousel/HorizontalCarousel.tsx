// import { useRef } from "react";
// import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
// import type { PanInfo } from "framer-motion";
// import "../../css/carousel.css";

// interface HorizontalCarouselProps {
//   children: React.ReactNode[];
//   gap?: number;
//   height?: string | number;
// }

// export default function HorizontalCarousel({
//   children,
//   gap = 40,
//   height = "100vh",
// }: HorizontalCarouselProps) {

//   const x = useMotionValue(0);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const itemCount = children.length;

//   // Width will be calculated dynamically
//   const handleDragEnd = (_: any, info: PanInfo) => {
//     const container = containerRef.current;
//     if (!container) return;

//     const width = container.offsetWidth;
//     const currentX = x.get();

//     // Snap index
//     let index = Math.round(-currentX / width);

//     // Clamp
//     index = Math.max(0, Math.min(itemCount - 1, index));

//     x.stop();
//     x.set(-index * width);
//   };

//   return (
//     <div ref={containerRef} className="carousel-outer" style={{ height }}>
//       <motion.div
//         className="carousel-inner"
//         drag="x"
//         dragElastic={0.1}
//         dragConstraints={{ left: -(itemCount - 1) * 1000, right: 0 }}
//         onDragEnd={handleDragEnd}
//         style={{ x, gap }}
//       >
//         {children.map((child, index) => (
//           <motion.div
//             key={index}
//             className="carousel-slide"
//             style={{
//               minWidth: "100vw",
//               height: "100%",
//             }}
//           >
//             {child}
//           </motion.div>
//         ))}
//       </motion.div>
//     </div>
//   );
// }


import React, { useRef, useState, useEffect } from "react";
import type {ReactNode} from "react";
import { motion, useMotionValue } from "framer-motion";
import type { PanInfo } from "framer-motion";
import "../css/carousel.css";

interface HorizontalCarouselProps {
  children: ReactNode[]; // array of slides
  gap?: number;
  height?: string | number;
  // optional: start index, loop, etc (can be extended later)
}

export default function HorizontalCarousel({
  children,
  gap = 0,
  height = "100vh",
}: HorizontalCarouselProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);
  const x = useMotionValue(0);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const slides = React.Children.toArray(children);
  const count = slides.length;

  // measure width and update on resize
  useEffect(() => {
    const measure = () => {
      if (!containerRef.current) return;
      setContainerWidth(containerRef.current.clientWidth);
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (containerRef.current) ro.observe(containerRef.current);
    window.addEventListener("orientationchange", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("orientationchange", measure);
    };
  }, []);

  // compute max drag (negative)
  const maxDrag = -(Math.max(0, count - 1) * containerWidth);

  // snap on drag end
  const handleDragEnd = (_: any, info: PanInfo) => {
    const currentX = x.get();
    // index nearest
    let index = Math.round(-currentX / containerWidth || 0);
    index = Math.max(0, Math.min(count - 1, index));
    // animate to snapped index
    x.stop();
    x.set(-index * containerWidth);
  };

  // ensure initial position when width changes (prevent wrong offset)
  useEffect(() => {
    // clamp current x if containerWidth changes
    const cur = x.get();
    const min = Math.min(0, maxDrag);
    if (cur < min) x.set(min);
    if (cur > 0) x.set(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerWidth, count]);

  return (
    <div
      ref={containerRef}
      className="hg-carousel-outer"
      style={{ height, width: "100vw" }}
    >
      <motion.div
        ref={innerRef}
        className="hg-carousel-inner"
        drag="x"
        dragElastic={0.12}
        dragConstraints={{ left: maxDrag, right: 0 }}
        onDragEnd={handleDragEnd}
        style={{ x, gap }}
      >
        {slides.map((slide, i) => (
          <div
            className="hg-carousel-slide"
            key={i}
            style={{
              minWidth: containerWidth || "100vw", // ensure width
              maxWidth: containerWidth || "100vw",
              height: "100%",
            }}
          >
            {slide}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
