import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaHeart, FaFacebookF, FaTwitter, FaGoogle, FaTimes, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { toast } from "react-toastify";
import axios from 'axios'

export default function QuickView() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [details, setDetails] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(""); // Selected color
const [selectedSize, setSelectedSize] = useState(""); // Selected size

// **   m m imp  , details imgsrc = is a array so always store 1st image as main image

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5000/quick-view/${id}`);
        setDetails(data);
      } catch (error) {
        toast.error("Error fetching details");
        console.error("Details fetch error:", error);
      }
      
    };

    if (id) {
      fetchDetails();
    }
  }, [id]);

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? (details?.imgSrc?.length || 1) - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === (details?.imgSrc?.length || 1) - 1 ? 0 : prev + 1
    );
  };


  const addToCart = async () => {
    if (!selectedColor || !selectedSize) {
      toast.error("Please select color and size.");
      return;
    }
    if (!details || !details.name || !details.imgSrc?.[0]) {
      toast.error("Product details are not available.");
      return;
    }
    


    try {
      const { data } = await axios.post("http://localhost:5000/cart/add", {
        name: details.name,
        price: parseFloat(details.price.replace(/[^0-9.]/g, "")), // Convert price to a number
        imgSrc: details.imgSrc[0],
        color: selectedColor,
        size: selectedSize,
        quant: quantity,
      });
    
      toast.success("Added to cart!");
      navigate("/cart");
    } catch (error) {
      toast.error(`Failed to add to cart: ${error.response?.data?.error || "Unknown error"}`);
      console.error("Cart add error:", error);
    }
    
  };


  return (
    <div className="tw:flex tw:justify-center tw:items-center tw:min-h-screen tw:bg-gray-100 tw:p-2">
      <div className="tw:bg-white tw:p-6 tw:rounded-lg tw:shadow-lg tw:flex tw:max-w-7xl tw:w-full tw:relative">
        {/* Close Button */}
        <button
          className="tw:absolute tw:top-4 tw:right-4 tw:text-gray-500 hover:tw:text-red-500 tw:text-2xl tw:p-3"
          onClick={() => navigate("/shop")}
        >
          <FaTimes />
        </button>

        {/* Image Gallery */}
        <div className="tw:w-1/2 tw:flex">
          <div className="tw:flex tw:flex-col tw:space-y-2 tw:mr-4">
            {details?.imgSrc?.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className={`tw:w-[63px] tw:h-[85px] tw:cursor-pointer tw:rounded-lg ${
                  currentImage === index ? "tw:border-2 tw:border-indigo-500" : ""
                }`}
                onClick={() => setCurrentImage(index)}
              />
            ))}
          </div>
          <div className="tw:relative tw:flex-1">
            <img
              src={details?.imgSrc?.[currentImage] || ""}
              alt="Product"
              className="tw:w-full tw:rounded-lg"
            />
            <button
              className="tw:absolute tw:left-2 tw:top-1/2 tw:transform -tw:translate-y-1/2 tw:bg-gray-200 tw:p-2 tw:rounded-full"
              onClick={prevImage}
            >
              <FaArrowLeft />
            </button>
            <button
              className="tw:absolute tw:right-2 tw:top-1/2 tw:transform -tw:translate-y-1/2 tw:bg-gray-200 tw:p-2 tw:rounded-full"
              onClick={nextImage}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Product Details */}
        <div className="tw:w-1/2 tw:ml-6 tw:flex tw:flex-col tw:px-8">
          <h2 className="tw:text-2xl tw:font-semibold">{details?.name}</h2>
          <p className="tw:text-xl tw:text-gray-700 tw:font-bold tw:mt-2">
            {details?.price}
          </p>
          <p className="tw:text-gray-600 tw:text-sm tw:mt-2">
            {details?.notes}
          </p>

          {/* Size & Color Select */}
          <div className="tw:mt-4 tw:flex tw:items-center tw:justify-between tw:px-12">
            <label className="tw:text-gray-700 tw:flex-1 tw:text-center">Size</label>
            <select className="tw:flex-2 tw:p-2 tw:border tw:rounded" onChange={(e) => setSelectedSize(e.target.value)}>
            <option value="">Choose Size</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
            </select>
          </div>

          <div className="tw:mt-4 tw:flex tw:items-center tw:justify-between tw:px-12">
            <label className="tw:text-gray-700 tw:flex-1 tw:text-center">Color</label>
            <select className="tw:flex-2 tw:p-2 tw:border tw:rounded" onChange={(e) => setSelectedColor(e.target.value)}>
            <option value="">Choose Color</option>
            <option value="Black">Black</option>
            <option value="Gray">Gray</option>
            <option value="Blue">Blue</option>

            </select>
          </div>

          {/* Quantity Selector */}
          <div className="tw:flex tw:items-center tw:mt-6 tw:w-9/10 tw:justify-center tw:mb-8">
            <button
              className="tw:px-3 tw:py-1 tw:border tw:rounded tw:bg-gray-200"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >
              -
            </button>
            <span className="tw:px-4">{quantity}</span>
            <button
              className="tw:px-3 tw:py-1 tw:border tw:rounded tw:bg-gray-200"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
          </div>

          {/* Add to Cart Button */}
          <div className="tw:flex tw:justify-center">
            <button className="tw:bg-indigo-500 tw:text-white tw:py-2 tw:px-[35px] tw:rounded-full tw:text-center hover:tw:bg-indigo-600"  onClick={addToCart}>
              ADD TO CART
            </button>
          </div>

          {/* Social Icons */}
          <div className="tw:flex tw:space-x-6 tw:mt-4 tw:text-gray-600 tw:justify-center">
            <FaHeart className="tw:cursor-pointer" />
            <FaFacebookF className="tw:cursor-pointer" />
            <FaTwitter className="tw:cursor-pointer" />
            <FaGoogle className="tw:cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}
