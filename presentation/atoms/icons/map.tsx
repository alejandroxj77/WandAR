import * as React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */
const Map = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    id="Uploaded to svgrepo.com"
    width="800px"
    height="800px"
    viewBox="0 0 32 32"
    xmlSpace="preserve"
    fill= '#FFFFFF'
    {...props}
  >
    <Path
      d="M16,8c-2.757,0-5,2.243-5,5s2.243,5,5,5s5-2.243,5-5S18.757,8,16,8z M16,16  c-1.654,0-3-1.346-3-3s1.346-3,3-3s3,1.346,3,3S17.654,16,16,16z M16,6c3.86,0,7,3.14,7,7c0,5.271-4.719,10.256-7.009,12.365  C13.299,22.889,9,17.901,9,13C9,9.14,12.14,6,16,6 M16,4c-4.971,0-9,4.029-9,9c0,8,9,15,9,15s9-6.984,9-15C25,8.029,20.971,4,16,4  L16,4z"
    />
  </Svg>
);
export default Map;
