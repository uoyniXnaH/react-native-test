import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import QrReader from 'react-qr-reader';

function QrReaderComp() {
  const handleScan = (data: string | null) => {
    alert('Got: ' + data);
  };

  const handleError = ({ err }) => {
    alert('Error: ' + err);
  };
  return(
    React.createElement('QrReader',
    {
      delay: 300,
      onError: handleError,
      onScan: handleScan
    })
  )
}

export default function App() {
  // const handleScan = (data: string | null) => {
  //   alert('Got: ' + data);
  // };

  // const handleError = ({ err }) => {
  //   alert('Error: ' + err);
  // };

  return (
    <View style={Styles.container}>
      <Text>s1</Text>
      <QrReaderComp />
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    width: '100%',
  },
});
