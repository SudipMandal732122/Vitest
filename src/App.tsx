import { useState } from "react";

function App() {

  const [count,setCount]=useState<number>(0);

  const [data,setData]= useState<{name:string}| null>(null);

  const fetchUser= async()=>{
    const id=Math.floor((Math.random()*10)+1);
    console.log(id);
    const res= await fetch(`https://jsonplaceholder.typicode.com/users/1`);
    const data:{name:string}= await res.json();
    setData(data);
  }

  return (
    <div className="app">
      {/* <h1 className="">{count}</h1>
      <button onClick={()=>setCount(prev => prev+1)} >Increment</button> */}
      { data && <h1 className="">{data.name}</h1>}
      <button onClick={fetchUser}>Fetch User</button>

    </div>
   
    
  )
}

export default App
