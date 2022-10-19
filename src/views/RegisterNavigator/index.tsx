import React from 'react'
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native'
//import {Text} from '../../components'
import MaterialsIcon from 'react-native-vector-icons/MaterialIcons';
import { Fumi, Madoka } from 'react-native-textinput-effects';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Checkbox from '@mui/material/Checkbox';
import imageURL from '../../../assets/logo.png'
import * as S from './style'
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export const RegisterPointScreen = () => {
    const window = useWindowDimensions()
    return (
        <View style = {{paddingHorizontal: 20, height:window.height, justifyContent:'center'}}>
        <S.Logo source={imageURL} />
        <Fumi
            style={styles.container}
            label={'Nome do estabelecimento'}
            // this is used as active and passive border color
            inputPadding={16}

            iconClass={FontAwesomeIcon}
            iconName={'university'}
            iconColor={'#f95a25'}
            iconSize={20}
            iconWidth={40}
            inputPadding={16}
        />
        <Fumi
            style={styles.container}
            label={'CEP'}
            // this is used as active and passive border color
            iconClass={FontAwesomeIcon}
            iconName={'university'}
            iconColor={'#f95a25'}
            iconSize={20}
            iconWidth={40}
            inputPadding={16}
        />
        <Fumi
            style={styles.container}
            label={'Rua'}
            // this is used as active and passive border color
            iconClass={FontAwesomeIcon}
            iconName={'university'}
            iconColor={'#f95a25'}
            iconSize={20}
            iconWidth={40}
            inputPadding={16}
        />
        <Fumi
            style={styles.container}
            label={'Numero'}
            // this is used as active and passive border color
            iconClass={FontAwesomeIcon}
            iconName={'university'}
            iconColor={'#f95a25'}
            iconSize={20}
            iconWidth={40}
            inputPadding={16}
        />
        <Fumi
            style={styles.container}
            label={'Checkboxes'}
            // this is used as active and passive border color
            iconClass={FontAwesomeIcon}
            iconName={'university'}
            iconColor={'#f95a25'}
            iconSize={20}
            iconWidth={40}
            inputPadding={16}
        />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      padding:15,
      marginBottom:10,
      borderColor: '#A5F1D9',
      borderWidth: 1,
      borderRadius: 10
    }
});