export const PostSkeleton = () => {
    return <div >
        <div role="status" className="max-w-full animate-pulse">
            <div className="p-4 border-b max-w-full" >
                <div className="flex pt-2">
                    <div className="">
                        <div className="h-2.5 bg-gray-200 rounded-full w-32 mb-4"></div>
                    </div>
                    <div className="flex justify-center flex-col font-medium text-sm pl-1.5">
                        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                    </div>
                </div>
                <div className="text-2xl font-bold pt-3 pb-1">
                    <div className="h-2 bg-gray-200 w-56 rounded-full mb-2.5"></div>
                </div>
                <div className="text-gray-500 font-normal pb-3">
                    <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                </div>
                <div className="flex">
                    <div className="font-light text-xs">
                        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                    </div>
                    <div className="pl-5 font-extrabold text-xs text-gray-500">
                        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}