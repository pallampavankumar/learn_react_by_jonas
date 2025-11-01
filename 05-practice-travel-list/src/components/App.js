import { useState } from "react";
import Logo  from "./Logo";
import  PackingList from "./PackingList";
import  Stats  from "./Stats";
import Form from "./Form";
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },

];

export default function App(){
    const [items,setItems]=useState([]);
 
  function handleClearItems(){
    const confirmed=window.confirm("are you sure you want to clear all the items?");
    console.log(confirmed);
    if(confirmed) setItems([]);
  }
  function handleItems(item){
    setItems(items=>[...items,item]);
          console.log(items);
  }
    function handleIsChecked(id){
    setItems(items=>items.map(item=>item.id===id?{...item,packed:!item.packed}:item))
  }

  function handleDeleteitem(id){
    setItems(items=>items.filter(item=>item.id!==id))
  }
  return <div className="app">
     <Logo/>
     <Form handleItems={handleItems}/>
     <PackingList items={items} handleDeleteitem={handleDeleteitem} handleIsChecked={handleIsChecked} handleClearItems={handleClearItems}/>
     <Stats items={items}/>
  </div> 
}


