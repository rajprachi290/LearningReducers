import React,{useEffect} from 'react'
import axios from 'axios'
function Axioscalls() {
    async function callApi(){
       console.log("calling api");
       axios.get('https://jsonplaceholder.typicode.com/todos')
       .then((d)=>{ console.log("calling api",d.data);})
       .catch((e)=>{console.log('error is ------>',e)})

    }
    useEffect(() => {
      callApi();
      return () => {
      }
    }, [])
    
  return (
    <div>Axioscalls</div>
  )
}

export default Axioscalls