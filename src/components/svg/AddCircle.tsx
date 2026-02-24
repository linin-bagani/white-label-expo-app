import Svg, { SvgProps, Path, Circle } from 'react-native-svg';

export default function AddCircle(props: SvgProps) {
  return (
    <Svg
      width="61"
      height="61"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}>
      <Circle cx="12" cy="12" r="10" />
      <Path d="M12 8v8" fill="currentColor" />
      <Path d="M8 12h8" fill="currentColor" />
    </Svg>
  );
}
