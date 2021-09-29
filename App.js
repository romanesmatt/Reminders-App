import React from 'react';
import * as eva from '@eva-design/eva';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import firebase from 'firebase/app';
import Firebase from './util/Firebase.js';
import MainContext from './context/MainContext.js';
import IntroPage from './screens/IntroPage.jsx';
import Login from './screens/Login.jsx';
import Registration from './screens/Registration.jsx';
import Home from './screens/Home.jsx';
import NoteScreen from './screens/NoteScreen.jsx';
import AddNote from './screens/AddNote.jsx';
import ConfirmationScreen from './screens/ConfirmationScreen.jsx';

// Create app's navigation stack
const Stack = createStackNavigator();

export default function App() {
  // Checking for app's length before initializing 
  if (!firebase.apps.length) {
    firebase.initializeApp(Firebase);
  }

  // Setting default state when app loads
  const [userLogged, setUserLogged] = React.useState(false);
  const [userProfile, setUserProfile] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const authListener = firebase.auth().onAuthStateChanged((user) => {
      setUserLogged(user ? true : false)
      setIsLoading(false);
      setUserProfile(user);

    });
    return authListener;
  }, []);

  // Handles user login
  const doLogin = async (email, password) => {
    setIsLoading(true);
    Firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => console.log(error));
  }
// Handles user registration
  const doRegister = async (email, password) => {
    setIsLoading(true);
    Firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((error) => console.log(error));
  }

  // Allows for global usage of data by other components in the app
  const mainC = React.useMemo(
    () => ({
      userProfile: { userProfile },
      signOutUser: () => Firebase.auth().signOut(),
      handleLogin: (email, password) => {
        doLogin(email, password);
      },
      handleRegister: (email, password) => {
        doRegister(email, password);
      },
    }),
    []
  );

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <MainContext.Provider value={mainC}>
        <ApplicationProvider {...eva} theme={eva.light}>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName='Introduction'
            >
              <Stack.Screen
                options={{ headerShown: false }} s
                name='Introduction'
                component={IntroPage} />
              <Stack.Screen
                options={{ title: null }}
                name='Login' component={Login} />
              <Stack.Screen
                options={{ title: null }}
                name='Registration'
                component={Registration} />
              <Stack.Screen
                options={{
                  title: null,
                  headerShown: false
                }}
                name='Home'
                component={Home} />
                <Stack.Screen
                options={({route})=>{
                  return({
                    title: route.params.title,
                    headerStyle: { backgroundColor: route.params.colour },
                    headerTintColor: 'white'
                  })
                }}
                  name='NoteScreen' 
                  component={NoteScreen}
                />
                <Stack.Screen
                options={{title: null}} 
                name='AddNote'
                component={AddNote}
                />
                <Stack.Screen
                options={{title: null}} 
                name='ConfirmationScreen'
                component={ConfirmationScreen}
                />
            </Stack.Navigator>
          </NavigationContainer>
        </ApplicationProvider>
      </MainContext.Provider>
    </>
  );
}