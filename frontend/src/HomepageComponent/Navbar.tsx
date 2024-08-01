import { Link } from "react-router-dom"

export const Navbar = () => {
    return <div> 
        <div className="px-6 sm:px-24 sticky">
                <div className="flex justify-between items-center bg-stone-900 rounded-full p-1 sm:p-2 px-2 sm:px-7">
                    <div className="text-xl sm:text-3xl font-extrabold font-arin2 text-white">
                    <Link to='/'>Blogwise</Link>    
                    </div>
                    <div className="flex items-center gap-7 sm:gap-7 ">
                        <div className="text-sm font-normal sm:font-medium text-white"><Link to={'/OurStory'}>Our story</Link></div>
                        <div className="text-sm font-normal sm:font-medium text-white"><Link to={'/Write'}>Write</Link></div>
                        <div className="pt-1">
                            <Link to={'/signup'} >    
                                <button type="button" className="text-black bg-gradient-to-r from-amber-50 to-amber-100 transition delay-75 duration-100 hover:bg-amber-300 focus:outline-none focus:ring-3 focus:ring-gray-800 font-bold rounded-full text-xs px-2 sm:px-4 py-2 sm:py-2.5 mb-1">Get started</button>
                            </Link>
                        </div>
                    </div>                
                </div>
                <div>
                
                </div>
        </div>
    </div>
}