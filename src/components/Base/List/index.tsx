import React from "react";
import { FlatList } from "react-native";
import { ListItem } from '../../ListItem'
import * as S from './style'

interface ListProps {
    data : any
}

export const List = (props : ListProps) => {
    return (
        <S.List  data={props.data} renderItem={ListItem} />
    )
}