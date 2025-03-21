import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const ShareLight = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.57738 9.36481C8.57738 9.36481 -1.40316 7.30015 2.06513 5.29802C4.99192 3.60861 15.0786 0.703981 16.4877 1.45448C17.2382 2.86365 14.3336 12.9503 12.6442 15.8771C10.642 19.3454 8.57738 9.36481 8.57738 9.36481Z"
      stroke="#212121"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8.57715 9.36444L16.4875 1.4541"
      stroke="#212121"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default ShareLight;
