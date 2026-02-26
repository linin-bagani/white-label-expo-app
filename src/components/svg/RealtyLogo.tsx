import Svg, { Text as SvgText, TSpan } from 'react-native-svg';
import { SvgProps } from 'react-native-svg';

type Props = SvgProps & {
  textColor?: string;
};

/**
 * Brand Two Logo - REALTY
 * 
 * This is the logo for Brand Two (Realty brand)
 * 
 * CUSTOMIZATION:
 * To change the text, edit line 20:
 *   Change "REALTY" to your desired brand name
 * 
 * @param textColor - Text color (defaults to white)
 */
export default function RealtyLogo({ textColor = 'white', ...rest }: Props) {
  return (
    <Svg width="164" height="30" viewBox="0 0 164 30" fill="none" {...rest}>
      {/* Purple Circle Icon with "R" */}
      <SvgText x="0" y="22" fontSize="24" fontWeight="bold">
        <TSpan fill="#7C3AED">R</TSpan>
      </SvgText>
      
      {/* Brand Name Text - "REALTY" */}
      <SvgText 
        x="28" 
        y="20" 
        fontSize="18" 
        fontWeight="600" 
        fill={textColor}
        fontFamily="System"
      >
        REALTY
      </SvgText>
    </Svg>
  );
}
