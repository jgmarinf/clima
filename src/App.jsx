import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import "./assets/components/Clima.jsx"
import Clima from './assets/components/Clima.jsx'
import Login from './assets/components/Login.jsx'
import useApi from './assets/hooks/useApi'

function App() {

  const {resApi , isLoading} = useApi()

  return (
    <div className="App">{
       isLoading ?
        <Login></Login>
      :
        <Clima resApi = {resApi}></Clima>
    }

    </div>
  )
}

export default App
