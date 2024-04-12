import React, {useContext} from 'react';
import {SafeAreaView} from 'react-native';
import ThemeContext from '../context/ThemeContext';
import {IS_LOGGED_IN_KEY, loginStorage} from '../storage/loginStorage';
import Button from '../components/Button';
import {globalStyles} from '../styles';
import {setIsLoggedIn} from '../redux/auth/authSlice';
import {useAppDispatch} from '../hooks/reduxHooks';

function Login(): React.JSX.Element {
  const dispatch = useAppDispatch();
  const {isDarkMode} = useContext(ThemeContext);

  const handleLogin = () => {
    loginStorage.set(IS_LOGGED_IN_KEY, true);
    dispatch(setIsLoggedIn(true));
  };

  const containerStyle = {
    backgroundColor: isDarkMode ? '#000' : '#fff',
  };

  return (
    <SafeAreaView style={[globalStyles.container, containerStyle]}>
      <Button name="Login" onPress={handleLogin} />
    </SafeAreaView>
  );
}

export default Login;
