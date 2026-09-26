"use client"; // allows client sided interactivity
import {useState} from "react"; 

export default function Counter(){
    let [count, setCount] = useState(0);

    const increment = () => {
        if (count <10) {
          setCount(count +1);
        }
        else {
            alert('You reached the max value of the count.')
        }
    }
    return (
        <div>
            <p>Count: </p>
            
        <button onClick={increment} className="bg-slate-400 hover:bg-slate-200">
            Increment
        </button>
        </div>
    )
}