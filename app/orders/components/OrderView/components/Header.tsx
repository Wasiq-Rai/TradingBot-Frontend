import React from 'react'
import Link from 'next/link'

const OrderViewHeader = () => {
  return (
    

<ul className="flex flex-wrap  bg-blue-950 text-sm font-medium text-center text-gray-500 dark:text-gray-400">
    <li className="me-2">
        <Link href="#" className="inline-block px-4 py-3 text-yellow-200 rounded-lg active" aria-current="page">Open Orders</Link>
    </li>
    <li className="me-2">
        <Link href="#"  className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">Order History</Link>
    </li>
    <li className="me-2">
        <Link href="#" className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">Trade History</Link>
    </li>
    <li className="me-2">
        <Link href="#" className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">Funds</Link>
    </li>
    
</ul>

  )
}

export default OrderViewHeader