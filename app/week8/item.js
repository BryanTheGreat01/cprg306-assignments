export default function Item({ item }) {
  console.log(item);
  return (
    <section className="p-5 border-2 w-1/3 ml-6 mb-5 rounded-lg bg-gray-600 align-center">
      <h2>names: {item.name}</h2>
      <p>quantity: {item.quantity}</p>
      <p>Category: {item.category}</p>
    </section>
  );
}
