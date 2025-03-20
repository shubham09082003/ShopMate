interface ProductCardProps {
    images: string[];
    productName: string;
    price: number;
    id: string;
    description: string;
  }
  
  function ProductCard({ images, productName, price, id }: ProductCardProps) {
    return (
      <div className="mt-5 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between">
        {/* Product Image */}
        <a href={`/product/${id}`} className="overflow-hidden rounded-t-lg">
          <img
            className="p-4 rounded-t-lg m-auto w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
            src={images[0]}
            alt={productName}
          />
        </a>
  
        {/* Product Details */}
        <div className="px-4 pb-4">
          {/* Product Name */}
          <a href={`/product/${id}`}>
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 truncate">{productName}</h5>
          </a>
  
          {/* Star Rating */}
          <div className="flex items-center mt-2.5 mb-3">
            <div className="flex space-x-1">
              {Array(4)
                .fill(0)
                .map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                ))}
              {/* Last star (gray for half-star effect) */}
              <svg
                className="w-4 h-4 text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            </div>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm ml-2">
              4.5
            </span>
          </div>
  
          {/* Price & Button */}
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-gray-900">Rs. {price}</span>
            <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium shadow-md hover:from-blue-600 hover:to-blue-800 transition duration-300">
              Add to Cart 🛒
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default ProductCard;
  