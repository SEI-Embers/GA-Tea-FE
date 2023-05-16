import React from 'react'

export default function HomePage() {
  return (
    
    <div className='h-screen'style={{
      backgroundImage: `url(${require('../../assets/main.jpg')})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    }}>
      <p className="text-white text-center text-xl font-bold text-2xl">Life After   GA</p>
      <div>
      <form className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
      <input
        type="text"
        placeholder="Username"
        className="w-full border border-gray-300 rounded-md py-2 px-3 mb-4"
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full border border-gray-300 rounded-md py-2 px-3 mb-4"
      />
      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-md py-2 px-4"
      >
        Submit
      </button>
    </form>
      </div>
    </div>
  )
}
