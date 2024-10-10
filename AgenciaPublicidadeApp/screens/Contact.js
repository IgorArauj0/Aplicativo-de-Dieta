import React from 'react';
import { View, Text, StyleSheet, Button, Linking } from 'react-native';

export default function Contact() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Entre em Contato</Text>
      <Text style={styles.contact}>Telefone: (11) 1234-5678</Text>
      <Text style={styles.contact}>Email: contato@agenciaxyz.com</Text>
      <Button title="Visite nosso site" onPress={() => Linking.openURL('https://salesianossp.org.br/ositaquera/?playlist=21c62af&video=09131b6')} />
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
  contact: {
    fontSize: 18,
    marginVertical: 10,
    color:'white',
  },
});
