import { useState } from 'react'
import './App.css'

function App() {

  const shapeMapping = {
    "top-left": "circle",
    "top-right": "hexagon",
    "bottom-left": "square",
    "bottom-right": "triangle"
  };

  return (
    <>
      <div className='quadrant-container'>
        <div className='quadrant'>Top Left</div>
        <div className='quadrant'>Top Right</div>
        <div className='quadrant'>Bottom Left</div>
        <div className='quadrant'>Bottom Right</div>
      </div>
    </>
  )
}

export default App
