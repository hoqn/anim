import { useState } from "react";
import * as itemApi from "./api/items";
import { ItemListContext } from "./components/context";
import ItemList from "./components/item-list";
import ItemOverlay from "./components/item-overlay";

export default function App() {
  const items = itemApi.getItems();
  const [activeItemId, setActiveItemId] = useState<number | null>(null);

  return (
    <div className="px-4 py-8">
      <div className="text-center px-4 py-6">
        <h2 className="text-lg font-bold">리스트</h2>
      </div>
      <div>
        <ItemListContext.Provider value={{ items, activeItemId, setActiveItemId }}>
          <ItemOverlay />
          <ItemList />
        </ItemListContext.Provider>
      </div>
    </div>
  );
}
