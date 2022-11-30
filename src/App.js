import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const [name ,setName]=useState("vinay");
  const [number,setNumber]=useState(1);
  const [state ,setState]= useState(10);
  return (
    
    <div style={{
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'red',
      height:'600px',
      width:'700px',
      color:"white",

      
    

    }}>
      <h1>{state}</h1>
      <button onClick={()=>{
        setState(state+1);
      }}>clickME❤️</button>


      <h1>{name}</h1>
      <input onChange={(x)=>{
        setName(x.target.value)}}/>


      <h1 onClick={()=>{
        alert('Hello You Clicked Me 😀❤️');
      }}>Hello
      </h1>
      <div>
        <span>count-</span>
        <span>{number}</span>
      </div>
      <div>
        <button onClick={()=>{
         setNumber(number+1);
        }}>+</button>
        <button onClick={()=>{
         setNumber(number-1);
          
        }}>-</button>
      </div>
      
     
    </div>
   
  );
}

export default App;
