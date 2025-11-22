import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // Crear a partir del array de productos un array de jsx
  // Donde cada elemento sea:
  /*
    <div>
      <h2>{title}</h2>
      <span>{price}</span>
    </div>

    Pasos:
    - Crear una lista avacia
    - Por cada elemento de la lista transformarlo a html
    - Agregar el html a la lista (push)
  */
  const products = [
    {
      title: 'tv samsung 32"',
      price: 200,
      id: 1
    },
    {
      title: 'tv samsung 42"',
      price: 350,
      id: 2
    },
    {
      title: 'tv samsung 60"',
      price: 600,
      id: 3
    },
  ]
  
    const productJSX = products.map( 
      (product) => {
        return (
          <div>
            <h2>{product.title}</h2>
            <span>{product.price}</span>
          </div>
        )
      }
    )

  
      
  //React List
  //Basicamente son listas de JSX (HTML).
  //
  /*  const lista_JSX= [
    <div>Hola</div>,
    <div>Que tal?</div>,
    <div>Adios</div> */
  
  return (
    <div>
      {productJSX}
    </div>
  )
}
export default App
