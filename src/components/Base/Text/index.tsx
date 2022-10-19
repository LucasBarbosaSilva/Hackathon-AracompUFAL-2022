import * as React from 'react';
import * as S from './style'


interface IText {
  color?: string
  font?: string;
  size?: string;
  testID?: string;
  numberOfLines?: number;
  children: string

}

export const Text: React.FC<IText> = ({
  color = 'textPrimary',
  font = 'Regular',
  size = 'default',
  ...props
}) => {
  return <S.Text {...props} font={font} color={color} size={size}>{props.children}</S.Text>;
}