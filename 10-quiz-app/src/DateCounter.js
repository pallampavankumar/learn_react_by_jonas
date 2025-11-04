import { useState,useReducer } from "react";

function action(state,action){
  // if (action.type === "increment") {
  //   return state + action.value;
  // }
  // else if (action.type === "decrement") {
  //   return state - action.value;
  // }
  // else if (action.type === "set") {
  //   return action.value;
  // }
  console.log(state,action);

  switch(action.type){
    case "increment":
      return {...state,count:state.count+state.step}
    case "decrement":
      return {...state,count:state.count-state.step}
    case "setCount":
      return {...state,count:action.payLoad};
    case "setStep":
      return {...state,step:action.payLoad}
  }
}
function DateCounter() {
  // const [count, setCount] = useState(0);
  const initialState={count:0,step:1};
  const [state, dispatch] = useReducer(action,initialState);
  const {count,step}=state;
  // const [step, setStep] = useState(1);

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    // setCount((count) => count - 1);
    // setCount((count) => count - step);
    dispatch({ type: "decrement",value: 1 });
  };

  const inc = function () {
    // setCount((count) => count + 1);
    // setCount((count) => count + step);
    dispatch({ type: "increment", value: 1 });
  };

  const defineCount = function (e) {
    // setCount(Number(e.target.value));
    dispatch({ type: "setCount", payLoad: Number(e.target.value) });
  };

  const defineStep = function (e) {
    // setStep(Number(e.target.value));
    dispatch({type:"setStep",payLoad: Number(e.target.value)})
  };

  const reset = function () {
    // setCount(0);
        // dispatch({ type: "set", value: Number(e.target.value) });
    // setStep(1);
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
