export default function Item({ items }) {
  return (
    <section className="p-5 border-2 border-red-600 w-1/2 ml-5 mb-5 rounded-lg">
      <h2>name: {items.name}</h2>
      <p>quantity: {items.quantity}</p>
      <p>category: {items.category}</p>
    </section>
  );
}
