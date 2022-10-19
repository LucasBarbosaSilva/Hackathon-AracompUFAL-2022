import styled from 'styled-components/native';
import { Text as TextBase } from 'react-native';


 interface IText {
  color?: string
  font?: string;
  size?: string;
  testID?: string;
  numberOfLines?: number;
  theme: object
}

  export const Text = styled(TextBase)<IText>`
    color: ${({ color, theme }) => theme.colors[color || 'text']};
    font-size: ${({ size,theme }) => theme.fontSizes[size || 'default']};
    
  `
