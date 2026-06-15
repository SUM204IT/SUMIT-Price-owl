import React from "react";
import { motion } from "framer-motion";

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden bg-black">

      {/* Main Purple Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="
          absolute
          left-1/2
          top-[35%]
          -translate-x-1/2
          -translate-y-1/2
          w-[900px]
          h-[900px]
          rounded-full
          bg-violet-500/20
          blur-[180px]
        "
      />

      {/* Inner Glow */}
      <div
        className="
          absolute
          left-1/2
          top-[60%]
          -translate-x-1/2
          -translate-y-1/2
          w-[500px]
          h-[500px]
          rounded-full
          bg-violet-400/25
          blur-[80px]
        "
      />

      {/* OUTER CIRCLE */}
      <div
        className="absolute left-1/2 -translate-x-1/2"
        style={{
          top: "280px",
          width: "1800px",
          height: "1800px",
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      />

      {/* MIDDLE CIRCLE */}
      <div
        className="absolute left-1/2 -translate-x-1/2"
        style={{
          top: "420px",
          width: "1800px",
          height: "1800px",
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.06)",
        }}
      />

      {/* INNER CIRCLE */}
      <div
        className="absolute left-1/2 -translate-x-1/2"
        style={{
          top: "560px",
          width: "1800px",
          height: "1800px",
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.05)",
        }}
      />

      {/* Floating Particles */}
      {[...Array(35)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            left: `${40 + Math.random() * 20}%`,
            top: `${25 + Math.random() * 25}%`,
          }}
          animate={{
            y: [-10, 10, -10],
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default HeroBackground;