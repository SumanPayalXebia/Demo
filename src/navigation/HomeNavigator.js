import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {isTablet} from 'react-native-device-info';
import ThemeContext from '../context/ThemeContext';
import ThemeHome from '../screens/ThemeHome';
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator();

function HomeNavigator() {
  const {isDarkMode} = useContext(ThemeContext);
  return (
    <Stack.Navigator
      initialRouteName="Tabs"
      screenOptions={{
        headerStyle: {
          backgroundColor: isDarkMode ? '#fff' : '#000',
        },
        headerTintColor: isDarkMode ? '#000' : '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center',
        orientation: isTablet() ? 'landscape' : 'portrait',
      }}>
      <Stack.Screen
        name="Tabs"
        component={TabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Theme" component={ThemeHome} />
    </Stack.Navigator>
  );
}

export default HomeNavigator;
