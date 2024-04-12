import React, {useContext} from 'react';
import {SafeAreaView, Text} from 'react-native';
import ThemeContext from '../../context/ThemeContext';
import {globalStyles} from '../../styles';
import Button from '../../components/Button';
import useLoginLogout from '../../hooks/useLoginLogout';

function FourthTab({navigation}: any): React.JSX.Element {
  const {isDarkMode} = useContext(ThemeContext);
  const logout = useLoginLogout(false);

  const containerStyle = {
    backgroundColor: isDarkMode ? '#000' : '#fff',
  };

  const textStyle = {
    color: isDarkMode ? '#fff' : '#000',
  };

  const handleThemeNavigation = () => {
    navigation.navigate('Theme');
  };

  return (
    <SafeAreaView style={[globalStyles.container, containerStyle]}>
      <Text style={textStyle}>Fourth Tab</Text>
      <Button name="Go to Theme" onPress={handleThemeNavigation} />
      <Button name="Logout" onPress={logout} />
    </SafeAreaView>
  );
}

export default FourthTab;
