import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Reports from './pages/Reports'
import Dashboard from './pages/Dashboard'
import Electronicitems from './pages/Items/Electronicitems'
import Householditems from './pages/Items/Householditems'
import Groceryitems from './pages/Items/Groceryitems'
import Items from './pages/Items/items'



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'element={<Home/>}></Route>
        <Route path='/reports'element={<Reports/>}></Route>
        <Route path='/dashboard'element={<Dashboard/>}></Route>
        <Route path='/items'element={<Items/>}></Route>
        <Route path="/grocery"element={<Groceryitems/>}></Route>
        <Route path='/electronic'element={<Electronicitems/>}></Route>
        <Route path='/household'element={<Householditems/>}></Route>
        


      </Routes>
    </BrowserRouter>
  )
}
