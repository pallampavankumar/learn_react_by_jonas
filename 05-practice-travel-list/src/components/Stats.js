export function Stats({ items }) {
  if (items.length == 0)
    return (<em class="stats">
      start adding some items to your packing list ✈️
    </em>);
  const numberOfItems = items.length;
  const packedItems = items.filter(item => item.packed).length;
  const perOfPacked = Math.round((packedItems / numberOfItems) * 100);
  return <footer className="stats">
    <em>💼 You have {numberOfItems} items on your list, and you already packed {packedItems} {perOfPacked}%</em>
  </footer>;
}
