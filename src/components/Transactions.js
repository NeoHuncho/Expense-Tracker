import React from 'react'

export const Transactions = () => {
    return (
        <li className="minus">
            {transactions.text} <span>-$400</span><button className="delete-btn">x</button>
        </li>
    )
}
