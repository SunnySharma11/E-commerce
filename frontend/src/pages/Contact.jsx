import React from "react";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <div >
      <div className="tw:ml-43 tw:mr-45">
        <Navbar />
      </div>
      <div
        className="tw:h-[250px] tw:bg-center tw:bg-cover tw:flex tw:items-center tw:justify-center tw:text-white tw:text-5xl tw:font-bold"
        style={{ backgroundImage: "url('./images/bg-01.jpg')" }}
      >
        Contact
      </div>

      <div className="tw:flex tw:ml-43 tw:mr-45 tw:h-[570px] tw:mt-[100px]">
        <div className="tw:w-1/2 tw:flex tw:items-center tw:justify-center tw:border tw:px-[70px] tw:pb-[70px]">
          <form action="" className=" tw:text-center tw:w-full">
            <h4 className=" ">Send Us a Message</h4>

            <div className="tw:flex tw:flex-col tw:gap-5.5 tw:mt-[30px] tw:items-center">
              <input
                type="email"
                placeholder="Your email address"
                className="tw:w-full tw:p-2 tw:border tw:outline-none "
                required
              />

              <textarea
                placeholder="How can we help?"
                className="tw:h-40 tw:w-full tw:p-2 tw:border tw:outline-none"
                required
              ></textarea>

              <button
                type="submit"
                className="tw:w-full tw:h-12 tw:bg-blue-500 tw:text-white tw:py-2 tw:px-6 tw:rounded-full!"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        <div className="tw:w-1/2  tw:border tw:px-[90px] tw:py-[30px]">
          <div className="tw:mt-[95px]">
            <div className="tw:mb-[40px]">
              <span className="tw:flex tw:mb-[15px]">
                <i class="fa-solid fa-location-dot tw:mt-[4px]"></i>
                <h5 className="tw:ml-[18px]">Address</h5>
              </span>
              <p className="tw:ml-[30px] ">
                Coza Store Center 8th floor, 379 <br />
                Hudson St, New York, NY 10018 US
              </p>
            </div>
            <div className="tw:mb-[40px]">
              <span className="tw:flex tw:mb-[15px]">
                <i class="fa-solid fa-phone tw:mt-[6px]"></i>
                <h5 className="tw:ml-[18px]">Lets Talk</h5>
              </span>
              <p className="tw:ml-[30px]">+91 0000000000</p>
            </div>
            <div className="tw:mb-[40px]">
              <span className="tw:flex tw:mb-[15px]">
                <i class="fa-solid fa-message tw:mt-[6px]"></i>
                <h5 className="tw:ml-[18px]">Sale Support</h5>
              </span>
              <p className="tw:ml-[30px]">contact@example.com</p>
            </div>
          </div>
        </div>
      </div>
      <br /><br /><br />
    </div>
  );
};

export default Contact;
