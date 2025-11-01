import { useState } from "react";

export default function Form({ handleItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newitem = { description, quantity, packed: false, id: Date.now() };
    console.log(newitem);
    handleItems(newitem);
    setDescription("");
    setQuantity(1);
  }
  return <form className="add-form" onSubmit={handleSubmit}>
    <h3>what do you need for your 😍 trip?</h3>
    <select value={quantity} onChange={e => setQuantity(e.target.value)}>
      {Array.from({ length: 20 }, (_, i) => i + 1).map(
        (num) => <option value={num} key={num}>{num}</option>
      )}
      console.log(quantity)
    </select>
    <input type="text" placeholder="item..." value={description} onChange={(e) => {
      console.log(e.target.value);
      setDescription(e.target.value);
    }} />
    <button>Add</button>
  </form>;
}
