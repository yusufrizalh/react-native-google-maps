import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
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

const markerImg = require('./imgs/compass.png');

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: [
        {
          title: 'UPN Veteran',
          description: 'Universitas Pembangunan Nasional Veteran Surabaya',
          coordinates: {
            latitude: -7.333088,
            longitude: 112.789529,
          },
        },
        {
          title: 'Perumahan Puri Mas',
          description: 'Perumahan di Daerah Rungkut Surabaya',
          coordinates: {
            latitude: -7.336288,
            longitude: 112.785726,
          },
        },
        {
          title: 'Richeese Factory Rungkut Madya',
          description: 'Rumah Makan Cepat Saji di Rungkut',
          coordinates: {
            latitude: -7.3018866951694,
            longitude: 112.77376851432145,
          },
        },
      ],
    };
  }

  render() {
    return (
      <View style={styles.MainContainer}>
        <MapView
          style={styles.mapStyle}
          showsUserLocation={true} 
          showsMyLocationButton={true}
          zoomEnable={true}
          zoomControlEnabled={true}
          minZoomLevel={5} 
          maxZoomLevel={15} 
          initialRegion={{
            latitude: -7.3333751,
            longitude: 112.7894965,
            latitudeDelta: 0.09,
            longitudeDelta: 0.04,
          }}>
          {/* <Marker onPress={(event) => console.log(event.nativeEvent.coordinate)} 
              coordinate={{ latitude: -7.333088, longitude: 112.789529 }}
              pinColor={'#abc555'}
              title={"UPN Veteran"}
              description={"Universitas Pembangunan Nasional Veteran Surabaya"}
             />

             <Marker onPress={(event) => console.log(event.nativeEvent.coordinate)} 
              coordinate={{ latitude: -7.336288, longitude: 112.785726 }}
              pinColor={'#cba567'}
              title={"Perumahan Puri Mas"}
              description={"Perumahan di Daerah Rungkut Surabaya"}
             />

             <Marker onPress={(event) => console.log(event.nativeEvent.coordinate)} 
              coordinate={{ latitude: -7.3018866951694, longitude: 112.77376851432145 }}
              pinColor={'#6432ed'}
              title={"Richeese Factory Rungkut Madya"}
              description={"Richeese Factory Rungkut Madya"}
             />

             <Marker onPress={(event) => console.log(event.nativeEvent.coordinate)} 
              coordinate={{ latitude: -7.35055039401, longitude: 112.78773745867933 }}
              title={"Kebun Bibit Wonorejo"}
              description={"Kebun Bibit Wonorejo"}
             /> */}

            {
              this.state.markers.map(marker => (
                <Marker
                  coordinate={marker.coordinates} 
                  title={marker.title} 
                  description={marker.description} 
                  pinColor={'#6432ed'} 
                  image={markerImg} 
                  centerOffset={{ x: -18, y: -60 }}
                  anchor={{ x: 0.69, y: 1 }} 
                  onpress={() => this.setState({ marker1: !this.state.marker1 })}
                 />
              ))
            }
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
    width: '100%',
    height: '100%',
  },
});
