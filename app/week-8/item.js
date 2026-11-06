export default function Item({ item, onSelect}) {
  return (
      <ul className="bg-slate-800 my-4 p-2 w-150" onClick={() => onSelect(item.name)}>
        <li className="font-bold text-2xl">{item.name}</li>
        <li className="text-lg">
          Buy {item.quantity} in {item.category}
        </li>
      </ul>
  );
}
