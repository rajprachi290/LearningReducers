const initialState = false;
const showHideReducer = (state=initialState, action) => {
  // console.log(action.type);
  switch (action.type) {
    case "show":
      return true;
      
    case "hide":
      return initialState;
      
      default:
        return state;
  }
};
export default showHideReducer;