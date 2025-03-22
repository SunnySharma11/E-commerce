import React from "react";
import "./HomeMidCss.css";
import { useNavigate } from "react-router-dom";

const products = [        // yahi par sahi hai , home me types of chize ka hi rakhenge bas
  {
    id: 1,
    name: "Women",
    extra: "Spring 2018",
    imgSrc: "../images/banner-01.jpg",
  },
  {
    id: 2,
    name: "Men",
    extra: "Spring 2018",
    imgSrc: "../images/banner-02.jpg",
  },
  {
    id: 3,
    name: "Accessories",
    extra: "New trend",
    imgSrc: "../images/banner-03.jpg",
  },
  {
    id: 1,
    name: "Women",
    extra: "Spring 2018",
    imgSrc: "../images/banner-01.jpg",
  },
  {
    id: 2,
    name: "Men",
    extra: "Spring 2018",
    imgSrc: "../images/banner-02.jpg",
  },
  {
    id: 3,
    name: "Accessories",
    extra: "New trend",
    imgSrc: "../images/banner-03.jpg",
  }
];

const HomeMid = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="d-flex flex-wrap tw:justify-between">
        {products.map((product, index) => (
          <div
            key={index}
            className="homemidhovereffect tw:mt-8"
            style={{
              position: "relative",
              width: "370px",
              height: "250px",
              overflow: "hidden",
              border: "1px solid red",
            }}
          >
            {/* Image */}
            <img
              src={product.imgSrc}
              alt="Example"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            {/* Overlay Text */}
            <div
              style={{
                position: "absolute",
                top: "27%",
                left: "10%",
                transform: "translateY(-50%)",
                color: "black",
                padding: "10px",
                borderRadius: "5px",
              }}
            >
              <h3 style={{ margin: 0 }} >
                {product.name}
              </h3>
              <p style={{ margin: 0 }} className="tw:text-lg ">
                {product.extra}
              </p>
            </div>

            <button className="btn btn-primary tw:absolute tw:bottom-10 tw:left-9.5 homemidbtn" onClick={ () => navigate("/shop")}>
              Shop Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeMid;
