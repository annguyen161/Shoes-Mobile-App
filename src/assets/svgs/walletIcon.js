import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath, Rect} from 'react-native-svg';
const WalletIcon = props => (
  <Svg
    width={24}
    height={25}
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#clip0_2025_51375)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 5.69458C2 5.16415 2.21071 4.65544 2.58579 4.28037C2.96086 3.90529 3.46957 3.69458 4 3.69458H14.6667C15.1971 3.69458 15.7058 3.90529 16.0809 4.28037C16.456 4.65544 16.6667 5.16415 16.6667 5.69458V6.36125H20C20.5304 6.36125 21.0391 6.57196 21.4142 6.94703C21.7893 7.32211 22 7.83081 22 8.36125V19.0279C22 19.5583 21.7893 20.0671 21.4142 20.4421C21.0391 20.8172 20.5304 21.0279 20 21.0279H4C3.46957 21.0279 2.96086 20.8172 2.58579 20.4421C2.21071 20.0671 2 19.5583 2 19.0279V5.69458ZM14 15.6946H18V14.3612H14V15.6946Z"
        fill="#0055A5"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_2025_51375">
        <Rect
          width={20}
          height={20}
          fill="white"
          transform="translate(2 2.36133)"
        />
      </ClipPath>
    </Defs>
  </Svg>
);
export default WalletIcon;
