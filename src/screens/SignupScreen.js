import React, { useContext, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignupScreen = () => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);

  useFocusEffect(
    useCallback(() => {
      return () => {
        clearErrorMessage();
      };
    }, [])
  );

  return (
    <View style={styles.container}>
      <AuthForm
        headerText='Sign Up for Tracker'
        errorMessage={state.errorMessage}
        submitButtonText='Sign Up'
        onSubmit={signup}
      />
      <NavLink
        text='Already have an account? Sign in instead!'
        routeName='Signin'
      />
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250
  }
});
