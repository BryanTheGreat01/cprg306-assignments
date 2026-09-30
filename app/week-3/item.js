export default function Item({ name, quantity, category }) {
  return (
    <div className="bg-slate-800 my-4.5 p-3 w-96 rounded-md border-2 border-slate-600 text-white">
      <p className="font-bold text-2xl">{name}</p>
      <p>
        Buy {quantity} in {category}
      </p>
    </div>
  );
}
