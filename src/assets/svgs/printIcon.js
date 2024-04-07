import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function PrintLight({color, ...props}) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 16 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M10.997 12.08H4.98M10.997 8.947H4.98M7.276 5.815H4.98"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        clipRule="evenodd"
        d="M1.009 9c0 5.781 1.748 7.709 6.992 7.709 5.245 0 6.993-1.928 6.993-7.709 0-5.78-1.748-7.708-6.993-7.708C2.757 1.292 1.01 3.219 1.01 9z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default PrintLight;
