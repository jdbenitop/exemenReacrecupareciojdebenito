import React from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';

const PoiDetailScreen = ({ route, navigation }) => {
  const { poi } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{poi.name}</Text>
      {poi.image && (
        <Image source={{ uri: poi.image }} style={styles.poiImage} />
      )}
      <Text style={styles.description}>{poi.description}</Text>
      <Button title="Tornar al mapa" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  poiImage: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
});

export default PoiDetailScreen;
