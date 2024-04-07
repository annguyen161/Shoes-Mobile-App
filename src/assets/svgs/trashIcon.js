import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function TrashIconItem({color, ...props}) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M18.889 9.554c0 8.019 1.154 11.644-6.61 11.644S5.693 17.573 5.693 9.554M20.365 6.48H4.215M15.715 6.48s.528-3.766-3.426-3.766c-3.953 0-3.425 3.766-3.425 3.766"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default TrashIconItem;
