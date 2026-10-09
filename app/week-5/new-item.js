import { useState } from "react";

export default function NewItem() {
  let [quantity, setQuantity] = useState(1);
  let [name, setName] = useState("");
  let [category, setCategory] = useState("produce");
  const categories = [
    "Produce",
    "Dairy",
    "Bakery",
    "Meat",
    "Frozen Foods",
    "Canned Goods",
    "Dry Goods",
    "Beverages",
    "Snacks",
    "Household",
    "Other",
  ];
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

  const handleSubmit = (e) => {
    e.preventDefault();
    let item = {
      name: name,
      quantity: quantity,
      category: category,
    };
    console.log(item);
    alert(`Item added: ${name}, Quantity: ${quantity}, Category: ${category}`);
    setName("");
    setQuantity(1);
    setCategory("produce");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-wrap gap-3 flex-row justify-center p-5 bg-blue-100 my-5 w-150 mx-auto rounded-md"
    >
      <input
        type="text"
        placeholder="Enter Item Name"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="bg-white rounded-sm text-black px-3 basis-full border p-2"
        required
      ></input>
      <div className="flex space-x-20">
        <div className="flex gap-3 ">
          <button
            className="bg-slate-500 hover:bg-slate-400 text-7xl px-10 align-middle disabled:bg-gray-300 disabled:cursor-not-allowed rounded-md"
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
            className="bg-slate-500 hover:bg-slate-400 text-6xl px-10 align-middle disabled:bg-gray-300 disabled:cursor-not-allowed rounded-md"
            type="button"
            onClick={increment}
            disabled={quantity == 20}
          >
            +
          </button>
        </div>
        <select
          name="category"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="bg-slate-700 rounded-lg px-2.5 text-xl "
        >
          {categories.map((cat) => {
            return (
              <option value={cat} key={cat} className="text-white">
                {cat}
              </option>
            );
          })}
        </select>
      </div>
      <button type="submit" className="text-xl font-semibold bg-slate-500 basis-full py-5">
        Add Item
      </button>
    </form>
  );
}
