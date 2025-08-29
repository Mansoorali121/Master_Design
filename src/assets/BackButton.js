import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
const BackButton = (props) => (
  <Svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={16} cy={16} r={16} fill="#ECF0F4" />
    <Path
      d="M18 20L14 16L18 12"
      stroke="#181C2E"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default BackButton;
