import React, { useState } from 'react'

export default function Cash() {
    const [cashwithdrawal, setCashwithDrawal] = useState('2000');
    
    const name = "Sarah Williams";
    const firstletter = name.charAt(0).toUpperCase();

    return (
        <div className="cash-withdrawal-app-container">
            <div className="cash-withdrawal-container">
                <div className="user-details-container">
                    <div className="initial-container">
                        <p className="initial">{firstletter}</p>
                    </div>
                    <p className="username">{name}</p>
                </div>
                <div className="balance-container">
                    <p className="your-balance">Your Balance</p>
                    <p className="balance-amount">
                        {cashwithdrawal}
                        <br />
                        <span className="currency">In Rupees</span>
                    </p>
                </div>
                <p className="withdraw">Withdraw</p>
                <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>
                <div className='denominations-list' >
                    <div className='denomination-item '>
                        <button onClick={() => setCashwithDrawal(cashwithdrawal - 50)} className='denomination-button'>50</button>
                        <button onClick={() => setCashwithDrawal(cashwithdrawal - 200)} className='denomination-button'>200</button>
                    </div>
                    <div className='denomination-item'>
                        <button onClick={() => setCashwithDrawal(cashwithdrawal - 100)} className='denomination-button'>100</button>
                        <button onClick={() => setCashwithDrawal(cashwithdrawal - 500)} className='denomination-button'>500</button>
                    </div>

                </div>
            </div>
        </div>
    )
}
