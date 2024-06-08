import { Variants, motion } from "framer-motion";
import { MouseEventHandler } from "react";
import * as itemApi from "../api/items";
import { useItemListContext } from "./context";

function ItemRow({ item, active, onClick }: { item: itemApi.Item; active: boolean; onClick?: MouseEventHandler }) {
  const variants: Variants = {
    active: {
      // justifyItems: "start",
      // alignItems: "start",
    },
    inactive: {},
  };

  return (
    <motion.li
      key={item.id}
      variants={variants}
      layoutId={`item-${item.id}`}
      className="flex flex-row items-center w-full max-w-lg px-4 gap-4 cursor-pointer bg-inherit"
      onClick={onClick}
      animate={active ? "active" : "inactive"}
      whileTap={{
        scale: 0.98,
      }}
    >
      <motion.img
        layoutId={`item-${item.id}-img`}
        className="rounded-full shadow-sm object-cover"
        width={48}
        height={48}
        style={{ width: 48, height: 48 }}
        src={item.image}
        alt={item.title}
      />
      <div className="flex flex-grow justify-between items-center py-4 border-b border-gray-200">
        <motion.div layoutId={`item-${item.id}-left`}>
          <h3 className="text-sm font-semibold">{item.title}</h3>
          <p className="text-xs text-gray-700">{item.subline}</p>
        </motion.div>
        <motion.div layoutId={`item-${item.id}-right`}>
          <button className="px-2 py-1 bg-orange-100 text-orange-600 text-xs font-semibold rounded-full">자세히</button>
        </motion.div>
      </div>
    </motion.li>
  );
}

export default function ItemList() {
  const { items, activeItemId, setActiveItemId } = useItemListContext();

  return (
    <ul className="relative flex flex-col items-center w-full px-6 divide-gray-200 bg-white">
      {items.map((item) => (
        <ItemRow key={item.id} item={item} active={item.id === activeItemId} onClick={setActiveItemId.bind(null, item.id)} />
      ))}
    </ul>
  );
}
