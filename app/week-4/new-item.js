"use client";
import { useState } from "react";

export default function NewItem(){
    let [quantity, setQuantity] = useState(1);

    const increment = () => {
        if (quantity <20){
            setQuantity(quantity + 1);
        }
        else {
            alert('Cannot go over above 20.')
        }
    }

    const decrement = () => {
        if (quantity >1){
            setQuantity(quantity -1);
        }
        else {
            alert('You cannot go below 1.')
        }
    }

    return (
        <div className=" bg-white mx-auto flex flex-row w-45 justify-center gap-5 rounded-border border-black">

            <input type="text" 
            className="bg-white
            border
            border-black
             rounded-md
             w-12
             py-1
             text-center
             font-bold
            text-black"
            value={quantity}>
            </input>

            <button
            id="decrement-button"
            className="bg-gray-300" 
            w-8
            py-1
            rounded-md
            text-center
            font-bold
            onClick={decrement}>-</button>

            <button 
            id="increment-button"   
            className="bg-blue-500 hover:bg-blue-600
            w-8
            h-12
            rounded-md 
            text-center 
            font-bold"
            onClick={increment}>+</button>
        </div>
    )
}