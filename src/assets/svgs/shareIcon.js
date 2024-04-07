import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Share({color, ...props}) {
  return (
    <Svg
      width={22}
      height={22}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        clipRule="evenodd"
        d="M8.578 9.365S-1.402 7.3 2.066 5.298C4.993 3.608 15.08.704 16.49 1.454c.75 1.41-2.154 11.496-3.844 14.423-2.002 3.468-4.067-6.512-4.067-6.512z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.578 9.364l7.91-7.91"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default Share;
