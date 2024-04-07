import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const ProfileInActive = props => (
  <Svg
    width={24}
    height={25}
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.9849 15.7075C8.11731 15.7075 4.81445 16.2923 4.81445 18.6342C4.81445 20.9761 8.09636 21.5818 11.9849 21.5818C15.8525 21.5818 19.1545 20.9961 19.1545 18.6551C19.1545 16.3142 15.8735 15.7075 11.9849 15.7075Z"
      stroke="#64B5F6"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.9849 12.3672C14.523 12.3672 16.5801 10.3091 16.5801 7.77102C16.5801 5.23292 14.523 3.17578 11.9849 3.17578C9.44679 3.17578 7.3887 5.23292 7.3887 7.77102C7.38013 10.3005 9.42394 12.3586 11.9525 12.3672H11.9849Z"
      stroke="#64B5F6"
      strokeWidth={1.42857}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default ProfileInActive;
