import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Menu({color, ...props}) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        clipRule="evenodd"
        d="M12 1.208c5.96 0 10.792 4.832 10.792 10.792S17.96 22.792 12.001 22.792C6.04 22.792 1.209 17.959 1.209 12c0-5.96 4.832-10.791 10.792-10.791z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.597 12.015h.01M11.919 12.015h.01M7.242 12.015h.01"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default Menu;
