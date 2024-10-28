import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../actions/types';

const getInitialState = () => {
  try {
    const user = JSON.parse(localStorage.getItem('user'));
    const token = localStorage.getItem('token');
    return {
      user,
      token,
      error: null,
      isAuthenticated: !!token && !!user
    };
  } catch {
    // If there's any error parsing the stored user, reset the state
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    return {
      user: null,
      token: null,
      error: null,
      isAuthenticated: false
    };
  }
};

const authReducer = (state = getInitialState(), action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        error: null,
        isAuthenticated: true
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        user: null,
        token: null,
        error: action.payload,
        isAuthenticated: false
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
        token: null,
        error: null,
        isAuthenticated: false
      };
    default:
      return state;
  }
};

export default authReducer;