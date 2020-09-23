import React,{useContext} from 'react'
import {GlobalContext /*for global state*/} from '../context/GlobalState'

export const Balance = () => {
    const {transactions}/*deststuturing to only pull out transactions and not whole object*/ = useContext(GlobalContext); //pullling in global state
    const amounts = transactions.map(transaction => transaction.amount);

    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    return (
        <>
             <h4>Your Balance</h4>
      <h1 id="balance">{total}</h1>
        </>
    )
}
