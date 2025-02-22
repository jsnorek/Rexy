import { useState } from 'react'
import './App.css'
import Landing from './components/Landing/Landing'
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import Navbar from './components/Navbar/Navbar';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primeicons/primeicons.css';

// https://developer.themoviedb.org/
// https://rexy.netlify.app/

function App() {
  const [count, setCount] = useState(0)
  return (
    <PrimeReactProvider>
      <Navbar />
      <Landing />
    </PrimeReactProvider>
  )
}

export default App
