import React from 'react'
import {Text} from '../Base'
import * as S from './style'

interface ListItemProps {

    title: string;
    description: string;
    address: string;
    coordinates: {
        latitude: number;
        longitude: number;
    };
    userDistance: number;
    type: string;

}

export const ListItem = ({item}: ListItemProps) => {


    const iconNames = {
        battery: 'battery-empty',
        eletronic: 'mobile',
        lamp: 'lightbulb'
    }


    return (
        <S.Card>
            <S.ContentCard>
                <S.IconContainer><S.TypeIcon color={'#35B78E'} name={iconNames[item.type]}/></S.IconContainer>
                <Text size={'small'}>{item.title}</Text>
                <Text size={'small'}>{item.address.split(',')[0]}</Text>
                <Text size={'small'}>{`${item.userDistance} KM`}</Text>
                
            </S.ContentCard>
        </S.Card>
    )
}