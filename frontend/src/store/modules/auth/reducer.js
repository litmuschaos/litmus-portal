import { LOAD_CURRENT_USER, LOGIN, SET_TOKEN, SIGNUP, RESET_ERROR } from './actions';

const initialState = {
  /**
   * The JWT token
   */
  token: undefined,

  /**
   * The current user's information
   */
  user: undefined,
  error: null
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case LOAD_CURRENT_USER.SUCCESS:
      return {
        ...state,
        user: action.payload.user,
      };
    case SIGNUP.SUCCESS:
    case LOGIN.SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        error: action.payload.error,
      };
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload.token,
      };
    case RESET_ERROR:
      return {
        ...state,
        error: null
      }
    default:
      return state;
  }
}
