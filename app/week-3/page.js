import ItemList from "./item-list";

export default function Page(){
    return(
    <main className="mx-auto max-w-md p-4">
        <h1 className="my-4 text-4x1 font-bold">Shopping List</h1>
        <ItemList/>
    </main>
    )
}