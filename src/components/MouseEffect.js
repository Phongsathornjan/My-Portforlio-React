import React, { useEffect, useState } from "react";

export const MouseEffect = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div style={{ position: 'relative', height: '100vh', cursor: 'none' }}>
      {/* วงกลมเล็ก */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '16px', // w-4 เท่ากับ 1rem หรือ 16px
          height: '16px', // h-4 เท่ากับ 1rem หรือ 16px
          backgroundColor: 'white',
          borderRadius: '50%', // rounded-full
          pointerEvents: 'none',
          transition: 'transform 0.4s ease-out',
          transform: `translate(${position.x - 8}px, ${position.y - 8}px)`,
          zIndex: 60, // เพิ่ม z-index
        }}
      />
      {/* วงกลมใหญ่ */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '48px', // w-12 เท่ากับ 3rem หรือ 48px
          height: '48px', // h-12 เท่ากับ 3rem หรือ 48px
          backgroundColor: 'transparent',
          border: '1px solid white', // border-[1px]
          borderRadius: '50%', // rounded-full
          pointerEvents: 'none',
          transition: 'transform 0.7s ease-out',
          opacity: 0.75,
          transform: `translate(${position.x - 24}px, ${position.y - 24}px)`,
          zIndex: 60, // เพิ่ม z-index
        }}
      />
    </div>
  );
};
