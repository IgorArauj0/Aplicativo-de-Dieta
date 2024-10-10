import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from 'react-native-vector-icons'; // Biblioteca de ícones
import Services from './Services';
import Portfolio from './Portifolio';
import Contact from './Contact';

const Tab = createBottomTabNavigator();

export default function Home() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Services') {
            iconName = focused ? 'ios-construct' : 'ios-construct-outline'; // Ícone para Serviços
          } else if (route.name === 'Portfolio') {
            iconName = focused ? 'ios-images' : 'ios-images-outline'; // Ícone para Portfólio
          } else if (route.name === 'Contact') {
            iconName = focused ? 'ios-call' : 'ios-call-outline'; // Ícone para Contato
          }

          // Retorna o ícone com base no nome da rota e estado 'focused'
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato', // Cor quando a aba está ativa
        tabBarInactiveTintColor: 'blue', // Cor quando a aba está inativa
      })}
    >
      <Tab.Screen name="Services" component={Services} options={{ tabBarLabel: 'Serviços' }} />
      <Tab.Screen name="Portfolio" component={Portfolio} options={{ tabBarLabel: 'Portfólio' }} />
      <Tab.Screen name="Contact" component={Contact} options={{ tabBarLabel: 'Contato' }} />
    </Tab.Navigator>
  );
}
