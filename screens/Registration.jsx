import React from 'react';
import { StyleSheet, Image, TouchableWithoutFeedback, SafeAreaView, View, Keyboard } from 'react-native';
import { Icon, Layout, Text, Input, Button } from '@ui-kitten/components';
import Firebase from '../util/Firebase.js';
import MainContext from '../context/MainContext.js';

const Registration = ({ navigation }) => {
  //Handles the creation of new user account
  const { handleRegister } = React.useContext(MainContext);
  //For the email address
  const [email, setEmail] = React.useState(null);

  //For the password
  const [password, setPassword] = React.useState('');
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const AlertIcon = (props) => (
    <Icon {...props} name='alert-circle-outline' />
  );

  // Alternating between showing password and hiding it (activated via eye icon)
  const renderIcon = (props) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
    </TouchableWithoutFeedback>
  );

// For prompting user with creating a stronger password
  const renderCaption = () => {
    return (
      <View style={styles.captionContainer}>
        {AlertIcon(styles.captionIcon)}
        <Text style={styles.captionText}>Should contain at least 6 characters</Text>
      </View>
    )
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white'  }}>
        <Layout style={{ flex: 1, alignItems: 'center' }}>
          <Text style={{ color: 'black', marginTop: '10%', marginBottom: '35%', fontSize: 50 }} category='h1'>Sign Up</Text>

          <Input
            style={styles.input}
            autoCapitalize='none'
            placeholder='Email Address'
            keyboardType={'email-address'}
            email={email}
            setEmail={setEmail}
            onChangeText={(email) => setEmail(email)}
          />

          {/* Password text input */}
          <Input
            style={styles.input}
            password={password}
            secureTextEntry{...true} //Concealing password for security reasons
            accessoryRight={renderIcon}
            placeholder='Password'
            caption={renderCaption}
            setPassword={setPassword}
            onChangeText={(password) => setPassword(password)}
          />

          {/* Login button */}
          <Button 
          style={styles.button} 
          appearance='filled' 
          size='large'
          onPress={() => navigation.navigate('Home')}
          >
            Create New Account
          </Button>


          {/* Log in with X account */}

        </Layout>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );

}

const styles = StyleSheet.create({
  input: {
    margin: 10,
    width: '85%'
  },
  captionIcon: {
    width: 10,
    height: 10,
  },

  button: {
    marginTop: '50%',
    backgroundColor: 'black',
    width: '85%'
  },
  forgot: {
    margin: '5%',
    color: 'black',
    textDecorationLine: 'underline'
  },
  captionContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  captionText: {
    marginTop: 5,
    fontSize: 12,
    fontWeight: 'bold',
    color: "black",
  }

});

export default Registration;