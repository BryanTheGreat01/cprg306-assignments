export default function Item({ items }) {
  return (
    <section className="p-5 border-2 w-1/3 ml-6 mb-5 rounded-lg bg-gray-600 align-center">
      <h2>name: {items.name}</h2>
      <p>quantity: {items.quantity}</p>
      <p>category: {items.category}</p>
    </section>
  );
}
