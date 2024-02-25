import React from 'react'
import NavBar from '../components/NavBar';
import StockPriceHeader from '../components/OrdersStockPriceHeader';
import DisplayOrders from '../components/DisplayOrders';
import OrderForm from '../components/BuySellForms';

const Orders = () => {
  return (
    <div>
        <NavBar/>
        <StockPriceHeader/>
        <br/>
        <DisplayOrders/>
        <OrderForm/>
    </div>
  )
}

export default Orders