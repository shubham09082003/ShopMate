const CartSkeleton = () => {
    return (
      <div className="w-[80%] m-auto border shadow-md p-4 flex justify-between items-center gap-4 rounded-lg animate-pulse">
        {/* Skeleton Image */}
        <div className="w-[100px] h-[100px] bg-gray-300 rounded-md"></div>
  
        {/* Skeleton Text */}
        <div className="flex flex-col gap-2 flex-grow">
          <div className="w-[60%] h-4 bg-gray-300 rounded"></div>
          <div className="w-[40%] h-4 bg-gray-300 rounded"></div>
          <div className="w-[50%] h-4 bg-gray-300 rounded"></div>
        </div>
  
        {/* Skeleton Button */}
        <div className="w-[80px] h-10 bg-gray-300 rounded-md"></div>
      </div>
    );
  };
  
  export default CartSkeleton;
  