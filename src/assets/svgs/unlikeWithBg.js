import * as React from 'react';
import Svg, {Rect, Path, Defs, LinearGradient, Stop} from 'react-native-svg';
const UnLikeWithBg = props => (
  <Svg
    width={28}
    height={28}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Rect
      width={28}
      height={28}
      rx={14}
      fill="url(#paint0_linear_1579_17715)"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.9149 13.7322C7.19957 11.4989 8.03557 8.94621 10.3802 8.19088C11.6136 7.79288 12.9749 8.02755 14.0002 8.79888C14.9702 8.04888 16.3816 7.79555 17.6136 8.19088C19.9582 8.94621 20.7996 11.4989 20.0849 13.7322C18.9716 17.2722 14.0002 19.9989 14.0002 19.9989C14.0002 19.9989 9.06557 17.3135 7.9149 13.7322Z"
      stroke="white"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M16.667 10.4666C17.3803 10.6972 17.8843 11.3339 17.945 12.0812"
      stroke="white"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_1579_17715"
        x1={28}
        y1={28}
        x2={-5.31749}
        y2={18.3399}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#101010" />
        <Stop offset={1} stopColor="#313130" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default UnLikeWithBg;
