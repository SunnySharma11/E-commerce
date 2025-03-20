import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import './HomeMidCss.css'
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Products = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const itemsPerPage = 8;

  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/products");
        setAllProducts(response.data);
      } catch (error) {
        toast.error("Error fetching data");
      }
    };

    fetchAllProducts();
  }, []);

  useEffect(() => {
    let filtered = allProducts;

    if (category !== "all") {
      filtered = filtered.filter((product) => product.category === category);
    }

    if (searchQuery.trim() !== "") {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
    setCurrentPage(1);
  }, [category, searchQuery, allProducts]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleProducts = filteredProducts.slice(startIndex, endIndex);

  return (
    <>
      {/* 1st part: Filtering */}
      <div className="tw:pl-43 tw:pr-45">
        <div className="tw:flex tw:justify-between tw:mt-1.5">
          <ul className="d-flex list-unstyled gap-3">
            {["all", "Women", "Men", "Bag", "Shoe"].map((type) => (
              <li key={type} className="tw:ml-1">
                <button
                  className={`tw:text-blue-800 ${
                    category === type ? "tw:font-bold" : ""
                  }`}
                  onClick={() => setCategory(type)}
                >
                  {type === "all" ? "All Products" : type}
                </button>
              </li>
            ))}
          </ul>

          <button
            className="tw:flex tw:justify-center tw:border tw:h-[35px] tw:w-[110px]"
            onClick={() => document.getElementById("search-bar")?.focus()}
          >
            <i className="fa-solid fa-magnifying-glass tw:text-xs tw:mt-[11px]"></i>
            <p className="tw:text-lg tw:ml-[5px] tw:mt-px">search</p>
          </button>
        </div>

        <input
          type="text"
          placeholder="Enter here"
          className="tw:border tw:w-full tw:py-3 tw:px-[30px]"
          id="search-bar"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* 2nd part: Product List */}
      <div className="tw:ml-39.5 tw:mr-39.5 tw:mt-8">
        <div className="d-flex flex-wrap">
          {visibleProducts.map((product, index) => (
            <div key={index} className="tw:mx-3.5 tw:mt-2">
              <div
                style={{ width: "270px", height: "335px", overflow: "hidden",position:"relative"}}
                className="hoverdiv"
              >
                <img
                  src={product.imgSrc}
                  alt={product.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                
                />
                {/* home mid wala logic se button come on hover only */}
                <button className="btn btn-primary tw:absolute tw:bottom-7 tw:left-[58px] hoverpebtn" onClick={ () => navigate(`/quick-view/${product._id}`)}>
              Quick View
            </button>
              </div>
              <div className="d-flex tw:justify-between tw:mt-1.5">
                <h6>{product.name}</h6>
                <i className="fa-regular fa-heart"></i>
              </div>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="tw:flex tw:justify-center tw:mt-4 tw:space-x-2">
          {currentPage > 2 && (
            <button
              className="tw:px-4 tw:py-2 tw:bg-gray-300 tw:rounded"
              onClick={() => setCurrentPage(1)}
            >
              1
            </button>
          )}
          {currentPage > 2 && <span className="tw:px-2">...</span>}

          {currentPage > 1 && (
            <button
              className="tw:px-4 tw:py-2 tw:bg-gray-300 tw:rounded"
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              {currentPage - 1}
            </button>
          )}

          <button className="tw:px-4 tw:py-2 tw:bg-blue-500 tw:text-white tw:rounded">
            {currentPage}
          </button>

          {currentPage < totalPages && (
            <button
              className="tw:px-4 tw:py-2 tw:bg-gray-300 tw:rounded"
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              {currentPage + 1}
            </button>
          )}

          {currentPage < totalPages - 1 && <span className="tw:px-2">...</span>}

          {currentPage < totalPages - 1 && (
            <button
              className="tw:px-4 tw:py-2 tw:bg-gray-300 tw:rounded"
              onClick={() => setCurrentPage(totalPages)}
            >
              {totalPages}
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default Products;
