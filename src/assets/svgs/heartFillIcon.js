import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function HeartFill({color, ...props}) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.85 2.5c.631 0 1.261.09 1.86.29 3.691 1.2 5.021 5.25 3.91 8.79a12.728 12.728 0 01-3.009 4.81 38.456 38.456 0 01-6.331 4.96l-.25.15-.26-.16a38.094 38.094 0 01-6.369-4.96 12.933 12.933 0 01-3.011-4.8c-1.13-3.54.2-7.59 3.931-8.81.29-.1.589-.17.889-.21h.12c.281-.04.56-.06.84-.06h.11c.63.02 1.24.13 1.831.33h.059c.04.02.07.04.09.06.221.07.43.15.63.26l.38.17c.092.05.195.124.284.19.056.04.107.077.146.1l.05.03c.085.05.175.102.25.16a6.263 6.263 0 013.85-1.3zm2.66 7.2c.41-.01.76-.34.79-.76v-.12a3.3 3.3 0 00-2.11-3.16.8.8 0 00-1.01.5c-.14.42.08.88.5 1.03.641.24 1.07.87 1.07 1.57v.03a.86.86 0 00.19.62c.14.17.35.27.57.29z"
        fill={color}
      />
    </Svg>
  );
}

export default HeartFill;
