import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Icon } from '@ui-kitten/components';


const FloatingButton = () => {
    return (
        <SafeAreaView>
            <Icon
                style={styles.icon}
                fill='black'
                name='plus-circle'
            />
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    icon: {
        width: 90,
        height: 90,
        position: 'absolute',
        bottom: 10,
        right: 10,
    }
})

export default FloatingButton;