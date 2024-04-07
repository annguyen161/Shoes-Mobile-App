import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
const Search_Icon = props => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Circle
      cx={9.80589}
      cy={9.80541}
      r={7.49047}
      stroke="#90CAF9"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M15.0156 15.4043L17.9523 18.3334"
      stroke="#90CAF9"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default Search_Icon;
