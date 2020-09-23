import React, {useState,useContext} from 'react'
import {GlobalContext /*for global state*/} from '../context/GlobalState'
export const AddTransaction = () => {
  //text is the name of the attribute we want in the state, setText is the method we use to set the text state and the '' is the default value of the text state 
  const [text, setText] =useState('');
  const [amount , setAmount] =useState(0);
  const{addTransaction}=useContext(GlobalContext);
  const onSubmit =e =>{
    e.preventDefault();
    const newTransaction={
      id:Math.floor(Math.random()*10000000),
      text,
      amount:+amount//converts amount from string to int
    
    }
    addTransaction(newTransaction);
  } 
  return (
        <div>
                 <h3>Add new transaction</h3>
      <form onSubmit={onSubmit} >
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value ={text} onChange= {(e) => setText(e.target.value)}  placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" id="amount" value={amount}  onChange= {(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form> 
        </div>
    )
}
