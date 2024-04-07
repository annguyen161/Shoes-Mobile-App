import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const TrashLight = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M18.8889 9.55371C18.8889 17.5728 20.0432 21.1975 12.2794 21.1975C4.51466 21.1975 5.69276 17.5728 5.69276 9.55371"
      stroke="#212121"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M20.3653 6.47961H4.21484"
      stroke="#212121"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M15.7148 6.47958C15.7148 6.47958 16.2434 2.71387 12.2891 2.71387C8.33578 2.71387 8.86435 6.47958 8.86435 6.47958"
      stroke="#212121"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default TrashLight;
