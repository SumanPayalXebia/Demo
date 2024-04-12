import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import ThemeContext from '../context/ThemeContext';
import {StatusBar} from 'react-native';
import AuthNavigator from './AuthNavigator';
import HomeNavigator from './HomeNavigator';
import {useAppSelector} from '../hooks/reduxHooks';
import {isTablet} from 'react-native-device-info';

function RootNavigator() {
  const {isDarkMode} = useContext(ThemeContext);
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);
  return (
    <>
      <StatusBar
        barStyle={isDarkMode ? 'dark-content' : 'light-content'}
        backgroundColor={isDarkMode ? '#fff' : '#000'}
      />
      <NavigationContainer>
        {isLoggedIn ? <HomeNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </>
  );
}

export function HeaderLayout() {
  const {isDarkMode} = useContext(ThemeContext);
  return {
    headerStyle: {
      backgroundColor: isDarkMode ? '#fff' : '#000',
    },
    headerTintColor: isDarkMode ? '#000' : '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerTitleAlign: 'center',
    orientation: isTablet() ? 'landscape' : 'portrait',
  };
}

export default RootNavigator;
