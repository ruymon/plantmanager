import React, { useState } from 'react';
import { 
    SafeAreaView, 
    StatusBar, 
    StyleSheet, 
    View, 
    Text,
    TextInput,
    KeyboardAvoidingView,
    Platform
} from 'react-native';

import { Button } from '../components/Button';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function UserIdentification(){
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const [name, setName] = useState<string>();

    function handleInputBlur() {
        setIsFocused(false);
        setIsFilled(!!name);
    };

    function handleInputFocus() {
        setIsFocused(true);
    };

    function handleInputChange(value: string){
        setIsFilled(!!value);
        setName(value)
    };

    return(
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />

            <KeyboardAvoidingView 
                style={styles.container} 
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >

                <View style={styles.content}>
                    <View style={styles.form}>
                        <View style={styles.header}>
                            <Text style={styles.emoji}>
                                { isFilled ? '😄' : '😀' }
                            </Text>

                            <Text style={styles.title}>
                                Como podemos {'\n'}
                                chamar você ?
                            </Text>
                        </View>

                        <TextInput 
                            style={[
                                styles.input,
                                (isFocused || isFilled) && { borderColor: colors.green }
                            ]} 
                            placeholder="Digite seu nome"
                            onBlur={handleInputBlur}
                            onFocus={handleInputFocus}
                            onChangeText={handleInputChange}
                        />

                        <View style={styles.footer}>
                            <Button />
                        </View>

                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    content: {
        flex: 1,
        width: '100%'
    },
    form: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 54,
    },
    header: {
        alignItems: 'center'
    },
    emoji: {
        fontSize: 44
    },
    title: {
        fontSize: 24,
        fontFamily: fonts.heading,
        lineHeight: 32,
        textAlign: 'center',
        color: colors.heading,
        marginTop: 20
    },
    input: {
        borderBottomWidth: 1,
        borderColor: colors.gray,
        color: colors.heading,
        width: '100%',
        fontSize: 18,
        marginTop: 50,
        padding: 10,
        textAlign: 'center'
    },
    footer: {
        width: '100%',
        marginTop: 40,
        paddingHorizontal: 20
    }
})