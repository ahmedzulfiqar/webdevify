import React from "react";

function Loader() {
  return (
    <div class="loader justify-content-center">
      <div className="d-flex   justify-content-center">
        <svg
          height="0"
          width="0"
          viewBox="0 0 64 64"
          class="absolute text-center"
        >
          <defs class="" xmlns="http://www.w3.org/2000/svg">
            <linearGradient
              class="s-xJBuHA073rTt"
              gradientUnits="userSpaceOnUse"
              y2="2"
              x2="0"
              y1="62"
              x1="0"
              id="b"
            >
              <stop class="s-xJBuHA073rTt" stop-color="#973BED"></stop>
              <stop
                class="s-xJBuHA073rTt"
                stop-color="#007CFF"
                offset="1"
              ></stop>
            </linearGradient>
            <linearGradient
              class="s-xJBuHA073rTt"
              gradientUnits="userSpaceOnUse"
              y2="0"
              x2="0"
              y1="64"
              x1="0"
              id="c"
            >
              <stop class="s-xJBuHA073rTt" stop-color="#FFC800"></stop>
              <stop class="s-xJBuHA073rTt" stop-color="#F0F" offset="1"></stop>
              <animateTransform
                repeatCount="indefinite"
                keySplines=".42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1"
                keyTimes="0; 0.125; 0.25; 0.375; 0.5; 0.625; 0.75; 0.875; 1"
                dur="8s"
                values="0 32 32;-270 32 32;-270 32 32;-540 32 32;-540 32 32;-810 32 32;-810 32 32;-1080 32 32;-1080 32 32"
                type="rotate"
                attributeName="gradientTransform"
              ></animateTransform>
            </linearGradient>
            <linearGradient
              class="s-xJBuHA073rTt"
              gradientUnits="userSpaceOnUse"
              y2="2"
              x2="0"
              y1="62"
              x1="0"
              id="d"
            >
              <stop class="s-xJBuHA073rTt" stop-color="#00E0ED"></stop>
              <stop
                class="s-xJBuHA073rTt"
                stop-color="#00DA72"
                offset="1"
              ></stop>
            </linearGradient>
          </defs>
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 64 64"
          height="64"
          width="64"
          class="inline-block"
        >
          <path
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-width="10"
            stroke="url(#c)"
            d="M 32 32 m 0 -27a 27 27 0 1 1 0 54 a 27 27 0 1 1 0 -54"
            class="spin"
            id="o"
            pathLength="3260"
          ></path>
        </svg>
        <div class="w-2"></div>
      </div>
    </div>
  );
}

export default Loader;
