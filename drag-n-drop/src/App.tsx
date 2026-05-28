import { useState } from 'react'
import './App.css'

function App() {

  // Mapping between a quadrant id and what shape it represents
  const shapeMapping = { 
    "top-left": "circle",
    "top-right": "hexagon",
    "bottom-left": "square",
    "bottom-right": "triangle"
  };

  // useState to store and update shape locations
  const [shapeLocations, setShapeLocation] = useState([
    {id: "shape-1", quadrant: "top-left"},
    {id: "shape-2", quadrant: "top-left"},
    {id: "shape-3", quadrant: "top-left"},
    {id: "shape-4", quadrant: "top-left"},
    {id: "shape-5", quadrant: "top-left"},
  ]);

  function renderShapes(quadrantId: string) {
    return shapeLocations
    .filter((shape) => shape.quadrant === quadrantId)
    .map((shape) => 
      <div key={shape.id} className={`${shapeMapping[quadrantId]}`} draggable/>
    )
  }

  return (
    <>
      <div className='quadrant-container'>
        <div className='quadrant' id='top-left'>
          Top Left

          {shapeLocations
            .filter((shape) => shape.quadrant === "top-left")
            .map((shape) => 
              <div key={shape.id} className='circle' draggable>
                {shape.id}
                </div>
            )
          }
          </div>
        <div className='quadrant' id='top-right'>Top Right</div>
        <div className='quadrant' id='bottom-left'>Bottom Left</div>
        <div className='quadrant' id='bottom-right'>Bottom Right</div>
      </div>
    </>
  )
}

export default App
