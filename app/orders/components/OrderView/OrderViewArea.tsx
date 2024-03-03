import React from 'react'
import OrderViewHeader from './components/Header'
import OrdersData from './components/OrdersData'


    const dummyOrders: never[] = [];

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