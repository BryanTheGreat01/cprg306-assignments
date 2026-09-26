export default function Item({ name, quantity, category }) {
  return (
    <li className="mb-3 rounded-lg bg-white p-4 shadow">
      <div className="font-semibold text-gray-800">
        {name}
      </div>

      <div className="text-sm text-gray-600">
        Quantity: {quantity}
      </div>

      <div className="text-sm capitalize text-blue-600">
        Category: {category}
      </div>
    </li>
  );
}