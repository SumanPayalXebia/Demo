import React, {useContext} from 'react';
import {SafeAreaView, Text, useColorScheme} from 'react-native';
import ThemeContext from '../context/ThemeContext';
import Button from '../components/Button';
import {globalStyles} from '../styles';

function ThemeHome(): React.JSX.Element {
  const systemTheme = useColorScheme();
  const {isDarkMode, toggleTheme, useSystemTheme} = useContext(ThemeContext);

  const handleToggleTheme = () => {
    const newTheme = !isDarkMode;
    toggleTheme(newTheme);
  };

  const useSystemThemeScheme = () => {
    useSystemTheme();
  };

  const containerStyle = {
    backgroundColor: isDarkMode ? '#000' : '#fff',
  };

  const textStyle = {
    color: isDarkMode ? '#fff' : '#000',
  };

  return (
    <SafeAreaView style={[globalStyles.container, containerStyle]}>
      <Text style={textStyle}>
        Current Color Scheme is {isDarkMode ? 'Dark' : 'Light'}
      </Text>
      <Text style={textStyle}>System Color Scheme is {systemTheme}</Text>
      <Button
        name={`Switch to ${isDarkMode ? 'Light' : 'Dark'} Theme`}
        onPress={handleToggleTheme}
      />
      <Button name={'Switch to Sysyem Theme'} onPress={useSystemThemeScheme} />
    </SafeAreaView>
  );
}

export default ThemeHome;
