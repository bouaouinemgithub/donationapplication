
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
const responsiveFontSize = (size) => {
  const baseWidth = 375; // Width of the design mockup
  const scale = width / baseWidth;
  const newSize = size * scale;
  return newSize;
};
const fontSizes = {
  minsmall: responsiveFontSize(11),
  small: responsiveFontSize(14),
  medium: responsiveFontSize(18),
  large: responsiveFontSize(24),
  extraLarge: responsiveFontSize(30),
};
const colors = {
    primary:{
      default :"#8FE1D7",
      "100":"#23B8A6",
      "200": "#E7FFF9",
      "300": '#D6E2DF'
    },
    secondary: {
      default :'#A1A1A1',
      "100":'#909090'
    },
    dark: '#000000',
    danger: '#FF0000',
    success: '#C4C4C4',
    white: '#FFFFFF',
    light:"#707070",
    baground:"#F4F0F1",
    blue:'#0085FF'
  };
const fontStyles = {
    // Polices par défaut
    defaultFontFamily: 'Roboto',
    // Styles de police
    regular: {
      fontFamily: 'Roboto-Regular',
    },
    bold: {
      fontFamily: 'Roboto-Bold',
      fontWeight: 'bold',
    },
    italic: {
      fontFamily: 'Roboto-Italic',
      fontStyle: 'italic',
    }
  };
  export default {
    colors,
    fontSizes,
    fontStyles
  };
  