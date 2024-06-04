import { motion } from "framer-motion";
import { useEffect, useMemo } from "react";
import { useItemListContext } from "./context";

export default function ItemOverlay() {
  const { items, activeItemId, setActiveItemId } = useItemListContext();

  // find active item
  const item = useMemo(() => (activeItemId === null ? null : items.find((it) => it.id === activeItemId) || null), [activeItemId, items]);

  useEffect(() => {
    const handler = (ev: KeyboardEvent) => {
      if (ev.key === "Escape") setActiveItemId(null);
    };
    window.addEventListener("keydown", handler);
    return () => void window.removeEventListener("keydown", handler);
  }, [setActiveItemId]);

  if (item === null) return null;
  if (item === undefined) return null;

  return (
    <div
      className="fixed inset-0 z-10 flex items-center justify-center"
      onClick={(ev) => {
        if (ev.target === ev.currentTarget) setActiveItemId(null);
      }}
    >
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 z-10 pointer-events-none backdrop-blur bg-black/5"
      ></motion.div>
      {/* Modal */}
      <motion.div
        layoutId={`item-${item.id}`}
        className="z-30 flex flex-col w-[80%] max-w-screen-md overflow-hidden items-start bg-gray shadow-lg bg-white border border-gray-200 rounded-xl"
      >
        <div className="flex flex-row items-center w-full gap-4 px-4 cursor-pointer">
          <motion.img
            layout
            layoutId={`item-${item.id}-img`}
            className="rounded-full shadow-sm object-cover"
            width={48}
            height={48}
            style={{ width: 48, height: 48 }}
            src={item.image}
            alt={item.title}
          />
          <div className="flex flex-grow justify-between items-center py-4">
            <motion.div layoutId={`item-${item.id}-left`}>
              <h3 className="text-sm font-semibold">{item.title}</h3>
              <p className="text-xs text-gray-700">{item.subline}</p>
            </motion.div>
            <motion.div layoutId={`item-${item.id}-right`}>
              <button className="px-2 py-1 bg-orange-100 text-orange-600 text-xs font-semibold rounded-full">자세히</button>
            </motion.div>
          </div>
        </div>
        <motion.div layout className="p-4 border-t border-gray-200 text-sm">
          <p>{item.description}</p>
        </motion.div>
      </motion.div>
    </div>
  );
}
