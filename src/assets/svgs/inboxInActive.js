import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const InboxInActive = props => (
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
      d="M19.0714 19.0699C16.0152 22.1263 11.4898 22.7867 7.78642 21.074C7.23971 20.8539 6.79148 20.676 6.36537 20.676C5.17849 20.683 3.70117 21.8339 2.93336 21.067C2.16555 20.2991 3.31726 18.8206 3.31726 17.6266C3.31726 17.2004 3.14642 16.7602 2.92632 16.2124C1.21283 12.5096 1.87411 7.98269 4.93026 4.92721C8.8316 1.02443 15.17 1.02443 19.0714 4.9262C22.9797 8.83501 22.9727 15.1681 19.0714 19.0699Z"
      stroke="#9E9E9E"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M15.9398 12.4131H15.9488"
      stroke="#9E9E9E"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M11.9301 12.4131H11.9391"
      stroke="#9E9E9E"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M7.92128 12.4131H7.93028"
      stroke="#9E9E9E"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default InboxInActive;
