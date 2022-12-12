import {createAsyncThunk} from '@reduxjs/toolkit';
import authService from '../../services/AuthService';
import {token} from '../../utils/storage';
import {authActions} from './AuthSlice';

export const authReducer = {
  onAuthSuccess: (state, action) => {
    state.isAuthenticated = !!action.payload;
    state.user = action.payload;
    state.authError = null;
  },
  onAuthError: (state, action) => {
    state.isAuthenticated = false;
    state.user = null;
    state.authError = action.payload;
  },
  onLoginSuccess: (state, action) => {
    state.isAuthenticated = !!action.payload;
    state.user = action.payload;
    state.loginError = null;
  },
  onLoginError: (state, action) => {
    state.isAuthenticated = false;
    state.user = null;
    state.loginError = action.payload;
  },
  onLogout: state => {
    token.removeStorage();
    state.isAuthenticated = false;
    state.user = null;
    state.authError = null;
    state.loginError = null;
  },
};

export const asyncLoginAction = createAsyncThunk(
  'auth/login',
  async (values, thunkApi) => {
    const result = await authService.login(values);

    if (result.success)
      thunkApi.dispatch(authActions.onLoginSuccess(result.data));
    else thunkApi.dispatch(authActions.onLoginError(result.message));
  },
);

export const asyncSignupAction = createAsyncThunk(
  'auth/signup',
  async (values, thunkApi) => {
    const result = await authService.signup(values);

    if (result.success)
      thunkApi.dispatch(authActions.onLoginSuccess(result.data));
    else thunkApi.dispatch(authActions.onLoginError(result.message));
  },
);

export const asyncLoggedInAction = createAsyncThunk(
  'auth/loggedIn',
  async (_, thunkApi) => {
    const result = await authService.loggedIn();

    if (result.success)
      thunkApi.dispatch(authActions.onAuthSuccess(result.data));
    else thunkApi.dispatch(authActions.onAuthError(result.message));
  },
);
