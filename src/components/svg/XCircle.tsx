import Svg, { SvgProps, Path, Circle } from 'react-native-svg';

export default function XCircle(props: SvgProps) {
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
      <Path d="m15 9-6 6" fill="currentColor" />
      <Path d="m9 9 6 6" fill="currentColor" />
    </Svg>
  );
}
