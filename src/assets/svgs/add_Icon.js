import * as React from 'react';
import Svg, {G, Rect, Path, Defs, ClipPath} from 'react-native-svg';
const Add_Icon = props => (
  <Svg
    width={40}
    height={40}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#clip0_1378_7818)">
      <Rect width={40} height={40} rx={20} fill="#FF4D67" />
      <Path
        d="M20.0608 14.1045V26.0185"
        stroke="white"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M26.024 20.0618H14.0977"
        stroke="white"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_1378_7818">
        <Rect width={40} height={40} rx={20} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default Add_Icon;
