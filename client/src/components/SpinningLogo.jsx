import React from "react";

const SpinningLogo = ({ width, height }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="svg-cont">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          style={{ isolation: "isolate" }}
          viewBox="0.334 0.334 85.647 79.215"
          width={width}
          height={height}
        >
          <style>
            {`
              @keyframes rotate-outside {
                0% { transform: rotate(0deg) scale(1); transform-origin: 50% 50%; }
                50% { transform: rotate(360deg) scale(1.2); transform-origin: 50% 50%; }
                100% { transform: scale(1); transform-origin: 50% 50%; }
              }
              @keyframes rotate-inside {
                0% { transform: rotate(0deg) scale(1); transform-origin: 50% 50%; }
                50% { transform: rotate(-360deg) scale(1.2); transform-origin: 50% 50%; }
                100% { transform: scale(1); transform-origin: 50% 50%; }
              }
              `}
          </style>
          <g id="logo">
            <path
              id="outside"
              d=" M 65.077 76.609 L 69.798 68.074 L 55.035 76.628 L 65.077 76.609 Z M 64.91 3.298 L 69.63 11.834 L 54.867 3.279 L 64.91 3.298 Z M 22.026 76.721 L 31.78 76.646 L 17.082 67.98 L 22.026 76.721 Z M 22.026 3.195 L 31.78 3.27 L 17.082 11.936 L 22.026 3.195 Z M 85.814 39.878 L 80.795 31.514 L 80.795 48.576 L 85.814 39.878 Z M 0.502 39.878 L 5.52 31.514 L 5.52 48.576 L 0.502 39.878 Z "
              fill="url(#gradient)" // Use gradient fill
              vectorEffect="non-scaling-stroke"
              strokeWidth="0.335"
              stroke="rgb(0,0,0)"
              strokeOpacity="1000000"
              strokeLinejoin="miter"
              strokeLinecap="square"
              strokeMiterlimit="3"
              style={{
                animationName: "rotate-outside",
                animationDuration: "4s",
                animationIterationCount: "infinite",
              }}
            />
            <path
              id="inside"
              d=" M 44.259 79.382 L 34.292 61.959 L 72.967 62.191 L 44.259 79.382 Z M 42.257 0.502 L 52.223 17.926 L 13.548 17.694 L 42.257 0.502 Z M 9.535 60.414 L 19.666 43.085 L 38.755 76.721 L 9.535 60.414 Z M 77.095 19.456 L 66.964 36.786 L 47.875 3.149 L 77.095 19.456 Z M 78.453 58.947 L 58.38 58.947 L 77.784 25.492 L 78.453 58.947 Z M 8.532 20.808 L 28.605 20.808 L 9.2 54.264 L 8.532 20.808 Z "
              fill="url(#gradient)" // Use gradient fill
              vectorEffect="non-scaling-stroke"
              strokeWidth="0.335"
              stroke="rgb(0,0,0)"
              strokeOpacity="1000000"
              strokeLinejoin="miter"
              strokeLinecap="square"
              strokeMiterlimit="3"
              style={{
                animationName: "rotate-inside",
                animationDuration: "4s",
                animationIterationCount: "infinite",
              }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: "#6615c2" }} />
                <stop offset="100%" style={{ stopColor: "#ff5546" }} />
              </linearGradient>
            </defs>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default SpinningLogo;
