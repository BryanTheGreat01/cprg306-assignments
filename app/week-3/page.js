import ItemList from "./item-list";

export default function Page() {
  return (
      <main className="bg-blue-900 mx-auto max-w-md p-4">
        <h1 className="text-4xl text-white font-bold mb-14">Shopping List</h1>
        <div>
          <ItemList />
        </div>
      </main>
  );
}
