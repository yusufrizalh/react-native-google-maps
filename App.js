import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';

export default class App extends Component {
  render() {
    return (
      <View style={styles.MainContainer}>
        <MapView style={styles.mapStyle}
          showUserLocation={false}
          zoomEnable={true}
          zoomControlEnabled={true}
          initialRegion={{
            latitude: -7.333088,
            longitude: 112.789529,
            latitudeDelta: 0.09,
            longitudeDelta: 0.04,
          }}>
            <Marker
              coordinate={{ latitude: -7.333088, longitude: 112.789529 }}
              title={"UPN Veteran"}
              description={"Universitas Pembangunan Nasional Veteran Surabaya"}
             />
          </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  mapStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
