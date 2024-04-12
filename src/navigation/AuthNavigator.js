import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {isTablet} from 'react-native-device-info';
import ThemeContext from '../context/ThemeContext';
import Login from '../screens/Login';

const Stack = createNativeStackNavigator();

function AuthNavigator() {
  const {isDarkMode} = useContext(ThemeContext);
  return (
    <Stack.Navigator
      initialRouteName="Login"
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
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
