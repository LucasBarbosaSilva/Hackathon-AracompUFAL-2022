import styled from 'styled-components/native'
import * as imageURL from '../../../assets/logo.png'
import {Image} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';

interface themeProp {
    theme: any
}

export const Container = styled.View<themeProp>`
flex: 1;
justify-content: center;
align-items: center;
background-color: ${({ theme }) => theme.colors.bg}
`

export const LogoContainer = styled.View``

export const Logo = styled(Image)`
    margin-top: 89px;
    margin-bottom: 49px;
    width: 168px;
    height: 32px;

`
export const InputsColumn = styled.View`
    flex:1;
    width:100%;
`


