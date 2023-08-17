import { StyleSheet, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import React from 'react';

const SignupScreen = () => {
  const navigation = useNavigation();

  return (
    <>
      <Text>SignupScreen</Text>
      <Button
        title='Go to Signin'
        onPress={() => navigation.navigate('Signin')}
      />

      <Button
        title='Go to main flow'
        onPress={() => navigation.navigate('mainFlow')}
      />
    </>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({});
