const itemEmojis = {
  bananas: "🍌",
  bread: "🍞",
  broccoli: "🥦",
  "chicken breasts, 1 kg": "🍗",
  "dish soap": "🍽️",
  "eggs, dozen": "🥚",
  "hand soap": "🧼",
  "milk, 4 L": "🥛",
  "paper towels, 6 pack": "🧻",
  "pasta sauce": "🥫",
  "spaghetti, 454 g": "🍝",
  "toilet paper, 12 pack": "🧻",
};

export default function Item({
  name,
  quantity,
  category,
  onSelect,
}) {
  const cleanName = name.trim();

  return (
    <li
      onClick={onSelect}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onSelect?.();
        }
      }}
      role="button"
      tabIndex={0}
      className="bg-slate-800 text-white p-4 mb-4 cursor-pointer hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
    >
      <h2 className="text-3xl font-bold">
        {cleanName}{" "}
        <span>{itemEmojis[cleanName] || "🛒"}</span>
      </h2>

      <p className="text-2xl mt-2">
        Buy {quantity} in {category}
      </p>
    </li>
  );
}