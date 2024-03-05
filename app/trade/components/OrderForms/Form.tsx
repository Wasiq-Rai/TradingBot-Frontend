<<<<<<< HEAD
"use client";
import React, { useState , useEffect} from "react";
import axios from "axios";

const OrderForm = ({ buttonType }: { buttonType: string }) => {
  const [range, setRange] = useState<string>("1000");
  const buttonColor = buttonType === "Buy" ? "bg-green-500" : "bg-red-500";

  const [predictions, setPredictions] = useState({});


  const [formData, setFormData] = useState({});

const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
        ...prevState,
        [name]: value
    }));
};



  const formSubmitHandler = async(e:any) => {
    e.preventDefault();
    console.log(formData)

    try {
      const response = await axios.get('http://localhost:8000/order', {
      });
      // Handle response data as needed
      setPredictions(response.data.order);
  } catch (error) {
      // Handle error
      console.error('Error fetching data:', error);
  }
};

useEffect(() => {
  console.log(predictions);
}, [predictions]); 

  return (
    <form className="w-full px-10 py-10 mx-auto" onSubmit={formSubmitHandler}>
      <div className="mb-5">
        <label
          htmlFor="price"
          className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Price
        </label>
        <input
          type="text"
          id="price"
          className="bg-white border border-gray-300 text-gray-900 dark:text-gray-100 placeholder-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600"
          placeholder="Price"
          name= "price"
          onChange={handleChange}
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="username-success"
          className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500"
        >
          Amount
        </label>
        <input
          type="text"
          id="username-success"
          className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-gray-400 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-500"
          placeholder="USDT"
          name = 'amount'
          onChange={handleChange}
        />
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-500">
          <span className="font-medium">Available</span> $9182.1231231
        </p>
      </div>

      <div className="relative mb-10">
        <label htmlFor="labels-range-input" className="sr-only">
          USDT
        </label>
        <input
          id="labels-range-input"
          type="range"
          value={range}
          onChange={(e) => setRange(e.target.value)}
          min="100"
          max="1500"
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
        <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">
          Min ($10)
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-1/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">
          $500
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-2/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">
          $1000
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">
          Max ($11500)
        </span>
      </div>

      <div>
        <label
          htmlFor="symbol"
          className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          {/* {predictions[0] ? predictions[0] : "Wating"} */}
        </label>
        <input
          type="text"
          id="symbol"
          className="bg-white border border-gray-300 text-gray-900 dark:text-gray-100 placeholder-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600"
          placeholder="AAPL"
        />
      </div>
      <button
        type="submit"
        className={`rounded-lg px-4 py-2.5 text-sm mt-4 w-full ${buttonColor} text-white`}
      >
        {buttonType}
      </button>
    </form>
  );
};
=======
"use client"
import React, { useState } from 'react';

const OrderForm = ({ buttonType }:{buttonType: string}) => {
  const [range, setRange] = useState<string>("1000")
  const buttonColor = buttonType === 'Buy' ? 'bg-green-500' : 'bg-red-500';
  
  return (

    <form className="w-full px-10 py-10 mx-auto">
      <div className="mb-5">
        <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Price</label>
        <input type="text" id="price" className="bg-white border border-gray-300 text-gray-900 dark:text-gray-100 placeholder-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600" placeholder="Price"/>
      </div>
      <div className="mb-5">
        <label htmlFor="username-success" className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">Amount</label>
        <input type="text" id="username-success" className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-gray-400 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-500" placeholder="USDT"/>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-500"><span className="font-medium">Available</span> $9182.1231231</p>
      </div>
      
<div className="relative mb-10">
    <label htmlFor="labels-range-input" className="sr-only">USDT</label>
    <input id="labels-range-input" type="range" value={range} onChange={(e) => setRange(e.target.value)} min="100" max="1500" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"/>
    <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">Min ($10)</span>
    <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-1/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">$500</span>
    <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-2/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">$1000</span>
    <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">Max ($11500)</span>
</div>

      <div>
        <label htmlFor="symbol" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Total</label>
        <input type="text" id="symbol" className="bg-white border border-gray-300 text-gray-900 dark:text-gray-100 placeholder-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600" placeholder="AAPL"/>
      </div>
      <button type="button" className={`rounded-lg px-4 py-2.5 text-sm mt-4 w-full ${buttonColor} text-white`}>{buttonType}</button>
    </form>
  );
}
>>>>>>> wasiq-branch

export default OrderForm;
