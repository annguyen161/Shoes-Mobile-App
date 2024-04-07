import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

function Search({color, ...props}) {
  return (
    <Svg
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Circle
        cx={13.7279}
        cy={13.7276}
        r={10.4867}
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.021 21.566l4.112 4.1"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default Search;
