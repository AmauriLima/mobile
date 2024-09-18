/* eslint-disable react/react-in-jsx-scope */
import Svg, { Circle, ClipPath, Defs, G, Path } from 'react-native-svg';

export function UserIcon() {
  return (
    <Svg width={100} height={100} viewBox="0 0 100 100">
      <G fill="#000" clipPath="url(#a)">
        <Circle cx={50} cy={100} r={50} />
        <Circle cx={50} cy={26} r={20} />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h100v100H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
