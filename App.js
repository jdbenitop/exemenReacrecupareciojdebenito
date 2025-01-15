import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './Screens/MainScreen';
import NewTaskScreen from './Screens/PoiDetailScreen'; 

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="MainScreen">
                <Stack.Screen 
                    name="MainScreen" 
                    component={MainScreen} 
                    options={{ title: 'PoiDetailScreen' }}
                />
                <Stack.Screen 
                    name="PoiDetailScreen" 
                    component={NewTaskScreen} 
                    options={{ title: 'PoiDetailScreen' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;