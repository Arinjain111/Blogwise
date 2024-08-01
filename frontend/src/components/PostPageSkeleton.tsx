export const PostPageSkeleton = () => {
    return <div className="pt-10 flex justify-center">
        <div className="grid grid:cols- md:grid-cols-12 gap-2 md:gap-36 max-w-screen-3xl px-4 md:px-10 pt-6 md:pt-20">
            <div className="max-w-sm md:max-w-3xl p-4 rounded animate-pulse md:p-6 col-span-6">
                <div className="h-2.5 bg-gray-200 rounded-full w-72 mb-4"></div>
                <div className="h-2.5 bg-gray-200 rounded-full w-64 mb-4"></div>
                <div className="h-2.5 bg-gray-200 rounded-full w-80 mb-4"></div>
                <div className="pt-20 max-w-sm md:max-w-xl">
                    <div className="h-2 bg-gray-200 rounded-full w-72 md:w mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full w-64 md:w-96 mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full w-80 md:w mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full w-68 md:w-96 mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full w-60 md:w-80 mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full w-64 md:w-72 mb-2.5"></div>
                </div>
            </div>
            <div className="col-span-6 px-1 md:px-40">
                <div className="flex items-center mt-4 pt-16">
                    <svg className="w-10 h-10 me-3 text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                    </svg>
                    <div>
                        <div className="h-2.5 bg-gray-200 rounded-full w-32 mb-2"></div>
                        <div className="w-48 h-2 bg-gray-200 rounded-full"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}