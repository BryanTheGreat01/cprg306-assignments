import Item from "./item";

export default function ItemList() {
  return (
    <ul>
      <li>
        <Item name="Milk, 4 L 🥛" quantity={1} category="dairy" />
      </li>
      <li>
        <Item name="Bread 🍞" quantity={2} category="bakery" />
      </li>
      <li>
        <Item name="Eggs, dozen 🥚" quantity={2} category="dairy" />
      </li>
      <li>
        <Item name="Bananas 🍌" quantity={6} category="produce" />
      </li>
      <li>
        <Item name="Broccoli 🥦" quantity={3} category="produce" />
      </li>
      <li>
        <Item name="Chicken breasts, 1 kg 🍗" quantity={1} category="meat" />
      </li>
      <li>
        <Item name="Pasta sauce 🍝" quantity={3} category="canned goods" />
      </li>
      <li>
        <Item name="Spaghetti, 454 g 🍝" quantity={2} category="dry goods" />
      </li>
      <li>
        <Item name="Toilet paper, 12 pack 🧻" quantity={1} category="household" />
      </li>
      <li>
        <Item name="Paper towels, 6 pack" quantity={1} category="household" />
      </li>
      <li>
        <Item name="Dish soap 🍽️" quantity={1} category="household" />
      </li>
      <li>
        <Item name="Hand soap 🧼" quantity={4} category="household" />
      </li>
    </ul>
  );
}
