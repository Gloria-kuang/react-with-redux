// reducer is a function to return a state
// in this case, the initial state is zero (means account balance is zero)
const reducer = (state = 0, action) => {
  //use switch statement
  switch (action.type) {
    case "deposit":
      return state + action.payload;
    case "withdraw":
      return state - action.payload;
    //for all others don't fall within the above cases
    default:
      return state;
  }
};

export default reducer;
