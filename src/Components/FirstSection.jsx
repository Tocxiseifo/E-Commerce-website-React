// import { useContext } from "react"
// import { context } from "../Context/Context"
import Mens from '../assets/images/portrait-handsome-smiling-stylish-hipster-lambersexual-model.jpg'
import Women from '../assets/images/positive-woman-denim-jacket-undershirt-looks-sun-bright-backdrop-brunette-girl-light-pants-sunglasses-poses-yellow-background.jpg'
import accessories from '../assets/images/model-career-kit-still-life.jpg'
import Footwear from '../assets/images/new-pair-white-sneakers-isolated-white.jpg'


const Categorys = [
    {
        id:0 , 
        img:Mens,
        description:"Man's Fashions"
    },
    {
        id:1 , 
        img:Women,
        description:"Women's Fashions"
    },
    {
        id:2 , 
        img:accessories,
        description:"Accessories"
    },
    {
        id:3 , 
        img:Footwear,
        description:"Footwear"
    },
]


export default function FirstSection(){
    // const {shopCourt , setShopCourt} = useContext(context)
    // function handleAddClick (){
    //     setShopCourt(p => p +1)
    //     const shop = localStorage.setItem('court' , shopCourt)
    //     localStorage.getItem(shop)
    // }
    return(
        <>
            <section id="Hero-Section" className="relative flex flex-col  w-full h-150 bg-[url(https://storage.googleapis.com/uxpilot-auth.appspot.com/3b8cc89d15-91182110d35b7b9b5ae4.png)] bg-cover  bg-center bg-no-repeat">
                <div className="absolute inset-0 hidden lg:flex bg-linear-to-r from-black/50 to-transparent"></div>
                <div class="absolute inset-0 flex lg:hidden bg-linear-to-b from-black/40 to-black/60"></div>
                <div className="flex flex-col gap-3 max-w-xl w-full text-start md:justify-center md:items-center md:ml-28 [@media(min-width:375px)_and_(max-width:425px)]:left-5 items-start ml-8 xl:ml-30 mt-34 lg:mt-24 relative ">
                    <span className="text-3xl md:text-5xl lg:text-6xl w-75 md:w-full lg:w-150 text-white font-bold mb-4 leading-tight ">Summer Collection 2024</span>
                    <p className="md:text-2xl lg:text-sm relative lg:right-40 xl:right-40 text-white text-start  mb-8 font-light">Discover the latest trends in sustainable fashion</p>
                    <div className="flex flex-col lg:flex-row gap-4 xl:mr-62 xl:right-7 lg:mr-62 lg:right-7 relative">
                        <button className="px-22 md:px-45 lg:px-8 py-3.5 bg-white text-sm text-main-color font-semibold hover:bg-gray-100 transition-all duration-500 hover:duration-500 cursor-pointer rounded-md">Shop Women</button>
                        <button className="px-22 md:px-45 lg:px-8 py-3.5 border-2 border-white text-white  text-sm font-semibold hover:bg-white hover:text-main-color transition duration-500 hover:duration-500 rounded-md cursor-pointer">Shop Men</button>
                    </div>
                </div>
            </section>
            <section className="py-16 flex h-290 md:h-200 gap-20 lg:gap-10 xl:gap-0 lg:h-210 xl:h-165 flex-col items-center w-full bg-gray-200">
                <div className=" w-full  text-center flex flex-col gap-2">
                    <span className="text-main-color text-center text-3xl font-bold">Shop by Category</span>
                    <p className="text-gray-600 text-sm">Explore our curated collections</p>
                </div>
                <div className="w-full gap-5  h-auto lg:h-124  flex-wrap xl:flex-nowrap flex flex-row  items-center justify-evenly ">
                    {Categorys.map((Categorys) => (
                        <div key={Categorys.id} className="h-auto overflow-hidden rounded-lg flex flex-col  items-center justify-between  cursor-pointer">
                            <div className="flex flex-col items-center gap-5 w-full h-auto overflow-hidden mb-4 rounded-lg   justify-between">
                                <img src={Categorys.img} alt="" className="object-cover w-full h-40 md:h-54 lg:h-58 xl:h-53 [@media(min-width:2560px)]:h-75 rounded-lg hover:scale-110 hover:brightness-70 transition-all duration-500 hover:duration-500 hover:rounded-lg" />
                            </div>
                            <h3 className="text-lg font-semibold text-center text-main-color ">{Categorys.description}</h3>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}