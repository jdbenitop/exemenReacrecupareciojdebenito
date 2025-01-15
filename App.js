import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './Screens/MainScreen';
import NewTaskScreen from './Screens/NewTaskScreen'; // Asegúrate de importar correctamente NewTaskScreen

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="MainScreen">
                <Stack.Screen 
                    name="MainScreen" 
                    component={MainScreen} // Asegúrate de que MainScreen sea un componente React válido
                    options={{ title: 'detalles' }}
                />
                <Stack.Screen 
                    name="detalles" 
                    component={NewTaskScreen} // Asegúrate de que NewTaskScreen sea un componente React válido
                    options={{ title: 'detalles' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;