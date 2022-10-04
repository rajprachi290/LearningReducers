import './App.css';
import React,{useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {showAction, hideAction} from './showHideAction';
function App() {
  const showHide = useSelector((state)=>state.showHideReducer);//REDUCER ME STORED HAI WO PRINT
  console.log(showHide);
  const dispatch= useDispatch();
  const [value, setvalue] = useState(false);
  const onChangeHandler=()=>{  
    setvalue(!value);
       if(value)
       dispatch(hideAction())//WHEN THE BUTTON IS BEING CLICKED OBJECT -> 
       else
       dispatch(showAction());
  }
  return ( 
    <div>
      {value &&<h1>Prachi Raj</h1>}
      {/* conditonal rendering */}
      <button onClick={onChangeHandler}>{value?"hide":"show"}</button>
    </div>
  );
}

export default App;
