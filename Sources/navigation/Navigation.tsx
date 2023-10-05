import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer} from "@react-navigation/native"; 
import HomeScreen from '../views/HomeScreen';

export default function Navigation() {
    const BottomTabNavigator = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <BottomTabNavigator.Navigator initialRouteName="Home">
                <BottomTabNavigator.Screen name="Home" component={HomeScreen}
                                           options={{
                                                title: 'Home',
                                           }}/>
            </BottomTabNavigator.Navigator>
        </NavigationContainer>
    )
}