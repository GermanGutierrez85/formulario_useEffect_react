import { useState, useEffect } from 'react'

export default function CounterApp() {
    const [count, setCount] = useState(0);
    const [interval, setInterval] = useState();
    
    useEffect(() => {
        setTimeout(()=>{
          setInterval(setCount(()=> count + 1))
        }, 1000);
        return ()=>{
          clearInterval(interval);
        };

      
    }, [count])
    

  return (
    <div> Counter : {count}</div>
  )
}
