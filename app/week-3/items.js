export default function Item({ item }) {
  return (
    <main>
      <ul className="bg-slate-800 my-4 p-2 w-96">
        <li className="font-bold text-2xl">{item.name}</li>
        <li className="text-lg">Buy {item.quantity} in {item.category}</li>
      </ul>
    </main>
  )
}


