import types from "../types";

const initial_state = {
  isLogin: false,
};

export default function auth(state = initial_state, action) {
  switch (action.type) {
    case types.IS_LOGIN:
      return {
        ...state,
        isLogin: action.payload,
      };

    default:
      return state;
  }
}
