export default function Item({ name, quantity, category }) {
  return (
    <div class="bg-slate-800 my-4 p-3 w-96 rounded-md text-white">
      <p class="font-bold text-2xl">{name}</p>
      <p>
        Buy {quantity} in {category}
      </p>
    </div>
  );
}
