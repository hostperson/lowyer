import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 2;
      });
    }, 30);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="loading-screen">
      {/* Background pattern */}
      <div className="loading-bg-pattern" />

      {/* Scale animation */}
      <div className="scale-container">
        <svg
          viewBox="0 0 200 200"
          className="scale-svg"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Pillar base */}
          <rect x="90" y="170" width="20" height="10" rx="2" className="scale-base" />
          <rect x="80" y="178" width="40" height="6" rx="3" className="scale-base" />

          {/* Central pillar */}
          <rect x="97" y="70" width="6" height="100" className="scale-pillar" />

          {/* Top ornament */}
          <circle cx="100" cy="65" r="8" className="scale-ornament" />
          <circle cx="100" cy="65" r="4" className="scale-ornament-inner" />

          {/* Balance beam */}
          <g className="scale-beam">
            <rect x="30" y="62" width="140" height="4" rx="2" className="scale-arm" />

            {/* Left chain */}
            <line x1="45" y1="66" x2="45" y2="100" className="scale-chain" />
            <line x1="35" y1="66" x2="35" y2="95" className="scale-chain" />
            <line x1="55" y1="66" x2="55" y2="95" className="scale-chain" />

            {/* Left plate */}
            <g className="scale-left-plate">
              <ellipse cx="45" cy="105" rx="28" ry="6" className="scale-plate" />
              <ellipse cx="45" cy="103" rx="25" ry="4" className="scale-plate-inner" />
            </g>

            {/* Right chain */}
            <line x1="155" y1="66" x2="155" y2="100" className="scale-chain" />
            <line x1="145" y1="66" x2="145" y2="95" className="scale-chain" />
            <line x1="165" y1="66" x2="165" y2="95" className="scale-chain" />

            {/* Right plate */}
            <g className="scale-right-plate">
              <ellipse cx="155" cy="105" rx="28" ry="6" className="scale-plate" />
              <ellipse cx="155" cy="103" rx="25" ry="4" className="scale-plate-inner" />
            </g>
          </g>
        </svg>
      </div>

      {/* Text */}
      <div className="loading-text">
        <h2 className="loading-title">CEYLAN HUKUK</h2>
        <div className="loading-divider" />
        <p className="loading-subtitle">Hukuk Bürosu • Law Office</p>
      </div>

      {/* Progress bar */}
      <div className="loading-progress-container">
        <div className="loading-progress-bar" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}
