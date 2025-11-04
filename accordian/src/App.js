import { useState } from "react";
import "./styles.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
  },
  {
    title: "How long do I have to return my chair?",
    text:
      "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
  },
  {
    title: "Do you ship to countries outside the EU?",
    text:
      "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
  }
];

/**
 * Main application component that manages the FAQ items state and renders the Accordion component.
 *
 * @component
 * @returns {JSX.Element} The rendered App component containing the Accordion.
 */
export default function App() {
  const [faqsItem,setFaqsItem]=useState(faqs);
  return (
    <div>
      <Accordion items={faqsItem}/>
    </div>
  );
}

function Accordion({items}) {
  const [curr, setIsOpen]=useState(2);
  return <div>
    {items.map((el,i)=><AccordianItem ele={el} number={i} curr={curr} setIsOpen={setIsOpen}/>)}
  </div>;
}

function AccordianItem({ele,number,curr, setIsOpen}){
    
    const isOpen=curr==number;
    function handleOpen(){
      setIsOpen(number);
    }
    return <div className={`item ${isOpen?"open":""}`} onClick={handleOpen}>
      <p className="number">{number<9?`0${number+1}`:number+1}</p>
      <p className="text">{ele.title}</p>
      <p className="icon">{isOpen?'-':'+'}</p>
      {isOpen?<p className="content-box">{ele.text}</p>:""}
    </div>
}
