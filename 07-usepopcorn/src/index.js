import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import StarRating from './StarRating';

function Test(){
  const [myRating, setMyRating] = React.useState(0);
  return (
    <div>
      <StarRating maxRating={5} getRating={setMyRating} />
      <p>the rating is {myRating}</p>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    {/* <App /> */}
    {/* <StarRating maxRating={10} />
        <Test/>
        <StarRating maxRating={5} color={"red"} 
        messages={["not good"," ok","good","super","fantastic"]}
        defaultRating={2} /> */}
        <App />

  </React.StrictMode>
);

