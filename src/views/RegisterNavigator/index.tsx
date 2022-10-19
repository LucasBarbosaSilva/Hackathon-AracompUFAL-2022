import React from 'react'
import * as S from './style'
import imageURL from '../../../assets/logo.png'


export const RegisterPointScreen = () => {
    return (
        <S.Container>
            <S.LogoContainer>
             <S.Logo source={imageURL}/>
            </S.LogoContainer>
            <S.InputsColumn>
                {/* <Input/> */}
            </S.InputsColumn>
        </S.Container>)
}

