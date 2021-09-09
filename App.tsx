import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function DatePicker() {
  return(
    React.createElement("input",
    {
      type: "date",
      name: "target"
    })
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Sample text</Text>
      <DatePicker />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
