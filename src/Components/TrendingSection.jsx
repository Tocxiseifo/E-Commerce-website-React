import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Trending = [
    {
        id:0,
        img:'https://storage.googleapis.com/uxpilot-auth.appspot.com/654c170307-8568295f50bfcf3fbe1e.png',
        Description:'StreetWear Essentials',
        category:'Urban style meets comfort'
    },
    {
        id:1,
        img:'https://storage.googleapis.com/uxpilot-auth.appspot.com/b2ffdc6f97-33b57f645b0c07889cc8.png',
        Description:'Office Elegance',
        category:'Professional and stylish'
    },
    {
        id:2,
        img:'https://storage.googleapis.com/uxpilot-auth.appspot.com/7ffe6a7fec-80e0766f4bec9e5edb2e.png',
        Description:'Summer Vibes',
        category:'Perfect for vacation'
    },
]


export default function TrendingSection() {
    return(
        <>
            <section id="trending-section" className="flex w-full h-400 md:h-440 lg:h-165 bg-gray-50 mx-auto flex-col items-center px-6 pt-10 ">
                <div className="text-center mb-12 ">
                    <h2 className="text-4xl font-bold text-main-color mb-3">Trending Now</h2>
                    <p className="text-gray-600">Most popular items this week</p>
                </div>
                <div className="flex flex-col lg:flex-row md:flex-wrap lg:flex-nowrap gap-10 md:gap-28 lg:gap-9 [@media(min-width:2560px)]:gap-34">
                    {Trending.map((Trending) => (
                        <div key={Trending.id} className="bg-white w-full md:w-80 lg:w-75 xl:w-120 [@media(min-width:2560px)]:w-150 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
                            <div className="h-72 overflow-hidden">
                                <img src={Trending.img} alt="" className="w-full h-full object-cover" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-main-color mb-2">{Trending.Description}</h3>
                                <p className="text-gray-600 mb-4">{Trending.category}</p>
                                <a href="#" className="text-[#2563eb] font-medium hover:underline ">Shop Collection <ArrowForwardIcon className='ml-1' /></a>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </section>
        </>
    )
}