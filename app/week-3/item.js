export default function Item({ item, quantity, category }){
    return(
        <section className="bg-slate-800 my-4 p-3 w-96 text-white">
        <p className="font-bold text-2x1"> {item}, {quantity} {category}</p>
        <p>buy {quantity} in {category}</p>
        </section>
    )
}