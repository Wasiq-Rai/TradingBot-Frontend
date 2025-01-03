import React from 'react'
import Link from 'next/link'

const ChartHeader = () => {
  return (
    

<ul className="flex flex-wrap  bg-blue-950 text-sm font-medium text-center text-gray-500 dark:text-gray-400">
    <li className="me-2">
        <Link href="#" className="inline-block px-4 py-3 text-yellow-200 rounded-lg active" aria-current="page">1s</Link>
    </li>
    <li className="me-2">
        <Link href="#"  className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">15min</Link>
    </li>
    <li className="me-2">
        <Link href="#" className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">1h</Link>
    </li>
    <li className="me-2">
        <Link href="#" className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">4h</Link>
    </li>
    <li className="me-2">
        <Link href="#"  className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">1d</Link>
    </li>
    <li className="me-2">
        <Link href="#" className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">1w</Link>
    </li>
    <li className="me-2">
        <Link href="#" className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">1m</Link>
    </li>
    <li>
        <Link className="inline-block px-4 py-3 text-gray-400 cursor-not-allowed dark:text-gray-500" href={''}>1y</Link>
    </li>
    <svg className="pt-4 w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 10">
    <path d="M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z"/>

</svg>

    <div className='flex flex-row float-right pl-16'>
    <li className="me-2">
        <Link href="#" className="inline-block px-4 py-3 rounded-lg  text-yellow-200 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">Original</Link>
    </li>
    <li className="me-2">
        <Link href="#" className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">TradingView</Link>
    </li>
    <li>
        <Link className="inline-block px-4 py-3 text-gray-400 cursor-not-allowed dark:text-gray-500" href={''}>Depth</Link>
    </li>
    </div>
</ul>

  )
}

export default ChartHeader