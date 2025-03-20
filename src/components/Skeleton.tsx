export default function Skeleton(){
    return (    <div className="mt-5 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md flex flex-col justify-between animate-pulse">
        {/* Image Placeholder */}
        <div className="h-64 bg-gray-200 rounded-t-lg"></div>
  
        {/* Text & Rating Placeholder */}
        <div className="px-4 pb-4">
          {/* Title */}
          <div className="h-6 bg-gray-300 rounded w-3/4 mt-4"></div>
  
          {/* Rating */}
          <div className="flex items-center mt-3">
            <div className="h-4 w-24 bg-gray-300 rounded"></div>
            <div className="h-5 w-10 bg-gray-300 rounded ml-2"></div>
          </div>
  
          {/* Price & Button Placeholder */}
          <div className="flex items-center justify-between mt-4">
            <div className="h-8 bg-gray-300 rounded w-1/3"></div>
            <div className="h-10 bg-gray-300 rounded w-24"></div>
          </div>
        </div>
      </div>
    );
}