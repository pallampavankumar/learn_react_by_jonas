import { useState } from "react";


export default function App() {
    const [money,setMoney]=useState(0);
    const [myPer,setMyPer]=useState(0);
    const [frPer,setFrPer]=useState(0);
    function handleMoney(e){
      setMoney(Number(e.target.value));
    }
    function handleMyPer(e){
      setMyPer(Number(e.target.value));
    }
    function handleFrPer(e){
      setFrPer(Number(e.target.value));
    }
    function handleReset(){
      setMoney(0);
      setMyPer(0);
      setFrPer(0);
    }
  return (
    <div>
     hello
    <Money money={money} handleMoney={handleMoney}/>
    <Me myPer={myPer} handleMyPer={handleMyPer}/>
    <Friend frPer={frPer} handleFrPer={handleFrPer}/>
    <TotalMoney money={money} handleMoney={handleMoney} myPer={myPer} frPer={frPer} handleReset={handleReset}/>
    </div>
  );
}

function Money({money,handleMoney}){

  return (
    <div>
       How much was the bill.  <input type="number" value={money} name="money" onChange={handleMoney}/>
    </div>
  )
}
function Me({myPer,handleMyPer}){

  return (
    <div>
      How did you like the service?
      <select  value={myPer} onChange={handleMyPer}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">it was ok (5%)</option>
        <option value="10">it was good (10%)</option>
        <option value="20">it was amazing (20%) </option>
      </select>
    </div>
  )
}
function Friend({frPer,handleFrPer}){
  return (
    <div>
      How did your friend like the service?
      <select  value={frPer} onChange={handleFrPer}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">it was ok (5%)</option>
        <option value="10">it was good (10%)</option>
        <option value="20">it was amazing (20%) </option>
      </select>
    </div>
  )
}

function TotalMoney({money,handleMoney,myPer,frPer,handleReset}){
  const [TotalMoney,setTotalMoney]=useState(money);

  return (
    <div>
       <p><b>you pay {TotalMoney>0?'$'+TotalMoney:""}  (${TotalMoney>0?(TotalMoney+' + $'+(myPer+frPer)/2):""})</b></p>
       <button onClick={handleReset}>Reset</button>
    </div>
  )
}

