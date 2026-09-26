import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-100 px-6 py-10">
      <h1 className="mb-8 text-center text-4xl font-bold text-slate-800">
        Shopping List
      </h1>

      <ItemList />
    </main>
  );
}

