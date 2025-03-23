interface CartCardProps {
    images: string[];
    name: string;
    quantity: number;
    price: number;
  }
  
  function CartCard({ images, name, quantity, price }: CartCardProps) {
    return (
      <div className="w-[80%] m-auto border shadow-md p-4 flex justify-between items-center gap-4 rounded-lg">
        <div className="shadow-md shadow-blue-400 hover:scale-105 transition duration-300 rounded-md">
          <img src={images[0]} alt={name} width={100} height={100} className="rounded-md" />
        </div>
  
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-lg">{name}</p>
          <p className="text-gray-500">Quantity: <span className="font-medium">{quantity}</span></p>
          <p className="text-green-600 font-semibold">Price: ₹{price}</p>
        </div>
  
        <div>
          <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition">
            Remove
          </button>
        </div>
      </div>
    );
  }
  
  export default CartCard;
  