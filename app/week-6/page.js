import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white p-6">
      <h1 className="text-5xl md:text-6xl font-bold mb-6">
        Shopping List
      </h1>

      <ItemList />
    </main>
  );
}
