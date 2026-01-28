// eslint-disable-next-line no-unused-vars
import { context } from './Context/Context'
import { useState } from 'react';
import './App.css'
import AppRouter from './Routes/AppRoutes';
import Header from './Components/Haeder'


function App() {
  const [shopCourt , setShopCourt] = useState(0)
  const [favorite , setFavorite] = useState(0)
  
  
  
  return (
    <context.Provider value={{shopCourt , setShopCourt, setFavorite, favorite}}>
      <Header />
      <AppRouter />
    </context.Provider>
  )
}

export default App
