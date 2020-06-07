import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';

import styles from '../styles/LoginStyles';

const Login = ({ navigation, route: { params } }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState();

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: process.env.GOOGLE_WEB_CLIENT_ID,
      offlineAccess: true,
      forceCodeForRefreshToken: true,
      accountName: '',
    });
  }, [])

  googleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const info = await GoogleSignin.signIn();

      params.setAuth(true)
      params.setUser(info);

      navigation.navigate('Main');
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        setErrorMessage('Sign in has been cancelled. Please try again.');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else {
        // some other error happened
        setErrorMessage(error);
      }
    }
  };

  return (
    <View>
      <View style={styles.loginContainer}>
      <Text style={styles.title}>Macro Recipe Suggester</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(newText) => setEmail(newText)}
          placeholder="Email"
          textContentType="emailAddress"
        />
        <TextInput
          style={styles.textInput}
          onChangeText={(newText) => setPassword(newText)}
          placeholder="Password"
          textContentType="password"
        />
        <TouchableOpacity style={styles.btnContainer}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        <Text>{errorMessage}</Text>
      </View>
        <GoogleSigninButton 
          style={styles.googleButton}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={googleSignIn}
        />
      <Text style={styles.createAccountText}>
        Don't have an account? Sign up <Text style={styles.signUpSpan}>here</Text>
      </Text>
    </View>
  )
}

export default Login;