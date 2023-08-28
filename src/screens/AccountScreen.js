import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Button } from '@rneui/themed';
import { SafeAreaView } from 'react-native-safe-area-context';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);
  return (
    <SafeAreaView>
      <View>
        <Text>AccountScreen</Text>
        <Spacer>
          <Button title='Sign Out' onPress={signout} />
        </Spacer>
      </View>
    </SafeAreaView>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({});
