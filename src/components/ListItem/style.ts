import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

interface themeProps {
    theme: any
}

export const Card = styled.View `
    min-height: 178px;
    width: 100%;
    border: 1px solid ${
    ({theme}) => theme.colors.lightPrimary
};
    border-radius: 10px;
    margin-bottom: 10px;
    padding: 24px;
  `

export const ContentCard = styled.View `


`

export const IconContainer = styled.View `
    align-items: center;
    justify-content: center;
    height: 50px;
    width:  50px;
    border-radius: 10px;
    background-color: ${
    ({theme}) => theme.colors.lightPrimary
};
    margin-bottom: 12px;

`

export const TypeIcon = styled(Icon).attrs({
    size: 25
})``

