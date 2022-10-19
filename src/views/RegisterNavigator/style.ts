import styled from 'styled-components/native'
import * as imageURL from '../../../assets/logo.png'
import {Image} from 'react-native'

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
    width: 168px;
    height: 32px;

`
export const InputsColumn = styled.View``
