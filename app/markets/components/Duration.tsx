import React from 'react'
import Link from 'next/link'

const Duration = () => {
  return (
    

<ul className="flex pr-4 flex-wrap rounded-lg  bg-gray-200 text-sm font-medium text-center text-gray-500 dark:text-gray-400">
    <li className="me-2">
        <Link href="#" className="inline-block px-4 py-3 text-black rounded-lg active" aria-current="page">1s</Link>
    </li>
    <li className="me-2">
        <Link href="#"  className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">15min</Link>
    </li>
    <li className="me-2">
        <Link href="#" className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">1h</Link>
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
    <svg className="pt-4 w-6 h-6 text-gray-800 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 10">
    <path d="M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z"/>

</svg>

</ul>

  )
}

export default Duration