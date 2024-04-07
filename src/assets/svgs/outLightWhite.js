import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SVGComponent = props => (
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
      d="M2.39387 9.66527C1.49971 6.8736 2.54471 3.68277 5.47554 2.7386C7.01721 2.2411 8.71887 2.53443 10.0005 3.4986C11.213 2.5611 12.9772 2.24443 14.5172 2.7386C17.448 3.68277 18.4997 6.8736 17.6064 9.66527C16.2147 14.0903 10.0005 17.4986 10.0005 17.4986C10.0005 17.4986 3.83221 14.1419 2.39387 9.66527Z"
      stroke="white"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M13.334 5.58325C14.2257 5.87159 14.8557 6.66742 14.9315 7.60158"
      stroke="white"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SVGComponent;
