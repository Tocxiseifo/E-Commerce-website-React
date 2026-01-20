export default function PromoBannerSection() {
    return (
        <>
            <section id="promo-banner-section" className="bg-linear-to-r from-[#2563eb] to-blue-700 w-full h-190 md:h-120 lg:h-125 flex flex-col md:flex-row justify-evenly md:gap-18 lg:gap-0 lg:justify-between  items-center  text-center text-white mt-40">
                <div className="flex flex-col gap-3.5 justify-center  lg:justify-between items-center lg:items-start max-w-xl text-white  lg:ml-20 ">
                    <h1 className="xl:text-5xl lg:text-4xl text-2xl md:text-3xl  font-bold lg:w-220 text-center  lg:text-start">Exclusive Member Benefits</h1>
                    <p className="lg:text-lg text-[15px] mb-6 text-blue-100 lg:text-start w-75 text-center lg:w-130">Join our community and get 15% off your first order plus early access to sales</p>
                    <div className="flex flex-col lg:flex-row justify-center items-center md:items-start lg:items-center space-x-4 gap-6 lg:gap-3">
                        <input type="email" placeholder="Enter Your Email " className="rounded-md px-6 py-3 bg-white text-gray-800 w-60 md:w-75 lg:w-80 focus:outline-none focus:ring-2 focus:ring-white" />
                        <button className="bg-white text-[#2563eb] px-16 md:px-20 lg:px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition cursor-pointer">Subscribe</button>
                    </div>
                </div>
                <div className="lg:w-96 lg:h-80 w-65 md:w-70 overflow-hidden rounded-lg  lg:mr-20">
                    <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/820fa837dc-c1b86ee22387cd776c15.png" alt="" className="w-full h-full object-cover" />   
                </div>
            </section>
        </>
    )
}