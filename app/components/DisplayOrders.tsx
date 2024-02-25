import React from 'react'

const DisplayOrders = () => {
  return (
    <div className="order-display flex flex-row ">
  <div className="flex flex-row items-center space-x-4">
  <div id="tab-0" className="inline  active bg-blue-500 text-white rounded-md p-2 cursor-pointer">
    Open Orders(0)
  </div>
  <div id="tab-1" className="inline  bg-blue-500 text-white rounded-md p-2 cursor-pointer">
    Order History
  </div>
  <div id="tab-2" className="inline  bg-blue-500 text-white rounded-md p-2 cursor-pointer">
    Trade History
  </div>
  <div id="tab-3" className="inline  bg-blue-500 text-white rounded-md p-2 cursor-pointer">
    Funds
  </div>
  <div id="tab-4" className="inline  bg-blue-500 text-white rounded-md p-2 cursor-pointer">
    Grid Orders
  </div>
</div>
<div className="flex items-center justify-center mt-4 space-x-4">
  <label className="flex items-center">
    <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-500" />
    <span className="ml-2 text-gray-800">Hide Other Pairs</span>
  </label>
  <div className="cursor-pointer bg-red-500 text-white rounded-md p-2">Cancel All</div>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" fill="none" className="w-16 h-16 text-gray-500">
    <path fillRule="evenodd" clipRule="evenodd" d="M26 8h38l20 20v60H26V8zm48 29H36v4h38v-4zm0 9H36v4h38v-4zm-38 9h38v4H36v-4zm34 16l-4-4-4 4 4 4 4-4z" fill="url(#paint0)"></path>
    <path opacity="0.15" d="M86 50l3-3 3 3-3 3zM47 21l3-3 3 3-3 3zM84 28H64V8l20 20z" fill="#929AA5"></path>
    <path fillRule="evenodd" clipRule="evenodd" d="M4.172 73.171l14.5-14.5 5.656 5.658-14.5 14.5-5.656-5.657z" fill="url(#paint1)"></path>
    <path fillRule="evenodd" clipRule="evenodd" d="M51 48c0-8.837-7.163-16-16-16s-16 7.163-16 16 7.163 16 16 16 16-7.163 16-16zm4 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z" fill="url(#paint2)"></path>
    <defs>
      <linearGradient id="paint0" x1="55" y1="8" x2="55" y2="88" gradientUnits="userSpaceOnUse">
        <stop stopColor="#929AA5" stopOpacity="0.1"></stop>
        <stop offset="1" stopColor="#929AA5" stopOpacity="0.25"></stop>
      </linearGradient>
      <linearGradient id="paint1" x1="4.172" y1="68.75" x2="24.328" y2="68.75" gradientUnits="userSpaceOnUse">
        <stop stopColor="#929AA5"></stop>
        <stop offset="1" stopColor="#76808F"></stop>
      </linearGradient>
      <linearGradient id="paint2" x1="15" y1="48" x2="55" y2="48" gradientUnits="userSpaceOnUse">
        <stop stopColor="#929AA5"></stop>
        <stop offset="1" stopColor="#76808F"></stop>
      </linearGradient>
    </defs>
  </svg>
  <div className="text-gray-500">No Data</div>
</div>

</div>

  )
}

export default DisplayOrders