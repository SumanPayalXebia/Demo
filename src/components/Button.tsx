import React, {useContext} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import ThemeContext from '../context/ThemeContext';
import {globalStyles} from '../styles';

type ButtonDataProps = {
  name: string;
  onPress: () => void;
};

function Button(props: ButtonDataProps): React.JSX.Element {
  const {isDarkMode} = useContext(ThemeContext);

  const buttonBgStyle = {
    backgroundColor: isDarkMode ? '#fff' : '#000',
  };

  const buttonTextStyle = {
    color: isDarkMode ? '#000' : '#fff',
  };

  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[globalStyles.buttonBg, buttonBgStyle]}>
      <Text style={buttonTextStyle}>{props.name}</Text>
    </TouchableOpacity>
  );
}

export default Button;
