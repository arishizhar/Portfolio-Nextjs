"use client";

// import { useState, useEffect } from "react";

// export default function Spotlight({ children, className = "" }) {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isMounted, setIsMounted] = useState(false);

//   useEffect(() => {
//     setIsMounted(true);

//     const handleMouseMove = (event) => {
//       setMousePosition({
//         x: event.clientX,
//         y: event.clientY,
//       });
//     };

//     window.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   // Don't render the effect on the server
//   if (!isMounted) {
//     return (
//       <div className={`relative overflow-hidden bg-[#0b0f10] ${className}`}>
//         {children}
//       </div>
//     );
//   }

//   return (
//     <div className={`relative overflow-hidden bg-[#0b0f10] ${className}`}>
//       {/* Spotlight effect */}
//       <div
//         className="pointer-events-none absolute h-80 w-80 rounded-full bg-sky-400/25 blur-3xl transition-transform duration-200 ease-out"
//         style={{
//           transform: `translate(${mousePosition.x - 160}px, ${
//             mousePosition.y - 160
//           }px)`,
//         }}
//       />

//       {/* Content */}
//       {children}
//     </div>
//   );
// }

// "use client";
// import { useState, useEffect } from "react";

// export default function Spotlight({ children, className = "" }) {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isMounted, setIsMounted] = useState(false);

//   useEffect(() => {
//     setIsMounted(true);
//     const handleMouseMove = (event) => {
//       setMousePosition({
//         x: event.clientX,
//         y: event.clientY,
//       });
//     };
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   // Don't render the effect on the server
//   if (!isMounted) {
//     return (
//       <div className={`relative overflow-hidden bg-[#0b0f10] ${className}`}>
//         {children}
//       </div>
//     );
//   }

//   return (
//     <div className={`relative overflow-hidden bg-[#0b0f10] ${className}`}>
//       {/* Improved spotlight effect with radial gradient */}
//       <div
//         className="pointer-events-none absolute h-[600px] w-[600px] rounded-full transition-transform duration-300 ease-out"
//         style={{
//           background:
//             "radial-gradient(circle, rgba(56, 189, 248, 0.25) 0%, rgba(56, 189, 248, 0.15) 25%, rgba(56, 189, 248, 0.05) 50%, rgba(56, 189, 248, 0) 70%)",
//           transform: `translate(${mousePosition.x - 300}px, ${
//             mousePosition.y - 300
//           }px)`,
//           filter: "blur(40px)",
//         }}
//       />

//       {/* Content */}
//       {children}
//     </div>
//   );
// }

// "use client";
// import { useState, useEffect } from "react";

// export default function Spotlight({ children, className = "" }) {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isMounted, setIsMounted] = useState(false);

//   useEffect(() => {
//     setIsMounted(true);
//     const handleMouseMove = (event) => {
//       setMousePosition({
//         x: event.clientX,
//         y: event.clientY,
//       });
//     };
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   // Don't render the effect on the server
//   if (!isMounted) {
//     return (
//       <div className={`relative overflow-hidden bg-[#0a192f] ${className}`}>
//         {children}
//       </div>
//     );
//   }

//   return (
//     <div className={`relative overflow-hidden bg-[#0a192f] ${className}`}>
//       {/* Subtle primary spotlight */}
//       <div
//         className="pointer-events-none absolute h-96 w-96 rounded-full opacity-20 transition-transform duration-300 ease-out"
//         style={{
//           background:
//             "radial-gradient(circle, rgba(100, 255, 218, 0.8) 0%, rgba(100, 255, 218, 0) 70%)",
//           transform: `translate(${mousePosition.x - 192}px, ${
//             mousePosition.y - 192
//           }px)`,
//         }}
//       />

//       {/* Larger, more diffused secondary spotlight */}
//       <div
//         className="pointer-events-none absolute h-[800px] w-[800px] rounded-full opacity-10 transition-transform duration-500 ease-out"
//         style={{
//           background:
//             "radial-gradient(circle, rgba(100, 255, 218, 0.5) 0%, rgba(100, 255, 218, 0) 60%)",
//           transform: `translate(${mousePosition.x - 400}px, ${
//             mousePosition.y - 400
//           }px)`,
//         }}
//       />

//       {/* Content */}
//       {children}
//     </div>
//   );
// }

// import { useState, useEffect, useRef } from 'react';

// export default function Spotlight({ children, className = '', spotlightSize = 300 }) {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [isHovering, setIsHovering] = useState(false);
//   const containerRef = useRef(null);

//   const handleMouseMove = (e) => {
//     if (containerRef.current) {
//       const rect = containerRef.current.getBoundingClientRect();
//       setPosition({
//         x: e.clientX - rect.left,
//         y: e.clientY - rect.top,
//       });
//     }
//   };

//   const handleMouseEnter = () => {
//     setIsHovering(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovering(false);
//   };

//   return (
//     <div
//       ref={containerRef}
//       onMouseMove={handleMouseMove}
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//       className={`relative overflow-hidden ${className}`}
//       style={{ isolation: 'isolate' }}
//     >
//       <div
//         className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
//         style={{
//           opacity: isHovering ? 1 : 0,
//           background: `radial-gradient(circle ${spotlightSize}px at ${position.x}px ${position.y}px, rgba(255, 255, 255, 0.2), transparent 80%)`
//         }}
//       />
//       {children}
//     </div>
//   );
// }

// import { useState, useEffect, useRef } from "react";

// export default function Spotlight({
//   children,
//   className = "",
//   spotlightSize = 400,
//   spotlightColor = "rgba(14, 165, 233, 0.15)", // Sky-400 with low opacity by default
//   backgroundColor = "#0b0f10", // Jet color
//   alwaysActive = false,
// }) {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [isHovering, setIsHovering] = useState(alwaysActive);
//   const containerRef = useRef(null);

//   // Add a static glow effect if alwaysActive is true
//   useEffect(() => {
//     if (alwaysActive && containerRef.current) {
//       const rect = containerRef.current.getBoundingClientRect();
//       setPosition({
//         x: rect.width / 2,
//         y: rect.height / 2,
//       });
//     }
//   }, [alwaysActive]);

//   const handleMouseMove = (e) => {
//     if (containerRef.current) {
//       const rect = containerRef.current.getBoundingClientRect();
//       setPosition({
//         x: e.clientX - rect.left,
//         y: e.clientY - rect.top,
//       });
//     }
//   };

//   const handleMouseEnter = () => {
//     setIsHovering(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovering(alwaysActive);
//   };

//   return (
//     <div
//       ref={containerRef}
//       onMouseMove={handleMouseMove}
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//       className={`relative overflow-hidden ${className}`}
//       style={{
//         isolation: "isolate",
//         backgroundColor: backgroundColor,
//       }}
//     >
//       {/* Dynamic spotlight that follows cursor */}
//       <div
//         className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
//         style={{
//           opacity: isHovering ? 1 : 0,
//           background: `radial-gradient(circle ${spotlightSize}px at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`,
//         }}
//       />

//       <div className="relative z-10">{children}</div>
//     </div>
//   );
// }

//looks great on chrome
// import { useState, useRef } from "react";

// export default function Spotlight({ children, className = "" }) {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [isHovering, setIsHovering] = useState(false);
//   const containerRef = useRef(null);

//   const handleMouseMove = (e) => {
//     if (containerRef.current) {
//       const rect = containerRef.current.getBoundingClientRect();
//       setPosition({
//         x: e.clientX - rect.left,
//         y: e.clientY - rect.top,
//       });
//     }
//   };

//   const handleMouseEnter = () => {
//     setIsHovering(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovering(false);
//   };

//   return (
//     <div
//       ref={containerRef}
//       onMouseMove={handleMouseMove}
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//       className={`relative overflow-hidden bg-[#0b0f10] ${className}`}
//       style={{ isolation: "isolate" }}
//     >
//       {/* Dynamic spotlight that follows cursor */}
//       <div
//         className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
//         style={{
//           opacity: isHovering ? 1 : 0,
//           background: `radial-gradient(circle 600px at ${position.x}px ${position.y}px, rgba(14, 165, 233, 0.15), transparent 80%)`,
//         }}
//       />

//       <div className="relative z-10">{children}</div>
//     </div>
//   );
// }

//performs great
// import { useState, useRef, useEffect } from "react";

// export default function Spotlight({
//   children,
//   className = "",
//   spotlightSize = 600,
// }) {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [isHovering, setIsHovering] = useState(false);
//   const containerRef = useRef(null);
//   const spotlightRef = useRef(null);

//   // Throttle mouse move updates for better performance
//   const throttleRef = useRef(false);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       if (throttleRef.current) return;

//       throttleRef.current = true;
//       requestAnimationFrame(() => {
//         if (containerRef.current && spotlightRef.current) {
//           const rect = containerRef.current.getBoundingClientRect();
//           const x = e.clientX - rect.left;
//           const y = e.clientY - rect.top;

//           // Use transform instead of changing the gradient itself
//           spotlightRef.current.style.transform = `translate(${x}px, ${y}px)`;
//         }
//         throttleRef.current = false;
//       });
//     };

//     const handleMouseEnter = () => setIsHovering(true);
//     const handleMouseLeave = () => setIsHovering(false);

//     const container = containerRef.current;
//     if (container) {
//       container.addEventListener("mousemove", handleMouseMove, {
//         passive: true,
//       });
//       container.addEventListener("mouseenter", handleMouseEnter);
//       container.addEventListener("mouseleave", handleMouseLeave);
//     }

//     return () => {
//       if (container) {
//         container.removeEventListener("mousemove", handleMouseMove);
//         container.removeEventListener("mouseenter", handleMouseEnter);
//         container.removeEventListener("mouseleave", handleMouseLeave);
//       }
//     };
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className={`relative overflow-hidden bg-[#0b0f10] ${className}`}
//       style={{
//         isolation: "isolate",
//         willChange: "transform", // Hardware acceleration hint
//       }}
//     >
//       {/* Static spotlight element that gets moved with transform */}
//       <div
//         ref={spotlightRef}
//         className="pointer-events-none absolute z-10 transition-opacity duration-300"
//         style={{
//           opacity: isHovering ? 1 : 0,
//           width: `${spotlightSize * 2}px`,
//           height: `${spotlightSize * 2}px`,
//           borderRadius: "50%",
//           background:
//             "radial-gradient(circle, rgba(14, 165, 233, 0.15) 0%, transparent 70%)",
//           transform: "translate(0, 0)",
//           left: `-${spotlightSize}px`,
//           top: `-${spotlightSize}px`,
//           willChange: "transform, opacity", // Hardware acceleration hint
//         }}
//       />
//       <div className="relative z-10">{children}</div>
//     </div>
//   );
// }

// works great and seems to be the best of bothz
import { useState, useRef, useEffect } from "react";

export default function Spotlight({
  children,
  className = "",
  spotlightSize = 600,
}) {
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef(null);
  const spotlightRef = useRef(null);
  const throttleRef = useRef(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (throttleRef.current) return;

      throttleRef.current = true;
      requestAnimationFrame(() => {
        if (containerRef.current && spotlightRef.current) {
          const rect = containerRef.current.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          spotlightRef.current.style.transform = `translate(${x}px, ${y}px)`;
        }
        throttleRef.current = false;
      });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove, {
        passive: true,
      });
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden bg-[#0b0f10] ${className}`}
      style={{ isolation: "isolate", willChange: "transform" }}
    >
      {/* Blurry, smooth, performant spotlight */}
      <div
        ref={spotlightRef}
        className="pointer-events-none absolute z-10 transition-opacity duration-300"
        style={{
          opacity: isHovering ? 1 : 0,
          width: `${spotlightSize * 2}px`,
          height: `${spotlightSize * 2}px`,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(14, 165, 233, 0.25) 0%, transparent 80%)",
          filter: "blur(80px)",
          transform: "translate(0, 0)",
          left: `-${spotlightSize}px`,
          top: `-${spotlightSize}px`,
          willChange: "transform, opacity",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
