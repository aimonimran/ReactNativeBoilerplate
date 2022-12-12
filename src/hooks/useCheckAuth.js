import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {authActions} from '../redux/auth/AuthSlice';
import {abortController} from '../utils/helper';
import authService from '../services/AuthService';

function useCheckAuth() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authActions.asyncLoggedInAction());
  }, [dispatch]);

  useEffect(() => {
    return () => {
      abortController(authService.loggedInController);
    };
  }, []);
}

export default useCheckAuth;
