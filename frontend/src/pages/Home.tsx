import { Link } from "react-router-dom"
export const Home = () => {
    return <div className="min-h-screen">
        <div>
            <div className="border-b border-black min-h-20 bg-orange-50 flex justify-between px-5 xl:px-52">
                <div className="flex text-2xl md:text-5xl font-bold  items-center font-arin2">Blogwise</div>
                <div className="flex gap-2 md:gap-6 text-xs md:text-sm items-center">
                    <div>
                        <Link to={'/OurStory'}>Our story</Link>
                    </div>
                    <div>
                        <Link to={'/Signin'}>Write</Link>
                    </div>
                    <div>
                        <Link to={'/signup'} >    
                            <button type="button" className="text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-3 focus:ring-gray-800 font-medium rounded-full text-xs md:text-sm px-2 md:px-5 py-2 md:py-2.5">Get started</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className=" min-h-8 md:min-h-12 border-b border-black bg-gradient-to-r from-amber-100 to-amber-400 text-xl md:text-2xl font-medium flex justify-center items-center">
                Welcome to Blogwise
            </div>
            <div className="min-h-screen flex flex-col justify-center pb-96 md:pb-48 px-6 md:px-40 bg-orange-50">
                <div className="text-7xl md:text-9xl font-arin">
                    human stories & ideas
                </div>
            </div>
    </div> 
</div>     
}