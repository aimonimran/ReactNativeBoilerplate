import {createSlice} from '@reduxjs/toolkit';
import {helperExtraReducers} from '../helper.redux';
import {initialState} from './authState';
import {
  asyncLoggedInAction,
  asyncLoginAction,
  asyncSignupAction,
  authReducer,
} from './authReducer';

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: authReducer,
  extraReducers: builder => {
    helperExtraReducers(builder, asyncLoggedInAction, [
      'checkingAuth',
      'authError',
    ]);
    helperExtraReducers(builder, asyncLoginAction, [
      'loadingLogin',
      'loginError',
    ]);
    helperExtraReducers(builder, asyncSignupAction, [
      'loadingLogin',
      'loginError',
    ]);
  },
});

export const authActions = Object.assign(authSlice.actions, {
  asyncLoggedInAction,
  asyncLoginAction,
  asyncSignupAction,
});

export default authSlice.reducer;
