import * as React from 'react';
import Svg, {Rect, Path, Defs, LinearGradient, Stop} from 'react-native-svg';
const TopUpWalletLight = props => (
  <Svg
    width={60}
    height={60}
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Rect
      width={60}
      height={60}
      rx={30}
      fill="url(#paint0_linear_1469_7665)"
      fillOpacity={0.12}
    />
    <Rect
      x={8}
      y={8}
      width={44}
      height={44}
      rx={22}
      fill="url(#paint1_linear_1469_7665)"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M35.7689 26.3818H40C40 22.9846 37.9644 21 34.5156 21H25.4844C22.0356 21 20 22.9846 20 26.3385V33.6615C20 37.0154 22.0356 39 25.4844 39H34.5156C37.9644 39 40 37.0154 40 33.6615V33.3495H35.7689C33.8052 33.3495 32.2133 31.7975 32.2133 29.883C32.2133 27.9685 33.8052 26.4165 35.7689 26.4165V26.3818ZM35.7689 27.8724H39.2533C39.6657 27.8724 40 28.1983 40 28.6004V31.131C39.9952 31.5311 39.6637 31.8543 39.2533 31.8589H35.8489C34.8548 31.872 33.9855 31.2084 33.76 30.2643C33.6471 29.6783 33.8056 29.0736 34.1931 28.6122C34.5805 28.1509 35.1573 27.8801 35.7689 27.8724ZM35.92 30.533H36.2489C36.6711 30.533 37.0133 30.1993 37.0133 29.7877C37.0133 29.3761 36.6711 29.0424 36.2489 29.0424H35.92C35.7181 29.0401 35.5236 29.1166 35.38 29.255C35.2364 29.3934 35.1555 29.5821 35.1556 29.779C35.1555 30.1921 35.4964 30.5282 35.92 30.533ZM24.7378 26.3818H30.3822C30.8044 26.3818 31.1467 26.0481 31.1467 25.6365C31.1467 25.2249 30.8044 24.8912 30.3822 24.8912H24.7378C24.319 24.8912 23.9782 25.2196 23.9733 25.6278C23.9733 26.0409 24.3142 26.3771 24.7378 26.3818Z"
      fill="white"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_1469_7665"
        x1={60}
        y1={60}
        x2={-11.3946}
        y2={39.2998}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#101010" />
        <Stop offset={1} stopColor="#313130" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_1469_7665"
        x1={52}
        y1={52}
        x2={-0.35605}
        y2={36.8198}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#101010" />
        <Stop offset={1} stopColor="#313130" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default TopUpWalletLight;
