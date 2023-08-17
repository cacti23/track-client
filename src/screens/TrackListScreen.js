import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import React from 'react';

const TrackListScreen = () => {
  const navigation = useNavigation();

  return (
    <>
      <Text>TrackListScreen</Text>
      <Button
        title='Go to Track Detail'
        onPress={() => navigation.navigate('TrackDetail')}
      />
    </>
  );
};

export default TrackListScreen;

const styles = StyleSheet.create({});
