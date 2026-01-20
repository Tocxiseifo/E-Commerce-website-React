import './App.css'
import FeaturedProductSection from './Components/featured-products-section';
import FeaturesSection from './Components/FeaturesSection';
import FirstSection from './Components/FirstSection';
import FooterSection from './Components/FooterSection';
import Header from './Components/Haeder'
import PromoBannerSection from './Components/promo-banner-section';
import TrendingSection from './Components/TrendingSection';
// eslint-disable-next-line no-unused-vars
import { context } from './Context/Context'
import { useState } from 'react';

function App() {
  const [shopCourt , setShopCourt] = useState(0)
  const [favorite , setFavorite] = useState(0)
  
  

  return (
    <context.Provider value={{shopCourt , setShopCourt,setFavorite , favorite}}>
      <Header />
      <div className='w-full h-auto  md:overflow-auto'>
        <FirstSection />
        <FeaturedProductSection />
        <PromoBannerSection />
        <TrendingSection />
        <FeaturesSection />
        <FooterSection />
      </div>
    </context.Provider>
  )
}

export default App
