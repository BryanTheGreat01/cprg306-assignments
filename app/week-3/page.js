import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="mx-auto">
      <h1 className="my-4 text-4xl font-bold">Shopping List</h1>
      <ItemList />
    </main>
  );
}
