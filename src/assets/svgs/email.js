import * as React from 'react';
import Svg, {Rect, Path, Defs, LinearGradient, Stop} from 'react-native-svg';
const Email_Icon = props => (
  <Svg
    width={80}
    height={81}
    viewBox="0 0 80 81"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Rect
      y={0.666626}
      width={80}
      height={80}
      rx={40}
      fill="#101010"
      fillOpacity={0.08}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M46.5857 28.6666C48.3737 28.6666 50.0937 29.3733 51.359 30.6413C52.6257 31.9066 53.3337 33.6133 53.3337 35.4V45.9333C53.3337 49.6533 50.307 52.6666 46.5857 52.6666H33.4137C29.6923 52.6666 26.667 49.6533 26.667 45.9333V35.4C26.667 31.68 29.679 28.6666 33.4137 28.6666H46.5857ZM48.707 37.3866L48.8137 37.28C49.1323 36.8933 49.1323 36.3333 48.799 35.9466C48.6137 35.748 48.359 35.6266 48.0937 35.6C47.8137 35.5853 47.547 35.68 47.3457 35.8666L41.3337 40.6666C40.5603 41.308 39.4523 41.308 38.667 40.6666L32.667 35.8666C32.2523 35.56 31.679 35.6 31.3337 35.96C30.9737 36.32 30.9337 36.8933 31.239 37.2933L31.4137 37.4666L37.4803 42.2C38.227 42.7866 39.1323 43.1066 40.0803 43.1066C41.0257 43.1066 41.947 42.7866 42.6923 42.2L48.707 37.3866Z"
      fill="url(#paint0_linear_827_17325)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_827_17325"
        x1={53.3337}
        y1={52.6666}
        x2={22.1696}
        y2={42.6269}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#0055A5" />
        <Stop offset={1} stopColor="#0055A5" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default Email_Icon;
