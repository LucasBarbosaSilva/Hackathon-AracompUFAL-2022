import React, { Component } from 'react';
import { FlatList, Image, Text } from 'react-native';

interface ListProps = {
    data : amy
}
export const List = (props: ListProps) => {
      return (
        <FlatList data = {props.data} renderItem = {({item}) => /*<Text style={styles.item}*/>{item.key}>
        </FlatList>
    );
}