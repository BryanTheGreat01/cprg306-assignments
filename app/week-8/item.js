export default function Item({ name, quantity, category, onSelect }) {
  return (
    <div
      onClick={() => onSelect(name)}
      className="bg-slate-800 my-3 py-2.5 px-2 w-auto rounded-md border-2 border-slate-600 text-white hover:cursor-pointer hover:bg-slate-700"
    >
      <p className="font-bold text-2xl">{name}</p>
      <p>
        Buy {quantity} in {category}
      </p>
    </div>
  );
}
