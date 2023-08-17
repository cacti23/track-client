import { StyleSheet, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import React from 'react';

const SigninScreen = () => {
  const navigation = useNavigation();

  return (
    <>
      <Text>SigninScreen</Text>
      <Button
        title='Go to Signin'
        onPress={() => navigation.navigate('Signup')}
      />
    </>
  );
};

export default SigninScreen;

const styles = StyleSheet.create({});
