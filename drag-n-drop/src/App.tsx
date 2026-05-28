import { useState } from 'react'
import './App.css'

function App() {

  // QuadrantId allowed values
  type QuadrantId =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right"

  // ShapeLocation Type, limits possible quadrant values
  type ShapeLocation = {
    id: string;
    quadrant: QuadrantId;
  }

  // Quadrant type
  type Quadrant = {
    id: QuadrantId;
    label: string;
  }

  // quadrants array
  const quadrants: Quadrant[] = [
    {id: "top-left", label: "Top Left"},
    {id: "top-right", label: "Top Right"},
    {id: "bottom-left", label: "Bottom Left"},
    {id: "bottom-right", label: "Bottom Right"},
  ]

  // Mapping between a quadrant id and what shape it represents
  const shapeMapping = { 
    "top-left": "circle",
    "top-right": "hexagon",
    "bottom-left": "square",
    "bottom-right": "triangle"
  };

  // useState to store and update shape locations
  const [shapeLocations, setShapeLocation] = useState<ShapeLocation[]>([
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
        {quadrants
        .map((quadrant) => 
          <div className='quadrant' id={`${quadrant.id}`}>
            {renderShapes(quadrant.id)}
          </div>
        )}
      </div>
    </>
  )
}

export default App
