import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaFacebookF, FaTwitter, FaGoogle, FaTimes } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";



export default function QuickView() {
  const navigate = useNavigate(); //  Using React Router navigate
  const { id } = useParams(); // Extracting ID from URL

  // const [details,setDetails] = useState(null);

  // useEffect(() => {
  //   const fetchDetails = async () => {
  //     try {
  //       const response = await fetch(`http://localhost:5000/quick-view/${id}`);
        
  //       if (response.ok) {
  //         const data = await response.json(); // Parse response
  //         setDetails(data); // Store data in state
  //       } else {
  //         toast.error("Failed to fetch details");
  //       }
  //     } catch (error) {
  //       toast.error("Error during details fetch");
  //     }
  //   };

  //   if (id) {
  //     fetchDetails(); // Call function when the component mounts
  //   }
  // }, [id]); // Runs only when `id` changes (on page load)



  const images = [
    "../images/product-detail-01.jpg",
    "../images/product-detail-02.jpg",
    "../images/product-detail-03.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="tw:flex tw:justify-center tw:items-center tw:min-h-screen tw:bg-gray-100 tw:p-2">
      <div className="tw:bg-white tw:p-6 tw:rounded-lg tw:shadow-lg tw:flex tw:max-w-7xl tw:w-full tw:relative">
        {/*  Close Button (Top-Right) */}
        <button
          className="tw:absolute tw:top-4 tw:right-4 tw:text-gray-500 hover:tw:text-red-500 tw:text-2xl tw:p-3"
          onClick={() => navigate("/shop")}
        >
          <FaTimes />
        </button>

        {/* Image Gallery */}
        <div className="tw:w-1/2 tw:flex">
          <div className="tw:flex tw:flex-col tw:space-y-2 tw:mr-4">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="Thumbnail"
                className={`tw:w-[63px] tw:h-[85px] tw:cursor-pointer tw:rounded-lg ${
                  currentImage === index
                    ? "tw:border-2 tw:border-indigo-500"
                    : ""
                }`}
                onClick={() => setCurrentImage(index)}
              />
            ))}
          </div>
          <div className="tw:relative tw:flex-1">
            <img
              src={images[currentImage]}
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
          <h2 className="tw:text-2xl tw:font-semibold">Lightweight Jacket</h2>
          <p className="tw:text-xl tw:text-gray-700 tw:font-bold tw:mt-2">
            $58.79
          </p>
          <p className="tw:text-gray-600 tw:text-sm tw:mt-2">
            Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula.
            Mauris consequat ornare feugiat.
          </p>

          {/* Size and Color Select */}
          <div className="tw:mt-4 tw:flex tw:items-center tw:justify-between tw:px-12">
            <label className="tw:text-gray-700 tw:flex-1 tw:text-center">
              Size
            </label>
            <select className="tw:flex-2 tw:p-2 tw:border tw:rounded">
              <option>Choose an option</option>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>
          </div>

          <div className="tw:mt-4 tw:flex tw:items-center tw:justify-between tw:px-12">
            <label className="tw:text-gray-700 tw:flex-1 tw:text-center">
              Color
            </label>
            <select className="tw:flex-2 tw:p-2 tw:border tw:rounded">
              <option>Choose an option</option>
              <option>Black</option>
              <option>Gray</option>
              <option>Blue</option>
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
            <button className="tw:bg-indigo-500 tw:text-white tw:py-2 tw:px-[35px] tw:rounded-full tw:text-center hover:tw:bg-indigo-600">
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
