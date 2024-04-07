import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const Control = props => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M8.60997 13.8279H3.35938"
      stroke="#FF4D67"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10.9512 5.75072H16.2018"
      stroke="#FF4D67"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.27256 5.70521C7.27256 4.6255 6.39076 3.75 5.30327 3.75C4.21578 3.75 3.33398 4.6255 3.33398 5.70521C3.33398 6.78492 4.21578 7.66042 5.30327 7.66042C6.39076 7.66042 7.27256 6.78492 7.27256 5.70521Z"
      stroke="#FF4D67"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.6671 13.7951C16.6671 12.7153 15.786 11.8398 14.6985 11.8398C13.6103 11.8398 12.7285 12.7153 12.7285 13.7951C12.7285 14.8748 13.6103 15.7503 14.6985 15.7503C15.786 15.7503 16.6671 14.8748 16.6671 13.7951Z"
      stroke="#FF4D67"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default Control;
