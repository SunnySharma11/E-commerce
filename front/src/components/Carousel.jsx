import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Carousel = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const carouselElement = document.querySelector("#carouselExampleCaptions");
    if (carouselElement) {
      const carousel = new window.bootstrap.Carousel(carouselElement, {
        interval: 2000,
        ride: "carousel",
        pause: false, // Ensures autoplay doesn't stop
      });
      console.log("Carousel initialized:", carousel);
    }
  }, []);

  return (
    <div id="carouselExampleCaptions" className="carousel slide tw:relative" data-bs-ride="carousel">
      <div className="carousel-inner tw:min-h-screen !tw:relative">
        {["slide-01.jpg", "slide-03.jpg", "slide-02.jpg"].map((img, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`} data-bs-interval="2000">
            <img src={`../images/${img}`} className="d-block w-100" alt={`Slide ${index + 1}`} />
            <div className="tw:absolute tw:top-70 tw:left-41">
              <h5 className="tw:text-6xl tw:ml-1">Women Collection 2018</h5>
              <p className="tw:text-6xl">New Season</p>
              <button className="btn btn-primary" onClick={() => navigate("/shop")}>
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
