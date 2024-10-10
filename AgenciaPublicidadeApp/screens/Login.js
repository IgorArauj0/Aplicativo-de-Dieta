import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Image } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';



const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Email inválido")
    .required("Email é obrigatório"),
  password: Yup.string()
    .min(6, "A senha deve ter pelo menos 6 caracteres")
    .required("Senha é obrigatória"),
});

export default function Login({ navigation }) {
  // Credenciais simuladas
  const correctCredentials = {
    email: "teste@agencia.com",
    password: "123456",
    email: "igoritoaraujo@gmail.com",
    password: "123456",
  };




  const handleLogin = (values) => {
    // Verifica se as credenciais inseridas são iguais às corretas
    if (values.email === correctCredentials.email && values.password === correctCredentials.password) {
      // Se o email e a senha estiverem corretos, navegue para a tela Home
      navigation.replace('Home');
    } else {
      // Exibe um alerta em caso de erro de autenticação
      Alert.alert("Erro", "Email ou senha inválidos");
    }
  };








  return (
    <View style={styles.container}>

      <Image source={require('../assets/logo.png')} style={styles.image} />

      <Text style={styles.title}>Login</Text>


      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={loginValidationSchema}
        onSubmit={handleLogin}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View>
            <TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              keyboardType="email-address"
            />
            {errors.email && touched.email && (
              <Text style={styles.error}>{errors.email}</Text>
            )}

            <TextInput
              style={styles.input}
              placeholder="Senha"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry
            />
            {errors.password && touched.password && (
              <Text style={styles.error}>{errors.password}</Text>
            )}

            <Button title="Entrar" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#000039',
    
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    justifyContent: 'center',
   alignItems:'center', 
   color: 'white',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    color: 'white',
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },

  image: {
    width: 150,
    height: 150,
    marginBottom: 40,
    marginLeft: 100,
  },

});
