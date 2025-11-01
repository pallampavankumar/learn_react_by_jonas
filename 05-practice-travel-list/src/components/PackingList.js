import { useState } from "react";
import { Item } from "./Item";

export function PackingList({ items, handleDeleteitem, handleIsChecked, handleClearItems }) {
  const [sortBy, setSortBy] = useState("input");
  let sorteditems;
  if (sortBy === "input") sorteditems = items;
  if (sortBy === "description") sorteditems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed") sorteditems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sorteditems.map(item => (
          <Item item={item} handleDeleteitem={handleDeleteitem} key={item.id} handleIsChecked={handleIsChecked} />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => (setSortBy(e.target.value))}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sorg by packed status</option>
        </select>
        <button onClick={handleClearItems}>clear list</button>
      </div>
    </div>
  );
}
