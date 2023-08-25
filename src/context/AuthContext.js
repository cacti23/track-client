import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import * as RootNavigation from '../RootNavigation';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return {
        ...state,
        errorMessage: action.payload
      };
    case 'signin':
      return {
        errorMessage: '',
        token: action.payload
      };
    case 'clear_error_message':
      return { ...state, errorMessage: '' };
    default:
      return state;
  }
};

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: 'clear_error_message' });
};

const signup =
  (dispatch) =>
  async ({ email, password }) => {
    try {
      const response = await trackerApi.post('/signup', { email, password });

      await AsyncStorage.setItem('token', response.data.token);

      dispatch({ type: 'signin', payload: response.data.token });

      RootNavigation.navigate('mainFlow');
    } catch (error) {
      dispatch({
        type: 'add_error',
        payload: 'Something went wrong with sign up'
      });
    }
  };

const signin =
  (dispatch) =>
  async ({ email, password }) => {
    try {
      const response = await trackerApi.post('/signin', { email, password });

      await AsyncStorage.setItem('token', response.data.token);

      dispatch({ type: 'signin', payload: response.data.token });

      RootNavigation.navigate('mainFlow');
    } catch (error) {
      dispatch({
        type: 'add_error',
        payload: 'Something went wrong with sign in'
      });
    }
  };

const signout = (dispatch) => {
  return () => {
    // somehow sign out
  };
};

export const { Context, Provider } = createDataContext(
  authReducer,
  { signup, signin, signout, clearErrorMessage },
  { token: null, errorMessage: '' }
);
