import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios'

function App() {

  const [list, setList] = useState(["hola", "adios"]);

  const [newItem, setNewItem] = useState("")

  useEffect(()=>{
    const data = localStorage.getItem("name")
    setList(JSON.parse(data))
  },[])

  useEffect(()=>{
      localStorage.setItem("name",JSON.stringify(list))
  },[list])


const handleChange = (e)=>{
  setNewItem(e.target.value)
}

  const createNewItem = ()=>{
    setList(()=>[...list, newItem])
   setNewItem('')
  }  

  return (
    <div>
          <p>Prueba</p>
        <ul>
          {list.map((dato)=>(
            <li key={dato}>{dato}</li>
          ))}
        </ul>
        <input 
          type="text" 
          onChange={handleChange}
          value={newItem}
          placeholder="introduce"/>
        <br/>
        <button   onClick={createNewItem} >Add</button>
       
    </div>
  );
}

export default App;
