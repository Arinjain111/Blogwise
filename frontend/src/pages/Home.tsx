import { Link } from "react-router-dom"
export const Home = () => {
    return <div>
            <div className="border-b border-black min-h-20 bg-orange-50 flex justify-between px-32 xl:px-52">
                <div className="flex text-5xl font-bold pb-2 items-center font-arin2">Blogwise</div>
                <div className="flex gap-6 text-sm items-center">
                    <div>
                        <Link to={'/OurStory'}>Our story</Link>
                    </div>
                    <div>
                        <Link to={'/Write'}>Write</Link>
                    </div>
                    <div>
                        <Link to={'/signup'} >    
                            <button type="button" className="text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-3 focus:ring-gray-800 font-medium rounded-full text-sm px-5 py-2.5 mb-1">Get started</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="min-h-12 border-b border-black bg-gradient-to-r from-amber-100 to-amber-400 text-xl font-medium flex justify-center items-center">
                Welcome to Blogwise
            </div>
            <div className="min-h-screen flex flex-col justify-center pb-48 px-40 bg-orange-50">
                <div className="text-9xl font-arin">
                    human stories & ideas
                </div>
            </div>
    </div>
        
}