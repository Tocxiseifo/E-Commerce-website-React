import { useContext, useState } from "react";
import { context } from "../Context/Context";
const Products = [
    {
        id:0,
        img:'https://storage.googleapis.com/uxpilot-auth.appspot.com/1d9ae24757-0b8884427360e070703e.png',
        description:'Premium Cotton T-Shirt',
        Category:'Classic Basics',
        cost:'$39.99',
        cost2:'$49.99'
    },
    {
        id:1,
        img:'https://storage.googleapis.com/uxpilot-auth.appspot.com/355a9e6044-dcb8cca3c747b8161484.png',
        description:'Leather Biker Jacket',
        Category:'Urban Collection',
        cost:'$299.00'
    },
    {
        id:2,
        img:'https://storage.googleapis.com/uxpilot-auth.appspot.com/3858cb4eb8-873d85aedc9654314629.png',
        description:'Classic High Heels',
        Category:'Evening Wear',
        cost:'$129.00',
        new:'NEW'
    },
    {
        id:3,
        img:'https://storage.googleapis.com/uxpilot-auth.appspot.com/20e8b12a58-ef9f976cd618d11f419a.png',
        description:'Designer Handbag',
        Category:'Luxury Accessories',
        cost:'$449.00',
    },
]

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
export default function ProductPage() {
    const {setFavorite} = useContext(context)
    const [favorites , setFavorites] = useState([])
    function handleAddClick (id){
        if (favorites.includes(id)) {
            setFavorites(prev => prev.filter(itemId => itemId !== id));
            setFavorite(prev => prev - 1);
        } else {
            setFavorites(prev => [...prev, id]);
            setFavorite(prev => prev + 1);
        }
    }
    return(
        <>
            <section className="flex w-full h-screen flex-row flex-wrap items-center ">
                  {Products.map((Product) => (
                        <div key={Product.id} className='flex flex-row justify-center   items-center w-full md:w-80 lg:w-100   [@media(min-width:2560px)]:w-140 h-auto lg:h-180'>
                            <div className='flex flex-col group'>
                                <div className='lg:h-100 w-50 relative h-50  bg-gray-100 flex flex-col gap-4 lg:w-90  rounded-lg overflow-hidden cursor-pointer mb-4'>
                                    <div className={Product.id === 3 ? 'h-80 relative bottom-8 lg:top-3 rounded-lg overflow=hidden mb-10 justify-center items-center hover:scale-110 duration-500 transition hover:duration-500' : 'h-80 relative  rounded-lg overflow=hidden mb-10 justify-center items-center hover:scale-110 duration-500 transition hover:duration-500'}>
                                        <img src={Product.img} alt="" />
                                    </div>
                                    {<button onClick={(e) =>{
                                        e.stopPropagation()
                                        handleAddClick(Product.id)
                                        }} value={favorites} className="absolute top-4 right-4 w-10 h-10 bg-red rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition shadow-lg cursor-pointer">
                                        {favorites.includes(Product.id) ? (
                                          <FavoriteIcon className="text-red-600" />
                                        ) : (
                                          <FavoriteBorderIcon className="text-gray-700" />
                                        )} 
                                    </button>}
                                </div> 
                                <h3 className='font-semibold text-main-color ml-2 mb-1'>{Product.description}</h3>
                                <p className='text-sm text-gray-500 mb-2 ml-2'>{Product.Category}</p>
                                <div className='flex items-center space-x-2 ml-2'>
                                    <span className='text-lg font-bold text-main-color'>{Product.cost}</span>
                                </div>                                
                            </div>
                        </div>
                    ))}
            </section>
        </>
    )
}
{/* <div className='flex flex-col group'>
                                <div className='lg:h-100 w-50  relative h-50  bg-gray-100 flex flex-col gap-4 lg:w-90  rounded-lg overflow-hidden mb-4 cursor-pointer hover:duration-500 duration-500'>
                                    <div className='h-80 rounded-lg overflow=hidden mb-10 justify-center items-center hover:scale-110 duration-500 transition hover:duration-500'>
                                        <img src={Product.img} alt="" />
                                    </div>
                                    <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-semibold px-2.5 py-1 rounded">-20%</div>
                                    {<button onClick={(e) =>{
                                        e.stopPropagation()
                                        handleAddClick(Product.id)
                                        }} value={favorites} className="absolute top-4 right-4 w-10 h-10 bg-red rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition shadow-lg cursor-pointer">
                                        {favorites.includes(Product.id) ? (
                                          <FavoriteIcon className="text-red-600" />
                                        ) : (
                                          <FavoriteBorderIcon className="text-gray-700" />
                                        )}
                                    </button>}
                                </div> 
                                <h3 className='font-semibold text-main-color ml-2 mb-1'>{Product.description}</h3>
                                <p className='text-sm text-gray-500 mb-2 ml-2'>{Product.Category}</p>
                                <div className='flex items-center space-x-2 ml-2'>
                                    <span className='text-lg font-bold text-main-color'>{Product.cost}</span>
                                    <span className="text-sm text-gray-400 line-through">{Product.cost2}</span>
                                </div>                                
                            </div>: Product.id === 2 ? 
                            <div className='flex flex-col group'>
                                <div className='lg:h-100 w-50 relative h-50  bg-gray-100 flex flex-col gap-4 lg:w-90  rounded-lg overflow-hidden cursor-pointer mb-4'>
                                    <div className='h-80 rounded-lg overflow=hidden mb-10 justify-center items-center hover:scale-110 duration-500 transition hover:duration-500'>
                                        <img src={Product.img} alt="" />
                                    </div>
                                    <div className="absolute top-4 left-4 bg-green-600 text-white text-xs font-semibold px-2.5 py-1 rounded">NEW</div>
                                    {<button onClick={(e) =>{
                                        e.stopPropagation()
                                        handleAddClick(Product.id)
                                    }} value={favorites} className="absolute top-4 right-4 w-10 h-10 bg-red rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition shadow-lg cursor-pointer">
                                        {favorites.includes(Product.id) ? (
                                          <FavoriteIcon className="text-red-600" />
                                        ) : (
                                          <FavoriteBorderIcon className="text-gray-700" />
                                        )}
                                    </button>}
                                </div> 
                                <h3 className='font-semibold text-main-color ml-2 mb-1'>{Product.description}</h3>
                                <p className='text-sm text-gray-500 mb-2 ml-2'>{Product.Category}</p>
                                <div className='flex items-center space-x-2 ml-2'>
                                    <span className='text-lg font-bold text-main-color'>{Product.cost}</span>
                                </div>                                
                            </div>: */}