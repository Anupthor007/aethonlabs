interface Props {
  onSelect: (value: string) => void;
}

const ingredients = [
  "🥚 Egg",
  "🧀 Paneer",
  "🍚 Rice",
  "🥔 Potato",
  "🌽 Corn",
  "🥛 Curd",
  "🍅 Tomato",
  "🧅 Onion",
  "🍗 Chicken",
  "🌶️ Spicy Snack",
];

export default function SuggestedIngredients({
  onSelect,
}: Props) {
  return (
    <div className="flex flex-wrap gap-3 mt-4">

      {ingredients.map((item) => (
        <button
          key={item}
          onClick={() => onSelect(item)}
          className="
            px-4
            py-2
            rounded-full
            bg-zinc-900
            border
            border-zinc-800
            hover:border-orange-500
            hover:bg-orange-500/10
            transition-all
            text-sm
            text-zinc-300
          "
        >
          {item}
        </button>
      ))}

    </div>
  );
}