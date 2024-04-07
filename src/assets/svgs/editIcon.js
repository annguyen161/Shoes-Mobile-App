import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const Edit = ({color, ...props}) => (
  <Svg
    width={36}
    height={36}
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24.7209 3.84842C26.8187 3.7173 28.8874 4.44571 30.4462 5.8734C31.8739 7.43221 32.6024 9.5009 32.4858 11.6133V25.2201C32.6169 27.3325 31.8739 29.4011 30.4608 30.96C28.902 32.3876 26.8187 33.1161 24.7209 32.9849H11.114C9.00159 33.1161 6.93288 32.3876 5.37406 30.96C3.94636 29.4011 3.21794 27.3325 3.34906 25.2201V11.6133C3.21794 9.5009 3.94636 7.43221 5.37406 5.8734C6.93288 4.44571 9.00159 3.7173 11.114 3.84842H24.7209ZM16.431 25.4823L26.2355 15.6487C27.1242 14.7455 27.1242 13.2886 26.2355 12.4L24.3416 10.5061C23.4384 9.60287 21.9815 9.60287 21.0783 10.5061L20.1022 11.4967C19.9565 11.6424 19.9565 11.8901 20.1022 12.0358C20.1022 12.0358 22.4186 14.3376 22.4623 14.3958C22.6225 14.5706 22.7245 14.8037 22.7245 15.066C22.7245 15.5904 22.302 16.0275 21.763 16.0275C21.5153 16.0275 21.2822 15.9255 21.122 15.7652L18.6891 13.3469C18.5725 13.2304 18.3686 13.2304 18.252 13.3469L11.3029 20.296C10.8221 20.7767 10.5453 21.4177 10.5308 22.1024L10.4434 25.5551C10.4434 25.7445 10.5016 25.9193 10.6327 26.0504C10.7639 26.1816 10.9387 26.2544 11.1281 26.2544H14.5516C15.2509 26.2544 15.9211 25.9776 16.431 25.4823Z"
      fill={color}
    />
  </Svg>
);
export default Edit;
