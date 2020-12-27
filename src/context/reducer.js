const initialState = {
  todos: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
