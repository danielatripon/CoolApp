const intialState = {
  authToken: null,
  userData: {},
  anyData: [],
};

export default (state = intialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        authToken: action.payload,
      };
    default:
      return state;
  }
};
