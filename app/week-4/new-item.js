import { useState } from "react";

export default function NewItem() {
  let [quantity, setQuantity] = useState(1);

  function increment() {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  }
  function decrement() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }
  return (
    <form className="flex gap-3 flex-row justify-center p-5 bg-blue-100 my-5 w-80 mx-auto rounded-md">
      <button
        className="bg-slate-500 hover:bg-slate-400 text-7xl w-52 disabled:bg-gray-300 disabled:cursor-not-allowed rounded-md"
        type="button"
        onClick={decrement}
        disabled={quantity == 1}
      >
        -
      </button>
      <input
        readOnly
        type="text"
        value={quantity}
        className="bg-blue-50 text-4xl w-16 text-center  text-black border-2 border-b-blue-950 rounded-md"
      ></input>
      <button
        className="bg-slate-500 hover:bg-slate-400 text-7xl w-52 disabled:bg-gray-300 disabled:cursor-not-allowed rounded-md "
        type="button"
        onClick={increment}
        disabled={quantity == 20}
      >
        +
      </button>
    </form>
  );
}
