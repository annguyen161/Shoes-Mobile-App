import * as React from 'react';
import Svg, {Circle, Path, Defs, LinearGradient, Stop} from 'react-native-svg';
const Success = props => (
  <Svg
    width={96}
    height={97}
    viewBox="0 0 96 97"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Circle
      cx={48}
      cy={48.103}
      r={48}
      fill="url(#zpnkotzr4a)"
      fillOpacity={0.4}
    />
    <Circle
      cx={48}
      cy={48.103}
      r={47.564}
      stroke="url(#45m0ulz2yb)"
      strokeOpacity={0.4}
      strokeWidth={0.873}
    />
    <Circle cx={48} cy={48.103} r={30.546} fill="#fff" />
    <Path
      d="M48 17.558c-16.861 0-30.546 13.684-30.546 30.545 0 16.861 13.684 30.545 30.546 30.545 16.86 0 30.545-13.684 30.545-30.545 0-16.861-13.684-30.545-30.545-30.545zm-6.11 45.818L26.619 48.103l4.307-4.307L41.89 54.731l23.184-23.184 4.306 4.338-27.49 27.49z"
      fill="url(#7e1rgh6bkc)"
    />
    <Defs>
      <LinearGradient
        id="zpnkotzr4a"
        x1={48}
        y1={0.104}
        x2={48}
        y2={96.103}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#fff" stopOpacity={0.4} />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.1} />
      </LinearGradient>
      <LinearGradient
        id="45m0ulz2yb"
        x1={48}
        y1={0.104}
        x2={48}
        y2={96.103}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#fff" stopOpacity={0.4} />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.1} />
      </LinearGradient>
      <LinearGradient
        id="7e1rgh6bkc"
        x1={17.454}
        y1={78.648}
        x2={60.615}
        y2={6.788}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#2061A8" />
        <Stop offset={1} stopColor="#0078DC" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default Success;
