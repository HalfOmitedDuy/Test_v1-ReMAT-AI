import React from 'react';

interface RotatingEarth2DProps {
  size?: 'sm' | 'md' | 'lg' | 'hero' | 'ambient';
  className?: string;
  showClouds?: boolean;
}

export const RotatingEarth2D: React.FC<RotatingEarth2DProps> = ({
  size = 'md',
  className = '',
  showClouds = true
}) => {
  // Dimensions based on size
  const dimensionMap = {
    sm: { width: 140, height: 140, planetR: 44 },
    md: { width: 220, height: 220, planetR: 70 },
    lg: { width: 320, height: 320, planetR: 100 },
    hero: { width: 420, height: 420, planetR: 135 },
    ambient: { width: 500, height: 500, planetR: 160 }
  };

  const { width, height } = dimensionMap[size];

  return (
    <div 
      className={`relative inline-flex items-center justify-center pointer-events-none select-none ${className}`}
      style={{ width, height }}
      aria-hidden="true"
    >
      {/* Atmosphere soft glow */}
      <div 
        className="absolute rounded-full bg-gradient-to-tr from-emerald-200/40 via-sky-300/30 to-teal-100/20 blur-xl"
        style={{ width: width * 0.85, height: height * 0.85 }}
      />

      {/* Floating Gentle Container */}
      <div className="relative w-full h-full animate-float-planet flex items-center justify-center">
        
        {/* Main 2D Rotating Planet SVG */}
        <svg 
          viewBox="-200 -200 400 400" 
          className="w-full h-full animate-spin-planet-slow origin-center drop-shadow-md"
        >
          <defs>
            {/* Ocean Gradient */}
            <radialGradient id="earthOceanGrad" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="65%" stopColor="#0284C7" />
              <stop offset="100%" stopColor="#0369A1" />
            </radialGradient>

            {/* Atmosphere Rim Highlight */}
            <linearGradient id="earthAtmosphere" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#BAE6FD" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#0369A1" stopOpacity="0" />
            </linearGradient>

            {/* Tree Canopy Gradients */}
            <linearGradient id="treeGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#34D399" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>

            <linearGradient id="treeGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#6EE7B7" />
              <stop offset="100%" stopColor="#10B981" />
            </linearGradient>

            {/* Tree Definition (Round canopy tree) */}
            <g id="treeRound">
              {/* Trunk */}
              <rect x="-3" y="-12" width="6" height="13" rx="1.5" fill="#78350F" />
              {/* Foliage shadow */}
              <circle cx="0" cy="-21" r="14" fill="#047857" />
              {/* Foliage main */}
              <circle cx="0" cy="-23" r="13" fill="url(#treeGrad1)" />
              {/* Foliage highlight */}
              <circle cx="-3" cy="-27" r="5" fill="#A7F3D0" opacity="0.6" />
            </g>

            {/* Tree Definition (Pine / Conifer tree) */}
            <g id="treePine">
              {/* Trunk */}
              <rect x="-2" y="-10" width="4" height="11" rx="1" fill="#78350F" />
              {/* Bottom tier */}
              <polygon points="0,-16 -12,-6 12,-6" fill="#065F46" />
              {/* Middle tier */}
              <polygon points="0,-23 -10,-12 10,-12" fill="#059669" />
              {/* Top tier */}
              <polygon points="0,-30 -8,-18 8,-18" fill="url(#treeGrad2)" />
              <circle cx="0" cy="-31" r="1.5" fill="#FDE047" opacity="0.8" />
            </g>

            {/* Little Eco Sprout / Flower */}
            <g id="flowerSprout">
              <path d="M0,0 Q-4,-8 -7,-9 Q-4,-4 0,-2" fill="#10B981" />
              <path d="M0,0 Q4,-8 7,-9 Q4,-4 0,-2" fill="#34D399" />
              <circle cx="0" cy="-10" r="3.5" fill="#FBBF24" />
              <circle cx="0" cy="-10" r="1.5" fill="#FEF3C7" />
            </g>

            {/* Wind turbine / Clean energy pinwheel (Tiny) */}
            <g id="miniTurbine">
              <line x1="0" y1="0" x2="0" y2="-22" stroke="#E2E8F0" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="0" cy="-22" r="2.5" fill="#CBD5E1" />
              <line x1="0" y1="-22" x2="-8" y2="-30" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
              <line x1="0" y1="-22" x2="9" y2="-25" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
              <line x1="0" y1="-22" x2="-2" y2="-12" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
            </g>
          </defs>

          {/* Planet Body Circle (Ocean) */}
          <circle cx="0" cy="0" r="105" fill="url(#earthOceanGrad)" />

          {/* 2D Cartoon Continents & Islands */}
          <g>
            {/* Continent 1 (North/East) */}
            <path 
              d="M-30,-70 Q-10,-95 30,-80 Q65,-70 75,-40 Q85,-10 60,15 Q40,30 20,10 Q-5,0 -20,-20 Q-45,-45 -30,-70 Z" 
              fill="#22C55E" 
              stroke="#15803D"
              strokeWidth="2.5"
            />
            {/* Continent 2 (South/West) */}
            <path 
              d="M-80,-20 Q-95,15 -75,45 Q-55,75 -25,80 Q-5,85 0,65 Q10,40 -15,35 Q-40,30 -50,5 Q-65,-10 -80,-20 Z" 
              fill="#16A34A" 
              stroke="#15803D"
              strokeWidth="2.5"
            />
            {/* Island Archipelago 1 */}
            <path 
              d="M35,45 Q50,40 55,55 Q45,65 30,60 Z" 
              fill="#4ADE80" 
              stroke="#15803D"
              strokeWidth="1.5"
            />
            {/* Island Archipelago 2 */}
            <circle cx="-35" cy="-75" r="8" fill="#4ADE80" stroke="#15803D" strokeWidth="1.5" />
            <circle cx="65" cy="-60" r="6" fill="#86EFAC" stroke="#15803D" strokeWidth="1.5" />
          </g>

          {/* Atmosphere Highlight Arc */}
          <path 
            d="M-74,-74 A 105 105 0 0 1 74,-74" 
            fill="none" 
            stroke="url(#earthAtmosphere)" 
            strokeWidth="6" 
            strokeLinecap="round"
          />

          {/* Trees Sprouting Around the 2D Cartoon Planet Perimeter */}
          {/* Tree 1: Top (0°) */}
          <g transform="translate(0, -104) rotate(0)">
            <use href="#treeRound" />
          </g>

          {/* Tree 2: Top-Right (42°) */}
          <g transform="translate(70, -77) rotate(42)">
            <use href="#treePine" />
          </g>

          {/* Little Sprout: (68°) */}
          <g transform="translate(97, -39) rotate(68)">
            <use href="#flowerSprout" />
          </g>

          {/* Tree 3: Right (90°) */}
          <g transform="translate(104, 0) rotate(90)">
            <use href="#treeRound" />
          </g>

          {/* Mini Turbine: (125°) */}
          <g transform="translate(85, 60) rotate(125)">
            <use href="#miniTurbine" />
          </g>

          {/* Tree 4: Bottom-Right (145°) */}
          <g transform="translate(60, 85) rotate(145)">
            <use href="#treePine" />
          </g>

          {/* Tree 5: Bottom (180°) */}
          <g transform="translate(0, 104) rotate(180)">
            <use href="#treeRound" />
          </g>

          {/* Tree 6: Bottom-Left (220°) */}
          <g transform="translate(-67, 80) rotate(220)">
            <use href="#treePine" />
          </g>

          {/* Little Sprout: (248°) */}
          <g transform="translate(-97, 39) rotate(248)">
            <use href="#flowerSprout" />
          </g>

          {/* Tree 7: Left (270°) */}
          <g transform="translate(-104, 0) rotate(270)">
            <use href="#treeRound" />
          </g>

          {/* Tree 8: Top-Left (318°) */}
          <g transform="translate(-70, -77) rotate(318)">
            <use href="#treePine" />
          </g>

          {/* Mini Trees on the Continents surface (Internal 2D Depth) */}
          <g transform="translate(25, -45) scale(0.65)">
            <use href="#treeRound" />
          </g>
          <g transform="translate(-40, 25) scale(0.65)">
            <use href="#treePine" />
          </g>
          <g transform="translate(45, 5) scale(0.55)">
            <use href="#treeRound" />
          </g>
          <g transform="translate(-10, 50) scale(0.55)">
            <use href="#flowerSprout" />
          </g>

        </svg>

        {/* Orbiting Cartoon Clouds (Spinning Counter-Direction for rich 2D parallax) */}
        {showClouds && (
          <svg 
            viewBox="-200 -200 400 400" 
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ animation: 'spinPlanetReverse 42s linear infinite' }}
          >
            {/* Cloud 1 */}
            <g transform="translate(-130, -50)" opacity="0.9">
              <rect x="0" y="0" width="36" height="14" rx="7" fill="#FFFFFF" />
              <circle cx="12" cy="0" r="10" fill="#FFFFFF" />
              <circle cx="24" cy="2" r="8" fill="#FFFFFF" />
            </g>

            {/* Cloud 2 */}
            <g transform="translate(90, 80)" opacity="0.85">
              <rect x="0" y="0" width="42" height="15" rx="7.5" fill="#FFFFFF" />
              <circle cx="14" cy="0" r="11" fill="#FFFFFF" />
              <circle cx="28" cy="2" r="9" fill="#FFFFFF" />
            </g>

            {/* Cloud 3 */}
            <g transform="translate(60, -120)" opacity="0.75">
              <rect x="0" y="0" width="28" height="11" rx="5.5" fill="#FFFFFF" />
              <circle cx="10" cy="0" r="8" fill="#FFFFFF" />
              <circle cx="19" cy="1" r="6" fill="#FFFFFF" />
            </g>
          </svg>
        )}

      </div>
    </div>
  );
};
