import React from "react";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <>
      <div className="tw:ml-43 tw:mr-45">
        <Navbar />
      </div>
      <div
        className="tw:h-[250px] tw:bg-center tw:bg-cover tw:flex tw:items-center tw:justify-center tw:text-white tw:text-5xl tw:font-bold"
        style={{ backgroundImage: "url('./images/bg-01.jpg')" }}
      >
        About
      </div>
      <div className="tw:ml-43 tw:mr-45 tw:flex tw:mt-[45px] tw:mb-[40px]">
        <div className="tw:w-7/11  tw:p-4">
          <h3>Our Story</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            consequat consequat enim, non auctor massa ultrices non. Morbi sed
            odio massa. Quisque at vehicula tellus, sed tincidunt augue. Orci
            varius natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Maecenas varius egestas diam, eu sodales metus
            scelerisque congue. Pellentesque habitant morbi tristique senectus
            et netus et malesuada fames ac turpis egestas. Maecenas gravida
            justo eu arcu egestas convallis. Nullam eu erat bibendum, tempus
            ipsum eget, dictum enim. Donec non neque ut enim dapibus tincidunt
            vitae nec augue. Suspendisse potenti. Proin ut est diam. Donec
            condimentum euismod tortor, eget facilisis diam faucibus et. Morbi a
            tempor elit.
          </p>
          <p>
            Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce
            eget ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla
            turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida.
            Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu
            sodales lectus sagittis. Etiam pellentesque, magna vel dictum
            rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem.
            Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum,
            et maximus enim ligula ac ligula.
          </p>
        </div>
        <div className="tw:w-4/11  tw:p-4"><img src="./images/about-01.jpg" alt="" /></div>
      </div>
      <div className="tw:ml-43 tw:mr-45 tw:flex tw:mt-[65px] ">
        <div className="tw:w-4/11  tw:p-4"><img src="./images/about-02.jpg" alt="" /></div>
        <div className="tw:w-7/11  tw:p-4">
          <h3>Our Misson</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            consequat consequat enim, non auctor massa ultrices non. Morbi sed
            odio massa. Quisque at vehicula tellus, sed tincidunt augue. Orci
            varius natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Maecenas varius egestas diam, eu sodales metus
            scelerisque congue. Pellentesque habitant morbi tristique senectus
            et netus et malesuada fames ac turpis egestas. Maecenas gravida
            justo eu arcu egestas convallis. Nullam eu erat bibendum, tempus
            ipsum eget, dictum enim. Donec non neque ut enim dapibus tincidunt
            vitae nec augue. Suspendisse potenti. Proin ut est diam. Donec
            condimentum euismod tortor, eget facilisis diam faucibus et. Morbi a
            tempor elit.
          </p>
          <p>
            Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce
            eget ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla
            turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida.
            Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu
            sodales lectus sagittis. Etiam pellentesque, magna vel dictum
            rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem.
            Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum,
            et maximus enim ligula ac ligula.
          </p>
        </div>
      </div>
      
    </>
  );
};

export default About;
