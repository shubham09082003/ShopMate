

function Banner() {
  return (
    <div className=" bg-pink-50 flex justify-between shadow-md">
        <div className="flex">
            <img src={'/heroImage1.PNG'} width={300} height={200}/>
            <img src={'/heroImage3.PNG'} width={300} height={200} className="ml-[-150px]"/>
        </div>
        <div className="text-center mt-20">
            <h1 className="text-4xl font-bold text-gray-800">
                "Wear Your Story, Style Your Vibe!"
            </h1>
            <p className="text-lg text-gray-600 mt-2">
                Explore the trendiest T-shirts, designed just for you.
            </p>
        </div>
        <div className="flex">
            <img src={'/heroImage2.PNG'} width={300} height={200} className="mr-[-150px]"/>
            <img src={'/heroImage4.PNG'} width={300} height={200}/>
        </div>
    </div>
  )
}

export default Banner