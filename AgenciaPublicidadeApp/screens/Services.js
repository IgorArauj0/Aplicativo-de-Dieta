import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Services() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nossos Serviços</Text>
      <Text style={styles.service}>• Criação de Campanhas Publicitárias</Text>
      <Text style={styles.service}>• Gestão de Redes Sociais</Text>
      <Text style={styles.service}>• Branding e Identidade Visual</Text>
      <Text style={styles.service}>• Consultoria de Marketing</Text>
    </View>
  );
}









const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  service: {
    fontSize: 18,
    marginVertical: 10,
    color:'white',
  },
});
