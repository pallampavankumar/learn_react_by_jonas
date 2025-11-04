import { use, useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];
function Button({children,onClick}){
  return (
   <button className="button" onClick={onClick}>{children}</button>
  );
}
export default function App(){
  const [friends,setFriends]=useState(initialFriends);
  const [showAddFriend,setShowAddFriend]=useState(false);
  const [selectedFriend,setSelectedFriend]=useState(null);
  function handleShowAddFriend(){
    setShowAddFriend(!showAddFriend);
  }
  function handleFriends(friend){
    setFriends(friends => [...friends,friend]);
    setShowAddFriend(false);
  }
  function handleSelectedFriend(friend){
    setSelectedFriend(curr=>curr?.id==friend.id?"":friend);
  }
  function handleFormSplit(value){
      console.log(value);
      setFriends(friends.map(friend=>friend.id===selectedFriend.id?{...friend,balance:friend.balance+value}:friend));
      setSelectedFriend(null);
  }
  return <div className="app">
    <div className="sidebar">
    <FriendList friends={friends} handleSelectedFriend={handleSelectedFriend} selectedFriend={selectedFriend}/>
    {showAddFriend &&<FormAddFriend handleFriends={handleFriends}/>}
    <Button onClick={handleShowAddFriend}>{showAddFriend?"close":"Add Friend"}</Button>
    </div>
    {selectedFriend &&<FormSplitBill selectedFriend={selectedFriend} handleFormSplit={handleFormSplit}/>}
  </div>
}

function FriendList({friends, handleSelectedFriend,selectedFriend}){
  return (<ul>
    {friends.map((friend)=>
    <Friend friend={friend} handleSelectedFriend={handleSelectedFriend} selectedFriend={selectedFriend}/>
      )}
  </ul>)
}

function Friend({friend,handleSelectedFriend,selectedFriend}){
  const isSelected=selectedFriend?.id==friend.id;
   return (
   <li className={isSelected?"selected":""}>
     <img src={friend.image} alt={friend.name}/>
     {friend.name}
     {friend.balance <0 && <p className="red">You owe {friend.name} {Math.abs(friend.balance)}</p>}
     {friend.balance >0 && <p className="green">{friend.name} owes you {friend.balance}</p>}
     {friend.balance ==0 && <p>You both are even</p>}
     <Button onClick={()=>handleSelectedFriend(friend)}>{isSelected?"close":"select"}</Button>
   </li>
   );
}


function FormAddFriend({handleFriends}){
  const [name,setName]=useState('');
  const [image,setImage]=useState('https://i.pravatar.cc/48');
  function handleSubmit(e){
    e.preventDefault();
    if(!name || !image) return;
    const id=crypto.randomUUID();
    const newFriend={
      id,
      name,
      image:`${image}?=${id}`,
      balance:0,
    }
    handleFriends(newFriend);
    setName('');
    setImage('https://i.pravatar.cc/48')
  }
  return ( 
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>🙆friend name</label>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
      <label>✈️image url</label>
      <input type="text" value={image} onChange={(e)=>setImage(e.target.value)}/>
      <Button>Add</Button>
    </form>   
  );
}

function FormSplitBill({selectedFriend,handleFormSplit}){
  const [bill,setBill]=useState("");
  const [paidByUser,setPaidByUser]=useState("");
  const [whoIspaying,setWhoIsPaying]=useState("friend");
  const paidByFriend=bill?bill-paidByUser:'';
  function handleSubmit(e){
    e.preventDefault();
    if(!bill || !paidByFriend) return;

    handleFormSplit(whoIspaying=="user"?paidByFriend:-paidByUser);
  }
  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>split a bill with {selectedFriend.name}</h2>
      <label>🙆Bill value</label>
      <input type="text" value={bill} onChange={e=>setBill(Number(e.target.value))}/>

      <label>🙆Your expenses</label>
      <input type="text" value={paidByUser} onChange={e=>setPaidByUser(Number(e.target.value)>bill?bill:Number(e.target.value))}/>

      <label>🙆{selectedFriend.name}'s expense</label>
      <input type="text" disabled value={paidByFriend}/>
       <label>who is paying the bill</label>
       <select value={whoIspaying} onChange={e=>setWhoIsPaying(e.target.value)}>
          <option value="user">You</option>
          <option value="friend">{selectedFriend.name}</option>
       </select>

       <Button>Split the bill</Button>
    </form>
  );
}