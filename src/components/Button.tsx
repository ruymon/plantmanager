import React from 'react';
import {
    StyleSheet, 
    TouchableOpacity, 
    Text
} from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Button(){
    return(
        <TouchableOpacity style={styles.container}>
            <Text style={styles.texto}>
                Confirmar
            </Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.green,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16
    },
    texto: {
        fontSize: 16,
        fontFamily: fonts.heading,
        color: colors.white,
    }
})