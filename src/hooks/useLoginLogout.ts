import {IS_LOGGED_IN_KEY, loginStorage} from '../storage/loginStorage';
import {setIsLoggedIn} from '../redux/auth/authSlice';
import {useAppDispatch} from './reduxHooks';

const useLoginLogout = (loginValue: boolean) => {
  const dispatch = useAppDispatch();
  return () => {
    loginStorage.set(IS_LOGGED_IN_KEY, loginValue);
    dispatch(setIsLoggedIn(loginValue));
  };
};

export default useLoginLogout;
