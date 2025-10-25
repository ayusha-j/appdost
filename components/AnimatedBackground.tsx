"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface BlobShape {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  opacity: number;
  morphing: boolean;
  path: string;
}

// Generate organic blob path
const generateBlobPath = (size: number, complexity: number = 0.5): string => {
  const points = 8;
  const radius = size / 2;
  const centerX = size / 2;
  const centerY = size / 2;
  
  let path = `M ${centerX + radius * Math.cos(0)} ${centerY + radius * Math.sin(0)}`;
  
  for (let i = 1; i <= points; i++) {
    const angle = (i / points) * 2 * Math.PI;
    const variation = 1 + (Math.random() - 0.5) * complexity;
    const x = centerX + radius * Math.cos(angle) * variation;
    const y = centerY + radius * Math.sin(angle) * variation;
    
    if (i === 1) {
      path += ` Q ${x} ${y}`;
    } else if (i === points) {
      path += ` Q ${x} ${y} ${centerX + radius * Math.cos(0)} ${centerY + radius * Math.sin(0)}`;
    } else {
      path += ` Q ${x} ${y}`;
    }
  }
  
  return path;
};

export default function AnimatedBackground() {
  const [blobs, setBlobs] = useState<BlobShape[]>([]);

  // Generate blob shapes
  useEffect(() => {
    const generateBlobs = () => {
      const newBlobs: BlobShape[] = [];
      const colors = [
        "rgba(102, 126, 234, 0.12)", // indigo - darker
        "rgba(118, 75, 162, 0.12)", // purple - darker
        "rgba(240, 147, 251, 0.12)", // pink - darker
        "rgba(79, 172, 254, 0.12)", // blue - darker
        "rgba(99, 102, 241, 0.12)", // indigo-500 - darker
        "rgba(139, 92, 246, 0.12)", // violet-500 - darker
      ];

      const blobCount = window.innerWidth < 768 ? 8 : 15;
      for (let i = 0; i < blobCount; i++) {
        const size = Math.random() * 300 + 150;
        newBlobs.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: size,
          color: colors[Math.floor(Math.random() * colors.length)],
          opacity: Math.random() * 0.5 + 0.15,
          morphing: Math.random() > 0.5,
          path: generateBlobPath(size),
        });
      }
      setBlobs(newBlobs);
    };

    generateBlobs();

    const handleResize = () => {
      generateBlobs();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Animate blobs with slower, more efficient movement
  useEffect(() => {
    let animationId: number;
    let lastTime = 0;
    
    const animateBlobs = (currentTime: number) => {
      if (currentTime - lastTime > 100) { // Update every 100ms instead of every frame
        setBlobs((prev) =>
          prev.map((blob) => {
            // Calculate new position with random movement
            let newX = blob.x + (Math.random() - 0.5) * 0.3;
            let newY = blob.y + (Math.random() - 0.5) * 0.3;
            
            // Handle boundary conditions
            newX = newX > window.innerWidth + 100 ? -100 : newX < -100 ? window.innerWidth + 100 : newX;
            newY = newY > window.innerHeight + 100 ? -100 : newY < -100 ? window.innerHeight + 100 : newY;
            
            return {
              ...blob,
              x: newX,
              y: newY,
            }
          })
        );
        lastTime = currentTime;
      }
      animationId = requestAnimationFrame(animateBlobs);
    };

    animationId = requestAnimationFrame(animateBlobs);
    
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "linear-gradient(-45deg, rgba(102, 126, 234, 0.06), rgba(118, 75, 162, 0.06), rgba(240, 147, 251, 0.06), rgba(79, 172, 254, 0.06))",
            "linear-gradient(-45deg, rgba(79, 172, 254, 0.06), rgba(102, 126, 234, 0.06), rgba(118, 75, 162, 0.06), rgba(240, 147, 251, 0.06))",
            "linear-gradient(-45deg, rgba(240, 147, 251, 0.06), rgba(79, 172, 254, 0.06), rgba(102, 126, 234, 0.06), rgba(118, 75, 162, 0.06))",
            "linear-gradient(-45deg, rgba(118, 75, 162, 0.06), rgba(240, 147, 251, 0.06), rgba(79, 172, 254, 0.06), rgba(102, 126, 234, 0.06))",
          ],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Animated blob shapes */}
      {blobs.map((blob) => (
        <motion.div
          key={blob.id}
          className="absolute"
          style={{
            left: blob.x,
            top: blob.y,
            width: blob.size,
            height: blob.size,
          }}
          animate={{
            scale: [1, 1.1, 0.9, 1],
            rotate: [0, 90, 180, 270, 360],
            opacity: [blob.opacity, blob.opacity * 0.5, blob.opacity],
          }}
          transition={{
            duration: 12 + Math.random() * 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 4,
          }}
        >
          <motion.svg
            width="100%"
            height="100%"
            viewBox={`0 0 ${blob.size} ${blob.size}`}
            style={{
              filter: "blur(1px)",
            }}
            animate={blob.morphing ? {
              d: [
                generateBlobPath(blob.size, 0.4),
                generateBlobPath(blob.size, 0.6),
                generateBlobPath(blob.size, 0.4),
              ]
            } : {}}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3,
            }}
          >
            <motion.path
              d={blob.path}
              fill={blob.color}
              animate={blob.morphing ? {
                d: [
                  generateBlobPath(blob.size, 0.4),
                  generateBlobPath(blob.size, 0.6),
                  generateBlobPath(blob.size, 0.4),
                ]
              } : {}}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 3,
              }}
            />
          </motion.svg>
        </motion.div>
      ))}

      {/* Large floating orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(102, 126, 234, 0.10) 0%, transparent 70%)",
          filter: "blur(2px)",
        }}
        animate={{
          x: [0, 150, 0],
          y: [0, -80, 0],
          scale: [1, 1.3, 0.8, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-3/4 right-1/4 w-64 h-64 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(118, 75, 162, 0.10) 0%, transparent 70%)",
          filter: "blur(2px)",
        }}
        animate={{
          x: [0, -120, 0],
          y: [0, 100, 0],
          scale: [1, 0.7, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />

      <motion.div
        className="absolute top-1/2 right-1/3 w-48 h-48 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(240, 147, 251, 0.10) 0%, transparent 70%)",
          filter: "blur(2px)",
        }}
        animate={{
          x: [0, 80, 0],
          y: [0, -60, 0],
          scale: [1, 1.4, 0.6, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 6,
        }}
      />

      {/* Subtle noise texture */}
      <motion.div
        className="absolute inset-0 opacity-3"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
        animate={{
          opacity: [0.01, 0.03, 0.01],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}