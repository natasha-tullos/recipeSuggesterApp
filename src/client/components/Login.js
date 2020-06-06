import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
} from 'react-native';

import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';

import styles from '../styles/LoginStyles';

const Login = () => {
  const [userInfo, setUserInfo] = useState();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState();

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '826816749575-ghb3bfktonjsv2d05ug32ajsk8e07cvo.apps.googleusercontent.com',
      offlineAccess: true,
      forceCodeForRefreshToken: true,
      accountName: '',
    });
  }, [])

  googleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const info = await GoogleSignin.signIn();

      console.warn({userInfo: info});

      setUserInfo(info);
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
      <Text style={styles.loginText}>Login</Text>
      <View style={styles.loginContainer}>
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
        <GoogleSigninButton 
          style={styles.googleButton}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={googleSignIn}
        />
      </View>
      <Text style={styles.createAccountText}>
        Don't have an account? Sign up <Text style={styles.signUpSpan}>here</Text>
      </Text>
    </View>
  )
}

export default Login;