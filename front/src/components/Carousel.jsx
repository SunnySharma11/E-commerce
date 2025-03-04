import React from "react";
import { useNavigate } from "react-router-dom";

const Carousel = () => {
  const navigate = useNavigate();
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide tw:relative"
      data-bs-ride="carousel"
      data-bs-interval="2000"
    >
      <div className="carousel-inner tw:h-screen !tw:relative">
        <div className="carousel-item active" data-bs-interval="2000" >
          <img
            src="../images/slide-01.jpg"
            className="d-block w-100"
            alt="..."
          />
          <div className=" tw:absolute tw:top-70 tw:left-41">
            <h5 className="tw:text-6xl tw:ml-1">Women Collection 2018</h5>
            <p className="tw:text-6xl">New Season</p>
            <button
              className="btn btn-primary"
              onClick={() => navigate("/shop")}
            >
              Shop Now
            </button>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img
            src="../images/slide-03.jpg"
            className="d-block w-100"
            alt="..."
          />
          <div className=" tw:absolute tw:top-70 tw:left-41">
            <h5 className="tw:text-6xl tw:ml-1">Women Collection 2018</h5>
            <p className="tw:text-6xl">New Season</p>
            <button
              className="btn btn-primary"
              onClick={() => navigate("/shop")}
            >
              Shop Now
            </button>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img
            src="../images/slide-02.jpg"
            className="d-block w-100"
            alt="..."
          />
          <div className=" tw:absolute tw:top-70 tw:left-41">
            <h5 className="tw:text-6xl tw:ml-1">Women Collection 2018</h5>
            <p className="tw:text-6xl">New Season</p>
            <button
              className="btn btn-primary"
              onClick={() => navigate("/shop")}
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;