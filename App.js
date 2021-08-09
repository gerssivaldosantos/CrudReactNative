import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NewTask from './src/pages/NewTask';
import Details from './src/pages/Details/style';

const Stack = createStackNavigator()

export default function App() {
  return (
   <NavigationContainer>
     <Stack.Navigator initialRouteName={"Task"}>
      <Stack.Screen 
      
      component={NewTask} 
      name="Task" 
      options={{
        headerTintColor:"#f92e6a"
      }}
      />
      <Stack.Screen 
      
      component={Details} 
      name="Details" 
      options={{
        headerTintColor:"#f92e6a"
      }}
      />
     </Stack.Navigator>
   </NavigationContainer>
  );
}


