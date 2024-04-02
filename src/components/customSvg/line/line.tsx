const LineSVG = ({ color = 'white', size = '100%', style = {} }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height="auto" 
      viewBox="0 0 415 18" 
      fill="none"
      style={{ display: 'block', maxWidth: '100%', height: 'auto', ...style }}
    >
      <path 
        d="M2.99997 14.8666C11.1687 14.2262 19.2778 12.7732 27.4642 12.1247C73.2639 8.49649 119.453 7.13538 165.36 5.85161C236.436 3.864 308.047 2.62095 379.085 6.5967C389.999 7.20753 400.997 7.80502 411.779 9.70388" 
        stroke={color} 
        strokeWidth="6" 
        strokeLinecap="round"
      />
    </svg>
  );
};

export default LineSVG;
