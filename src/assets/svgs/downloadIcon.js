import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Download({color, ...props}) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        clipRule="evenodd"
        d="M16.8 6.917l-4.726-4.5a15.165 15.165 0 00-2.041-.125C4.79 2.292 3.04 4.225 3.04 10c0 5.784 1.75 7.709 6.992 7.709 5.25 0 7-1.925 7-7.709 0-1.183-.075-2.208-.234-3.083z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.611 2.361V4.58a2.803 2.803 0 002.804 2.802h2.459M9.715 13.348V8.313M7.762 11.386l1.954 1.962 1.954-1.962"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default Download;
