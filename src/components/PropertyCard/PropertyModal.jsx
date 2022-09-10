import React from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const PropertyModal = ({ close, open, product }) => {
  const list = [];
  for (let i = 0; i < product.stars; i++) {
    list.push(
      <svg
        aria-hidden="true"
        class="w-5 h-5 text-yellow-300"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>First star</title>
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
    );
  }
  return (
    <div
      className={`w-full h-[100vh] flex justify-center items-center bg-[#000080cb] fixed top-0 left-0 ${
        open ? "block z-50" : "hidden"
      }`}
    >
      <div className="w-[90%] md:w-[70%] bg-white h-[80vh] md:h-[90vh] px-3 flex flex-col justify-center items-center mt-6 overflow-y-auto rounded-lg">
        <div className="w-full flex justify-center items-center  relative py-2 mt-10 md:mt-8">
          <h4 className="text-xl md:text-3xl font-semibold uppercase">
            Property's Details
          </h4>
          <IoIosCloseCircle
            className=" text-3xl md:text-4xl text-[#000080] absolute right-0 cursor-pointer"
            onClick={close}
          />
        </div>
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-3">
          <div className="md:col-span-2 flex justify-center items-center ">
            <div className="w-full overflow-auto flex justify-center items-center">
              <LazyLoadImage
                effect="blur"
                src={product.image}
                alt=""
                className="h-[50vh] md:h-[75vh] object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-1 md:shadow-md shadow-slate-900 flex justify-start flex-col items-start px-3">
            <span className="text-xl md:text-2xl font-semibold mt-5 mb-2">
              {`${product.address}, ${product.city}, ${product.state}`}
            </span>
            <span className="text-md font-semibold  mb-2">
              Type: {product.homeType}
            </span>
            <span className="text-md font-semibold  mb-2">
              Rent: Rs.{product.price}
            </span>
            <span className="text-md font-semibold  mb-2">
              <div class="flex items-center mt-2.5 mb-5">Rating: {list}</div>
            </span>
            <span className="text-md font-semibold  mb-2">
              Count: {product.rating && product.rating.count}
            </span>
            <span className="block text-xl mb-2">Description </span>
            <span className="text-xs pb-2">{product.description}</span>
            {/* <button onClick={close}>Close Modal</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyModal;
