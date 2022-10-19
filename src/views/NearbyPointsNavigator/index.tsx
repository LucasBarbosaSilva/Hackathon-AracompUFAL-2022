import React from 'react';

import { Text, View } from 'react-native';
import * as S from './style'
import { List } from '../../components'
import imageURL from '../../../assets/logo.png'
import { useLocations } from '../../hooks/Locations'



export const NearbyPoints = () => {
  const { locations } = useLocations()

  return (
    <S.Container>
      <S.LogoContainer>
        <S.Logo source={imageURL} />
      </S.LogoContainer>
      <S.InputsColumn>
        <List data={locations}/>
      </S.InputsColumn>
    </S.Container>
  );
}