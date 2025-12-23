import * as React from "react";
import Svg, { Circle, G, Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: desc */
const ProfileIcon = (props: any) => (
    <Svg
        viewBox="0 0 32 32"
        enableBackground="new 0 0 32 32"
        id="Stock_cut"
        xmlSpace="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        fill="#000000"
        {...props}
    >
        <G id="SVGRepo_bgCarrier" strokeWidth={0} />
        <G
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <G id="SVGRepo_iconCarrier">
            <G>
                <Circle
                    cx={16}
                    cy={16}
                    fill="none"
                    r={15}
                    stroke="#ffffff"
                    strokeLinejoin="round"
                    strokeMiterlimit={10}
                    strokeWidth={2}
                />
                <Path
                    d="M26,27L26,27 c0-5.523-4.477-10-10-10h0c-5.523,0-10,4.477-10,10v0"
                    fill="none"
                    stroke="#ffffff"
                    strokeLinejoin="round"
                    strokeMiterlimit={10}
                    strokeWidth={2}
                />
                <Circle
                    cx={16}
                    cy={11}
                    fill="none"
                    r={6}
                    stroke="#ffffff"
                    strokeLinejoin="round"
                    strokeMiterlimit={10}
                    strokeWidth={2}
                />
            </G>
        </G>
    </Svg>
);
export default ProfileIcon;
