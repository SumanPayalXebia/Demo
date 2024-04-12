import {MMKV} from 'react-native-mmkv';

export const loginStorage = new MMKV({
  id: 'login-storage',
});

export const IS_LOGGED_IN_KEY = 'isLoggedIn';
