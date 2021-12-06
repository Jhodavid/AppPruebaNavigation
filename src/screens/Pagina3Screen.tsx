import { useNavigation } from '@react-navigation/core';
import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any>{};

export const Pagina3Screen = ({navigation}: Props) => {

    return (
        <View>
            <Text style={styles.title}>Pagina3Screen</Text>
            
            <Button
                title="Regresar"
                onPress={ () => navigation.pop()}
            />

            <Button
                title="Ir al Home"
                onPress={ () => navigation.popToTop()}
            />
        </View>

    )
}
