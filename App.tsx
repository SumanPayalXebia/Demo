import React, {useEffect} from 'react';
import {ThemeProvider} from './src/context/ThemeContext';
import RootNavigator from './src/navigation/RootNavigator';
import {IS_LOGGED_IN_KEY, loginStorage} from './src/storage/loginStorage';
import {setIsLoggedIn} from './src/redux/auth/authSlice';
import {useAppDispatch} from './src/hooks/reduxHooks';

function App(): React.JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const isLoggedIn = loginStorage.getBoolean(IS_LOGGED_IN_KEY);
    if (isLoggedIn) {
      dispatch(setIsLoggedIn(isLoggedIn));
    }
  }, [dispatch]);

  return (
    <ThemeProvider>
      <RootNavigator />
    </ThemeProvider>
  );
}

export default App;
