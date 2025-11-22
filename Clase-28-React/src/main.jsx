import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { PI, sumar, restar } from './math.js'

/* 
  CreateRoot recibe un elemento del HTML y renderiza la app de react dentro de ese elemento
*/

createRoot(document.getElementById('root')).render(
  <App />
)
console.log(PI)
console.log(sumar(3, 4))
console.log(restar(10, 7))