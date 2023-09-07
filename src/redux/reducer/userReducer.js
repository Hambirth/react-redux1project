import {
  GET_USERS_FAIL,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
} from "../constansts/userconstants";

export const userReducer = (state = { user: [] }, action) => {
  switch (action.type) {
    case GET_USERS_REQUEST:
      return { loading: true, user: [] };

    case GET_USERS_SUCCESS:
      return { loading: false, user: action.payload };

    case GET_USERS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
