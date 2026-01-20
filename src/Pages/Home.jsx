import FeaturedProductSection from '../Components/featured-products-section';
import FeaturesSection from '../Components/FeaturesSection';
import FirstSection from '../Components/FirstSection';
import FooterSection from '../Components/FooterSection';
import PromoBannerSection from '../Components/promo-banner-section';
import TrendingSection from '../Components/TrendingSection';


export default function Home() {
    return(
        <>
            <div className='w-full h-auto overflow-hidden md:overflow-auto'>
            <FirstSection />
            <FeaturedProductSection />
            <PromoBannerSection />
            <TrendingSection />
            <FeaturesSection />
            <FooterSection />
            </div>
        </>
    )
}