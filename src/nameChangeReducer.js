const initialState="Raj";
const nameChangeReducer=(state=initialState,action)=>{
switch(action.type){
    case "firstName" :
        return action.payload;
    case "fullName":
        return action.payload;
    default :
        return  state;
}
}
export default nameChangeReducer;