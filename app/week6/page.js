import ItemList from "./item-list";
export default function Page() {
  return (
    <main className="justify-center bg-slate-600 ">
      <h1 className="text-2xl font-bold mb-4 mt-5 ml-5">Shopping List</h1>
      <ItemList />
    </main>
  );
}
