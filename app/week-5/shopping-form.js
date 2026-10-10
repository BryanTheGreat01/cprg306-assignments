"use client";
import { useState } from "react";

export default function ShoppingForm() {
    let [name, setName] = useState(" ");
    let [quantity, setQuantity] = useState(1);
    let [category, setCategory] = useState("Produce");

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

    const handleSubmission = (e) => {
        e.preventDefault();
        let newItem = {name, quantity, category};
        console.log(newItem);
        alert(`Item: ${name}, Quantity: ${quantity}, Category: ${category}`);
        setName("");
        setQuantity(1);
        setCategory("Produce");
    };
    return (
        <div className=" bg-white mx-auto flex-col justify-center gap-3 py-4 px-4 rounded-md border border-black w-full max-w-sm">
            <form onSubmit={handleSubmission}> 
            <input type="text"
            className="border border-black bg-white text-black"
            placeholder="Item Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required>
            </input>

        <div>
        
            <label htmlFor="quantity">Quantity: </label>
            <input type="text" 
            className="bg-white
            border
            border-black
             rounded-md
             px-1
             py-2
             text-center
             font-bold
            text-black"
            value={quantity}>
            </input>
        </div>

        <div className="flex flex-row justify-center gap-4">
            <button
            type="button"
            id="decrement-button"
            className="bg-gray-300
            w-8
            py-1
            text-white"
            onClick={decrement}
            disabled={quantity === 1}
            >-</button>

        <button 
            type="button"
            id="increment-button"   
            className="bg-blue-500 hover:bg-blue-600
            w-8
            h-12
            rounded-md 
            text-center 
            font-bold"
            onClick={increment}>+
            </button>
        </div>

            <div>
                <select className="border border-black rounded py-2 px-4 text-black focus:ring-2 focus:ring-blue-500">
                    <option value="Produce">Produce</option>
                    <option value="Dairy">Dairy</option>
                    <option value="Bakery">Bakery</option>
                    <option value="Meat">Meat</option>
                    <option value="Frozen Foods">Frozen Foods</option>
                    <option value="Canned Goods">Canned Goods</option>
                    <option value="Dry Goods">Dry Goods</option>
                    <option value="Beverages">Beverages</option>
                    <option value="Snacks">Snacks</option>
                    <option value="Household">Household</option>
                    <option value="Other">Other</option>
                </select>
            </div>

            <div>
                <button type="submit" className="w-full py-2 text-white bg-blue-600">
                    Add Item
                </button>
            </div>

            </form>


        </div>
    )


}

