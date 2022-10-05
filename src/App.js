import './App.css';
import React,{useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {showAction, hideAction} from './showHideAction';
import { showFirstNameAction, showFullNameAction } from './nameAction';

function App() {
  const showHide = useSelector((state)=>state.showHideReducer);//REDUCER ME STORED HAI WO PRINT
  console.log(showHide);
  const nameChange=useSelector((state)=>state.nameChangeReducer);
  console.log(nameChange);
  const dispatch= useDispatch();
  const [value, setvalue] = useState(false);
  
  const onChangeHandler=()=>{  
    setvalue(!value);
       if(value)
       dispatch(hideAction())//WHEN THE BUTTON IS BEING CLICKED OBJECT -> 
       else
       dispatch(showAction());
  }
  const onNameChangeHandler1=()=>{
   dispatch(showFirstNameAction());
  } 
  const onNameChangeHandler2=()=>{
  dispatch(showFullNameAction());
  }    

  
  return ( 
    <div>
      {value &&<h1>Prachi Raj</h1>}
      {/* conditonal rendering */}
      <button onClick={onChangeHandler}>{value?"hide":"show"}</button>
      <hr></hr>
      <br/>
      <h1>{nameChange}</h1>
      <button onClick={onNameChangeHandler1}>First Name</button>
      <button onClick={onNameChangeHandler2}>Full Name</button>
    </div>
  );
}

export default App;
