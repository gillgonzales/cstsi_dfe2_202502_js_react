import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex flex-row justify-center">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {/* <div className="bg-[blue] mx-auto py-5 rounded-full w-[60px] h-[60px] font-bold text-white text-sm text-center"> */}
      <div className="circle">
        css
      </div>     
      <div className='bg-blue-500 mx-auto py-5 rounded-full size-[60px] font-bold text-white text-xs text-center'>
        tailwind
      </div>
      <div className="card">
        <button className="bg-red-500"  onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p className="bg-blue-600 mt-2 p-4 rounded-full">
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
