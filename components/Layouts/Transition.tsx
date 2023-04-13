import React from "react";
import { motion } from "framer-motion";
const blackBox = {
  initial: {
    height: "100vh",
    bottom: 0,
  },
  animate: {
    height: 0,
    transition: {
      when: "afterChildren",
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

const textContainer = {
  initial: {
    opacity: 1,
  },
  animate: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 0.25,
    },
  },
};

// const text = {
//   initial: {
//     y: 40,
//   },
//   animate: {
//     y: 80,
//     transition: {
//       duration: 1.5,
//       ease: [0.87, 0, 0.13, 1],
//     },
//   },
// };
const Transition = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <motion.div
        className="relative z-50 w-full bg-black"
        initial="initial"
        animate="animate"
        variants={blackBox}
        onAnimationStart={() => document.body.classList.add("overflow-hidden")}
        onAnimationComplete={() =>
          document.body.classList.remove("overflow-hidden")
        }
      />

      <motion.svg
        initial="initial"
        animate="animate"
        variants={textContainer}
        className="absolute z-50 flex"
        width="94"
        height="32"
        viewBox="0 0 94 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_1_7904)">
          <g clip-path="url(#clip1_1_7904)">
            <path
              d="M0.657532 32H11.5068C16.6514 32 20.8219 27.8295 20.8219 22.6849H9.9726C4.82803 22.6849 0.657532 26.8554 0.657532 32Z"
              fill="#F864C8"
            />
            <path
              d="M1.14285 9.31507V23.0137C6.28742 23.0137 10.4579 18.8432 10.4579 13.6986V0C5.31335 0 1.14285 4.1705 1.14285 9.31507Z"
              fill="#A965F8"
            />
            <path
              d="M31.3425 0H20.4931C15.3486 0 11.1781 4.1705 11.1781 9.31507H22.0274C27.172 9.31507 31.3425 5.14457 31.3425 0Z"
              fill="#F3C083"
            />
            <path
              d="M31.3425 22.137V8.43835C26.1979 8.43835 22.0274 12.6089 22.0274 17.7534V31.4521C27.172 31.4521 31.3425 27.2816 31.3425 22.137Z"
              fill="#2EC5CE"
            />
          </g>
          <path
            d="M42.9961 10.7646H45.2705L47.8438 20.3604V23.0664H46.7979L42.9961 10.7646ZM51.1143 10.7646H53.3721L49.3877 23.0664H48.5244V19.8291L51.1143 10.7646ZM57.3066 20.1777C57.3066 20.6758 57.4062 21.0465 57.6055 21.29C57.8158 21.5335 58.1146 21.6774 58.502 21.7217V23.0664C58.4577 23.0775 58.3857 23.083 58.2861 23.083C57.9098 23.083 57.5446 23.0332 57.1904 22.9336C56.8473 22.834 56.543 22.6735 56.2773 22.4521C56.0117 22.2308 55.8014 21.9375 55.6465 21.5723C55.5026 21.207 55.4307 20.7588 55.4307 20.2275C55.4307 19.7184 55.5358 19.2812 55.7461 18.916C55.9674 18.5397 56.2441 18.2354 56.5762 18.0029C56.9193 17.7594 57.3066 17.5824 57.7383 17.4717C58.1699 17.3499 58.6071 17.2891 59.0498 17.2891H59.7803V18.4678H59.415C59.1937 18.4678 58.9613 18.4899 58.7178 18.5342C58.4743 18.5785 58.2474 18.6615 58.0371 18.7832C57.8268 18.9049 57.6497 19.082 57.5059 19.3145C57.373 19.5358 57.3066 19.8236 57.3066 20.1777ZM62.4697 20.2275C62.4697 20.3161 62.4753 20.4489 62.4863 20.626C62.4974 20.792 62.5195 20.9635 62.5527 21.1406C62.5859 21.3177 62.6357 21.4782 62.7021 21.6221C62.7796 21.766 62.8792 21.86 63.001 21.9043L62.4697 23.0166C62.3258 23.0166 62.1709 22.9834 62.0049 22.917C61.8499 22.8506 61.695 22.7565 61.54 22.6348C61.3962 22.513 61.2689 22.3802 61.1582 22.2363C61.0586 22.0814 60.9811 21.9154 60.9258 21.7383C60.8151 22.015 60.5938 22.264 60.2617 22.4854C59.9408 22.6956 59.5811 22.8506 59.1826 22.9502V21.6885C59.4482 21.6331 59.6862 21.528 59.8965 21.373C60.1178 21.207 60.306 21.0133 60.4609 20.792V17.2891C60.4609 16.7467 60.4333 16.3151 60.3779 15.9941C60.3226 15.6732 60.2285 15.4408 60.0957 15.2969C59.9629 15.1419 59.7969 15.0479 59.5977 15.0146C59.4095 14.9704 59.1826 14.9482 58.917 14.9482C58.6735 14.9482 58.4411 14.9814 58.2197 15.0479C58.0094 15.1032 57.8102 15.1751 57.6221 15.2637C57.445 15.3411 57.2845 15.4297 57.1406 15.5293C57.0078 15.6289 56.9082 15.7064 56.8418 15.7617L56.0947 14.6162C56.2054 14.4945 56.3714 14.3727 56.5928 14.251C56.8141 14.1182 57.0687 14.002 57.3564 13.9023C57.6442 13.8027 57.9541 13.7253 58.2861 13.6699C58.6292 13.6035 58.9834 13.5703 59.3486 13.5703C59.6807 13.5703 60.0016 13.6035 60.3115 13.6699C60.6325 13.7363 60.9202 13.847 61.1748 14.002C61.4404 14.1569 61.6673 14.3672 61.8555 14.6328C62.0547 14.8874 62.193 15.2083 62.2705 15.5957C62.348 15.9831 62.3978 16.376 62.4199 16.7744C62.4531 17.1618 62.4697 17.5492 62.4697 17.9365V20.0947V20.2275ZM73.4434 10.1006V23H71.5342L71.418 21.8877V10.1006H73.4434ZM65.043 18.1855C65.043 17.3223 65.1592 16.5973 65.3916 16.0107C65.6351 15.4242 65.945 14.9482 66.3213 14.583C66.6976 14.2178 67.1126 13.9577 67.5664 13.8027C68.0312 13.6367 68.485 13.5537 68.9277 13.5537C69.2708 13.5537 69.5973 13.5924 69.9072 13.6699C70.2171 13.7474 70.4938 13.8581 70.7373 14.002V15.7617C70.5492 15.5625 70.3389 15.402 70.1064 15.2803C69.874 15.1585 69.6139 15.0977 69.3262 15.0977C68.9831 15.0977 68.6787 15.1862 68.4131 15.3633C68.1475 15.5293 67.9206 15.7617 67.7324 16.0605C67.5553 16.3594 67.417 16.7025 67.3174 17.0898C67.2178 17.4772 67.168 17.8923 67.168 18.335C67.168 18.7777 67.2233 19.1927 67.334 19.5801C67.4447 19.9564 67.5941 20.2884 67.7822 20.5762C67.9704 20.8639 68.1973 21.0908 68.4629 21.2568C68.7396 21.4229 69.0384 21.5059 69.3594 21.5059C69.9017 21.5059 70.361 21.29 70.7373 20.8584V22.585C70.4717 22.7288 70.1618 22.8506 69.8076 22.9502C69.4645 23.0387 69.0993 23.083 68.7119 23.083C68.2692 23.083 67.832 23.0055 67.4004 22.8506C66.9798 22.6846 66.6035 22.4189 66.2715 22.0537C65.8509 21.5778 65.541 20.9912 65.3418 20.2939C65.1426 19.5856 65.043 18.8828 65.043 18.1855ZM80.6318 13.5537C81.2295 13.609 81.7663 13.7695 82.2422 14.0352C82.7292 14.3008 83.1442 14.6439 83.4873 15.0645C83.8304 15.485 84.0905 15.9665 84.2676 16.5088C84.4557 17.0511 84.5498 17.6156 84.5498 18.2021C84.5498 18.4678 84.5332 18.7334 84.5 18.999H78.8057V17.5381H82.6406C82.6406 17.2503 82.5908 16.9736 82.4912 16.708C82.4027 16.4424 82.2643 16.1989 82.0762 15.9775C81.8991 15.7451 81.6888 15.5514 81.4453 15.3965C81.2018 15.2415 80.9307 15.1475 80.6318 15.1143V13.5537ZM80.5654 21.4395C80.6872 21.4395 80.8366 21.4284 81.0137 21.4062C81.2018 21.373 81.3955 21.3232 81.5947 21.2568C81.805 21.1794 82.0098 21.0853 82.209 20.9746C82.4193 20.8639 82.6019 20.7311 82.7568 20.5762L83.4873 21.6885C83.1221 22.1423 82.696 22.4854 82.209 22.7178C81.722 22.9502 81.1022 23.0664 80.3496 23.0664C79.7409 23.0664 79.1709 22.9447 78.6396 22.7012C78.1084 22.4466 77.6546 22.1035 77.2783 21.6719C76.902 21.2402 76.6032 20.7367 76.3818 20.1611C76.1605 19.5856 76.0498 18.9658 76.0498 18.3018C76.0498 17.6709 76.1494 17.0732 76.3486 16.5088C76.5589 15.9443 76.8411 15.4518 77.1953 15.0312C77.5495 14.5996 77.959 14.251 78.4238 13.9854C78.8997 13.7197 79.4089 13.5703 79.9512 13.5371V15.1309C79.5417 15.2083 79.2041 15.3743 78.9385 15.6289C78.6729 15.8835 78.4626 16.1768 78.3076 16.5088C78.1637 16.8298 78.0586 17.1618 77.9922 17.5049C77.9368 17.848 77.9092 18.1413 77.9092 18.3848C77.9092 18.8164 77.959 19.2204 78.0586 19.5967C78.1693 19.9619 78.3353 20.2829 78.5566 20.5596C78.778 20.8252 79.0492 21.041 79.3701 21.207C79.7021 21.362 80.1006 21.4395 80.5654 21.4395ZM89.0986 13.6367L89.3145 14.5996V19.6797V19.7129V23H87.3057V13.6367H89.0986ZM89.9951 14.0518C90.2718 13.8968 90.6038 13.7806 90.9912 13.7031C91.3786 13.6146 91.9043 13.5703 92.5684 13.5703V15.6621C92.2585 15.5736 91.8822 15.5238 91.4395 15.5127C91.196 15.5127 90.9469 15.5348 90.6924 15.5791C90.4489 15.6123 90.2165 15.6676 89.9951 15.7451V14.0518Z"
            fill="#FDFDFD"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_7904">
            <rect width="94" height="32" fill="white" />
          </clipPath>
          <clipPath id="clip1_1_7904">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </motion.svg>

      {/* <motion.svg
        variants={textContainer}
        className="absolute z-50 flex"
      ></motion.svg> */}
    </div>
  );
};

export default Transition;
