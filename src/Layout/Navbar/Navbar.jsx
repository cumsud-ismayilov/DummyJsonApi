import React from 'react'

function Navbar({setSearchItem}) {
    function inputHandler(e) {
    setSearchItem(e.target.value)
  }
  return (
    <header className='bg-slate-800 flex justify-between p-[16px]'>
        <h1 className='text-2xl font-bold text-white'>ProductStore.</h1>
        <input type="text" placeholder='Search product...' className="border border-gray-300 text-white rounded-md px-4 py-2  " onChange={inputHandler} />
    </header>
  )
}

export default Navbar
