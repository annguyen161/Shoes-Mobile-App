import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const UnLikeYellowBg = props => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.3929 9.66527C1.49873 6.8736 2.54373 3.68277 5.47456 2.7386C7.01623 2.2411 8.7179 2.53443 9.99956 3.4986C11.2121 2.5611 12.9762 2.24443 14.5162 2.7386C17.4471 3.68277 18.4987 6.8736 17.6054 9.66527C16.2137 14.0903 9.99956 17.4986 9.99956 17.4986C9.99956 17.4986 3.83123 14.1419 2.3929 9.66527Z"
      stroke="#64B5F6"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M13.333 5.58325C14.2247 5.87159 14.8547 6.66742 14.9305 7.60158"
      stroke="#64B5F6"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default UnLikeYellowBg;
