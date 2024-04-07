import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
const Search_Light = props => (
  <Svg
    width={24}
    height={25}
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Circle
      cx={11.7279}
      cy={11.7276}
      r={10.4867}
      stroke="#212121"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M19.0215 19.5659L23.1328 23.6666"
      stroke="#212121"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default Search_Light;
