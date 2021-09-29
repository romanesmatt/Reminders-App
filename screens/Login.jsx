import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, SafeAreaView, Keyboard } from 'react-native';
import { Icon, Layout, Text, Input, Button } from '@ui-kitten/components';
import Firebase from '../util/Firebase.js';
import MainContext from '../context/MainContext.js';

//Firebase
const Login = ({ navigation }) => {
  //To handle the login process
  const { handleLogin } = React.useContext(MainContext);
  //For the username
  const [email, setEmail] = React.useState('');
  //For the password
  const [password, setPassword] = React.useState('');
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

  //Handling of user authentication
  const { currentUser } = Firebase.auth();
  const { signOutUser } = React.useContext(MainContext);
  const { inHome } = React.useContext(MainContext);

  // Alternating between showing password and hiding it (activated via eye icon
  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderIcon = (props) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
    </TouchableWithoutFeedback>
  );

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white'  }}>
        <Layout style={{ flex: 1, alignItems: 'center' }}>
          <Text style={{ color: 'black', marginTop: '30%', marginBottom: '40%', fontSize: 50 }} category='h1'>Log In</Text>

          {/* Username text input */}
          <Input
            style={styles.input}
            autoCapitalize='none'
            email={email}
            keyboardType={'email-address'}
            placeholder='Email Address'
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
            secureTextEntry={secureTextEntry}
            onChangeText={(password) => setPassword(password)}
          />

          {/* Login button */}
          <Button
            style={styles.button}
            appearance='filled'
            size='large'
            // onPress={() => handleLogin(email, password)}
            onPress={() => navigation.navigate('Home')}
          >
            Log In
          </Button>

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
    marginRight: 5
  },

  button: {
    marginTop: '35%',
    backgroundColor: 'black',
    width: '85%'
  },
  forgot: {
    margin: '5%',
    color: 'black',
    textDecorationLine: 'underline'
  }

});

export default Login;