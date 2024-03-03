import React from 'react'
import OrderViewHeader from './components/Header'
import OrdersData from './components/OrdersData'


    const dummyOrders = [
      {
        date: '2024-02-24',
        pair: 'AAPL/USDT',
        type: 'Market',
        side: 'Buy',
        price: '18167.98',
        amount: '10',
        filled: '8',
        total: '145343.84',
        triggerConditions: 'None',
      },
      {
        date: '2024-02-23',
        pair: 'BTC/USDT',
        type: 'Limit',
        side: 'Sell',
        price: '45000',
        amount: '2',
        filled: '1',
        total: '90000',
        triggerConditions: 'None',
      },
      {
        date: '2024-02-22',
        pair: 'ETH/USDT',
        type: 'Stop-Limit',
        side: 'Buy',
        price: '3000',
        amount: '5',
        filled: '3',
        total: '15000',
        triggerConditions: 'None',
      },
    ];

const OrderViewArea = () => {
  return (
    <div>
        <OrderViewHeader/>
        <OrdersData
        orders={dummyOrders}
        />
    </div>
  )
}

export default OrderViewArea