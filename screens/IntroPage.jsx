import React from 'react';
import { StyleSheet, Image, SafeAreaView } from 'react-native';
import { Icon, Layout, Text, Button } from '@ui-kitten/components';

const IntroPage = ({ navigation }) => {

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <Layout style={{ flex: 1, alignItems: 'center'  }}>
                <Text style={{ color: 'black', marginTop: '20%', marginBottom: '90%', fontSize: 65 }} category='h1'>Reminders</Text>
                <Image style={styles.illustration} source={require('../assets/images/illustration.png')} />
                <Button style={styles.buttonOne}
                    appearance='filled'
                    size='large'
                    onPress={() => navigation.navigate('Login')}>
                    Log In
                </Button>
                <Button style={styles.buttonTwo}
                    appearance='filled'
                    size='large'
                    onPress={() => navigation.navigate('Registration')}>
                    Sign Up
                </Button>
            </Layout>
        </SafeAreaView>
    );


}

const styles = StyleSheet.create({
    illustration: {
        marginTop: 0,
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        position: 'absolute',
    },
    buttonOne: {
        marginTop: '25%',
        backgroundColor: 'black',
        width: '85%'
    },
    buttonTwo: {
        marginTop: '3%',
        backgroundColor: 'black',
        width: '85%'
    }



})

export default IntroPage;