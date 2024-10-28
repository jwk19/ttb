import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from './types';
import { authService } from '../../services/authService';

export const login = (credentials) => async (dispatch) => {
  try {
    const data = await authService.login(credentials);
    dispatch({ type: LOGIN_SUCCESS, payload: data.user });
    return data.user;
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, payload: error.message });
    throw error;
  }
};

export const logoutUser = () => (dispatch) => {
  authService.logout();
  dispatch({ type: LOGOUT });
};