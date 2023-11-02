import React, { useState } from "react";
import Axios from "axios";
import InputStarRatingCard from "../InputStarRatingCard/InputStarRatingCard";
import "./AboutBusinessCard.css";

const AboutBusinessCard = ({ product }) => {
  // State Management
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    rating: 0,
    review: "",
  });

  // Toggle Model
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Prepare Review Form Data
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleStarClick = (name, rating) => {
    setFormData({
      ...formData,
      [name]: rating,
    });
  };

  // Submit Form Data
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(false);
    const submitReview = async () => {
      const response = await Axios.post(
        "https://dekhomarket.com/apis/add_review_api.php",
        {
          business_id: product?.id,
          name: formData?.name,
          rating: formData?.name,
          designation: formData?.designation,
          reviews: formData?.review,
        }
      );
      if (response.status === 200) {
        console.log("Data Added Successfully");
      }
    };
    submitReview();
  };
  return (
    <>
      <section className="text-gray-600 body-font ">
        <div className="flex justify-center mt-[70px] ">
          <div className="w-[85%] flex justify-center items-center flex-wrap  px-10 ">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-96 h-72 object-cover object-center rounded"
              src={product?.business_profile_images[0]}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest uppercase">
                Category
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {product?.business_name}
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <p className="leading-relaxed">{product.about_us}</p>
              <div className="flex mt-6 items-center pb-3 border-b-2 border-gray-100 mb-3">
                <div className="flex">
                  <span className="pr-3 uppercase border-r border-gray-300">
                    {" "}
                    {product.address}
                  </span>
                </div>
                <div className="flex  items-center ps-3">
                  <span className="mr-3">{product.hours} Hours</span>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <button className="rounded-full w-10 h-10  bg-indigo-500  py-2 px-6 focus:outline-none hover:bg-indigo-600 p-0 border-0 inline-flex items-center justify-center text-white ">
                    <i class="bx bxl-whatsapp text-2xl"></i>
                  </button>
                  <button className="rounded-full w-10 h-10  bg-indigo-500  py-2 px-6 focus:outline-none hover:bg-indigo-600 p-0 border-0 inline-flex items-center justify-center text-white ml-4">
                    <i class="bx bx-map text-2xl font-normal"></i>
                  </button>
                  <button className="rounded-full w-10 h-10  bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 p-0  inline-flex items-center justify-center text-white ml-4">
                    <i class="bx bxs-phone text-2xl font-normal"></i>
                  </button>
                </div>
                <button
                  class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                  onClick={() => openModal()}
                >
                  Write a Review
                </button>
                {isModalOpen && (
                  <div className="modal">
                    <div className="modal-content">
                      <div className="headingt">
                        <h2>Add Review</h2>
                        <i
                          class="fa-solid fa-xmark"
                          onClick={() => setIsModalOpen(false)}
                        ></i>
                      </div>
                      <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Name:</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                        <label htmlFor="designation">Designation:</label>
                        <input
                          type="text"
                          id="designation"
                          name="designation"
                          value={formData.designation}
                          onChange={handleInputChange}
                          required
                        />
                        <label htmlFor="rating">Rating:</label>
                        <InputStarRatingCard
                          name="rating"
                          value={formData.rating}
                          onStarClick={handleStarClick}
                        />
                        <label htmlFor="review">Review:</label>
                        <textarea
                          id="review"
                          name="review"
                          value={formData.review}
                          onChange={handleInputChange}
                          required
                        />
                        <button type="submit">Submit</button>
                      </form>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutBusinessCard;
