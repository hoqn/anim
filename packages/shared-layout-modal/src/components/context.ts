import { createContext, useContext } from "react";
import { Item } from "../api/items";

export interface ItemListContextState {
  items: Item[];
  activeItemId: number | null;
  setActiveItemId(id: number | null): void;
}

export const ItemListContext = createContext<ItemListContextState | undefined>(undefined);

export function useItemListContext() {
  const ctx = useContext(ItemListContext);

  if (ctx === undefined)
    throw new Error("Context ERROR");

  return ctx;
}