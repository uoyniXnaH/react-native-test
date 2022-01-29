import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function App() {
  const [hasPermission, setHasPermission] = useState(false);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [scanned, setScanned] = useState(false);
  const [autoFocus, setAutoFocus] = useState(true);
  const [zoom, setZoom] = useState(0);
  const [whiteBal, setWhiteBal] = useState(0);
  const [focusDepth, setFocusDepth] = useState(0);

  const whiteBalanceEnum = [
    Camera.Constants.WhiteBalance.auto,
    Camera.Constants.WhiteBalance.cloudy,
    Camera.Constants.WhiteBalance.continuous,
    Camera.Constants.WhiteBalance.fluorescent,
    Camera.Constants.WhiteBalance.incandescent,
    Camera.Constants.WhiteBalance.shadow,
    Camera.Constants.WhiteBalance.sunny,
  ];

  const switchZoom = () => {
    var z = zoom + 0.25;
    if (z > 1) z = 0;
    setZoom(z);
  }

  const switchFocusDepth = () => {
    var z = focusDepth + 0.25;
    if (z > 1) z = 0;
    setZoom(z);
  }

  const switchWhiteBalance = () => {
    var z = whiteBal + 1;
    if (z > 6) z = 0;
    setWhiteBal(z);
  }

  const handleScanned = ({type, data}) => {
    setScanned(true);
    alert(`Get: ${data}`);
  }

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
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
            Auto focus: {autoFocus ? "ON" : "OFF"}
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={switchFocusDepth}>
            Focus depth: {focusDepth}
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={switchZoom}>
            Zoom: {zoom}
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={switchWhiteBalance}>
            White balance: {whiteBalanceEnum[whiteBal]}
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
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  button: {
    width: '40%',
    height: 36,
    backgroundColor: '#1572a1',
    borderRadius: 6
  }
});
