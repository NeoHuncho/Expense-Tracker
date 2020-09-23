import React, {useContext/*for global state*/} from 'react';
import {Transactions} from './Transactions'

import {GlobalContext /*for global state*/} from '../context/GlobalState'

export const TransactionList = () => {
  const {transactions}/*deststuturing to only pull out transactions and not whole object*/ = useContext(GlobalContext); //pullling in global state

    return (
        <div>
         <h3>History</h3>
      <ul  className="list">
        {transactions.map(transaction=>( <Transactions key={transaction.id} transaction={transaction} />
        ))}
      </ul>    
        </div>
    )
}
