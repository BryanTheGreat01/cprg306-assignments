import Item from "./item";

export default function ItemList()
{
    return(
    <section>
    <ul>
    <li>
    <Item name="milk, 4 L 🥛" quantity={1} category="dairy"/>
    </li>
    <li>
    <Item name="bread 🍞" quantity={2} category="bakery"/>
    </li>
    <li>
    <Item name="eggs, dozen 🥚" quantity={2} category="dairy"/>
    </li>
    <Item name="bananas 🍌" quantity={6} category="produce"/>
    <li>
    <Item name="broccoli 🥦" quantity={3} category="produce"/>
    </li>
    <li>
    <Item name="chicken breasts, 1 kg 🍗" quantity={1} category="meat"/>
    </li>
    <li>
    <Item name="1" quantity={3} category= "canned goods"/>
    </li>
    <li>
    <Item name="spaghetti, 454 g 🍝" quantity={2} category="dry goods"/>
    </li>
    <li>
    <Item name="toilet paper, 12 pack 🧻" quantity={1} category="household"/>
    </li>
    <li>
    <Item name="paper towels, 6 pack" quantity={1} category="household"/>
    </li>
    <li>
    <Item name="dish soap 🍽️" quantity={1} category="household"/>
    </li>
    <li>
    <Item name="hand soap 🧼" quantity={4} category="household"/>
    </li>
    </ul>
    </section>
    )
}