import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function Portfolio() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Cursos</Text>
      <Image source={require('../assets/icon.png')} style={styles.image} />
      <Image source={require('../assets/icon.png')} style={styles.image} />
      {/* Adicione mais imagens conforme necessário */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor:'#3e3e53',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'white',
  },
  image: {
    width: 300,
    height: 200,
    marginVertical: 10,
  },
});
