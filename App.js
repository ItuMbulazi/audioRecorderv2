import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  Login  from './components/login'
import Audio from './components/audio'


function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}




const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
       <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="home" component={Audio} />
         
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
