import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Text, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PoiDetailScreen from './PoiDetailScreen';  // Importar la nova pantalla de detalls

const POIs = [
  {
    id: 1,
    name: "Parc Güell",
    description: "Un parc públic amb jardins i elements arquitectònics a Barcelona.",
    coordinates: {
      latitude: 41.4145,
      longitude: 2.1527
    },
    image: "https://fastly.picsum.photos/id/1/200/300.jpg?hmac=jH5bDkLr6Tgy3oAg5khKCHeunZMHq0ehBZr6vGifPLY"
  },
  // Més POIs aquí...
];

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  const [pois, setPois] = useState(POIs);

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={{
        latitude: 41.3879,
        longitude: 2.16992,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1,
      }}>
        {pois.map((poi) => (
          <Marker
            key={poi.id}
            coordinate={poi.coordinates}
            title={poi.name}
            description={poi.description}
            onPress={() => navigation.navigate('PoiDetail', { poi })}
          />
        ))}
      </MapView>

      <FlatList
        data={pois}
        keyExtractor={(item) => item.id.toString()}
        style={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity 
            onPress={() => navigation.navigate('PoiDetail', { poi: item })} 
            style={styles.listItem}
          >
            <Text style={styles.listItemText}>{item.name}</Text>
            <Text>{item.description}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="PoiDetail" component={PoiDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 2,
  },
  list: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  listItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  listItemText: {
    fontWeight: 'bold',
  },
});
