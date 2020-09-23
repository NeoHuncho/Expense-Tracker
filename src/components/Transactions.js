import React,{useContext/*for global state*/} from 'react';
import {GlobalContext /*for global state*/} from '../context/GlobalState'

export const Transactions = ({transaction}) => {
    const{deleteTransaction}=useContext(GlobalContext);
    const sign = transaction.amount < 0 ? '-' : '+';

    return (
        <li className={transaction.amount <0 ?'minus': 'plus'}/*classname of minus if <0 and plus if >0*/>             
            {transaction.text} <span>{sign}${Math.abs/*absolute so only one - sign*/(transaction.amount)}</span>
            <button onClick={()=> deleteTransaction(transaction.id)}className="delete-btn">x</button>
        </li>
    )
}
