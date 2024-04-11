"use client";
import { useEffect, useState } from 'react';

const Preloader = () => {
  const [percentage, setPercentage] = useState(0);
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage(prevPercentage => {
        if (prevPercentage >= 100) {
          clearInterval(interval);
          setShowPreloader(false);
          // run your script here
          console.log('Loader is done loading!');
          return 100;
        }
        return prevPercentage + 1;
      });
    }, 50);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        background: '#32363f',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 999,
        opacity: showPreloader ? 1 : 0,
        transition: 'opacity 1s ease-out',
        pointerEvents: showPreloader ? 'auto' : 'none', // Modify pointer events
        height: '100vh',
      }}
    >
      <div
        style={{
          position: 'absolute',
          bottom: 20,
          right: 20,
          color: 'white',
          fontSize: 20,
        }}
      >
        <h1 className="font-mono text-9xl font-extrabold tracking-tighter sm:text-5xl xl:text-6xl/none p-8x hidden lg:block">
          <span style={{ color: 'white', fontSize: 200 }}>{percentage}%</span>
        </h1>
        <h1 className="font-mono text-6xl font-extrabold tracking-tighter sm:text-5xl xl:text-6xl/none p-8x lg:hidden">
          <span style={{ color: 'white', fontSize: 100 }}>{percentage}%</span>
        </h1>
      </div>
    </div>
  );
};

export default Preloader;
