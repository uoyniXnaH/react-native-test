import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as Permissions from 'expo-permissions';

export default function App() {
  // const [hasPermission, setHasPermission] = useState(false);
  const [permission, askForPermission] = Permissions.usePermissions(Permissions.CAMERA, {ask: true});
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [scanned, setScanned] = useState(false);
  const [autoFocus, setAutoFocus] = useState(true);
  const [zoom, setZoom] = useState(0);
  const [whiteBal, setWhiteBal] = useState(0);
  const [focusDepth, setFocusDepth] = useState(0);

  const whiteBalanceEnum = [
    Camera.Constants.WhiteBalance.auto,
    Camera.Constants.WhiteBalance.continuous
  ];

  const switchZoom = () => {
    var z = zoom + 0.25;
    if (z > 1) z = 0;
    setZoom(z);
  }

  const switchFocusDepth = () => {
    var z = focusDepth + 0.25;
    if (z > 1) z = 0;
    setFocusDepth(z);
  }

  const switchWhiteBalance = () => {
    var z = whiteBal + 1;
    if (z > 1) z = 0;
    setWhiteBal(z);
  }

  const handleScanned = ({type, data}) => {
    setScanned(true);
    alert(`Get: ${data}`);
  }

  if (permission === null) {
    return <View />;
  }
  if (permission?.status !== "granted") {
    askForPermission();
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      <View style={styles.camContainer}>
        <Camera
          type={type}
          autoFocus={autoFocus}
          zoom={zoom}
          whiteBalance={whiteBalanceEnum[whiteBal]}
          focusDepth={focusDepth}
          barCodeScannerSettings={{
            barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr],
          }}
          onBarCodeScanned={scanned ? undefined : handleScanned}
        >
          <Text>0.0.8</Text>
        </Camera>
        {scanned && <Button title={'Try again'} onPress={()=>{setScanned(false)}} />}
        {!scanned && <Button title={'waiting...'} onPress={()=>alert("waiting...")} />}
      </View>
      <View style={styles.paramContainer}>
          <TouchableOpacity style={styles.button} onPress={() => setAutoFocus(!autoFocus)}>
            <Text style={styles.param}>Auto focus: {autoFocus ? "ON" : "OFF"}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={switchFocusDepth}>
            <Text style={styles.param}>Focus depth: {focusDepth}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={switchZoom}>
            <Text style={styles.param}>Zoom: {zoom}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={switchWhiteBalance}>
            <Text style={styles.param}>White balance:</Text>
            <Text style={styles.param}>{whiteBalanceEnum[whiteBal]}</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center'
  },
  camContainer: {
    width: '100%',
    height: '70%'
  },
  paramContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  button: {
    width: '45%',
    maxWidth: '45%',
    height: 60,
    marginTop: 12,
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#1572a1',
    borderRadius: 12
  },
  param: {
    color: 'white'
  }
});
