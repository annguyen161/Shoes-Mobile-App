import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const NotificationDark = props => (
  <Svg
    width={28}
    height={28}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.9947 2.93311C8.82139 2.93311 6.57361 7.61755 6.57361 10.7142C6.57361 13.0287 6.90917 12.3475 5.62806 15.1709C4.06361 19.1942 10.3547 20.8387 13.9947 20.8387C17.6336 20.8387 23.9247 19.1942 22.3614 15.1709C21.0803 12.3475 21.4158 13.0287 21.4158 10.7142C21.4158 7.61755 19.1669 2.93311 13.9947 2.93311Z"
      stroke="white"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M16.6888 23.9307C15.1788 25.6173 12.8233 25.6373 11.2988 23.9307"
      stroke="white"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default NotificationDark;
