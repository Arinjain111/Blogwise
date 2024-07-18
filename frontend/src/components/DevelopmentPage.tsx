import { Link } from "react-router-dom"

export const DevelopmentPage = () => {
    return <div className="flex flex-col justify-center h-screen bg-black">
            <div className="flex justify-center">
                <div className="text-white border-r px-5">
                    404
                </div>
                <div className="text-white px-5">
                    Currently in development...
                </div>
                <div> 
                    <Link to={'/'}>
                        <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-400 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">HOME</button>
                    </Link>
                </div>
            </div>
        </div>
}