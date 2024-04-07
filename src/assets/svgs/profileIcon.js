import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function ProfileIconTab({color, ...props}) {
  return (
    <Svg
      width={17}
      height={20}
      viewBox="0 0 17 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.495 5.291a5.274 5.274 0 01-5.294 5.292 5.275 5.275 0 01-5.294-5.292A5.274 5.274 0 018.201 0a5.273 5.273 0 015.294 5.291zM8.201 20c-4.337 0-8-.705-8-3.425 0-2.721 3.686-3.401 8-3.401 4.339 0 8 .705 8 3.425 0 2.721-3.685 3.401-8 3.401z"
        fill={color}
      />
    </Svg>
  );
}

export default ProfileIconTab;
