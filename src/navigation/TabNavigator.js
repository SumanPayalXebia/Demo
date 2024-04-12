import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {isTablet} from 'react-native-device-info';
import ThemeContext from '../context/ThemeContext';
import FirstTab from '../screens/Tabs/FirstTab';
import SecondTab from '../screens/Tabs/SecondTab';
import ThirdTab from '../screens/Tabs/ThirdTab';
import FourthTab from '../screens/Tabs/FourthTab';
import FifthTab from '../screens/Tabs/FifthTab';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  const {isDarkMode} = useContext(ThemeContext);
  return (
    <Tab.Navigator
      initialRouteName="FirstTab"
      screenOptions={() => ({
        headerStyle: {
          backgroundColor: isDarkMode ? '#fff' : '#000',
        },
        headerTintColor: isDarkMode ? '#000' : '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center',
        orientation: isTablet() ? 'landscape' : 'portrait',
        tabBarStyle: {
          backgroundColor: isDarkMode ? '#fff' : '#000',
        },
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: isDarkMode ? '#000' : '#fff',
      })}>
      <Tab.Screen name="FirstTab" component={FirstTab} />
      <Tab.Screen name="SecondTab" component={SecondTab} />
      <Tab.Screen name="ThirdTab" component={ThirdTab} />
      <Tab.Screen name="FourthTab" component={FourthTab} />
      <Tab.Screen name="FifthTab" component={FifthTab} />
    </Tab.Navigator>
  );
}

export default TabNavigator;
