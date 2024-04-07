import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Notification({color, ...props}) {
  return (
    <Svg
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        clipRule="evenodd"
        d="M13.996 2.933c-5.174 0-7.421 4.685-7.421 7.781 0 2.315.335 1.633-.946 4.457-1.564 4.023 4.727 5.668 8.367 5.668 3.639 0 9.93-1.645 8.366-5.668-1.28-2.823-.945-2.142-.945-4.457 0-3.096-2.25-7.78-7.421-7.78z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.69 23.93c-1.51 1.687-3.865 1.707-5.39 0"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default Notification;
