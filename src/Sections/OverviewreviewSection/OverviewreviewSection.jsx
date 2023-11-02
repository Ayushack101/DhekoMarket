import React, { useState } from "react";
import "./OverviewreviewSection.css";
import ReviewMiniCard from "../../Components/ReviewMiniCard/ReviewMiniCard";
import AddReviewCard from "../../Components/AddReviewCard/AddReviewCard";
import InputStarRatingCard from "../../Components/InputStarRatingCard/InputStarRatingCard";
import Axios from "axios";

const OverviewreviewSection = ({ product }) => {
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
      if(response.status === 200){
        console.log("Data Added Successfully")
      }
    };
    submitReview();
  };

  // Extracting Top Three Reviews
  const Business_reviews = product?.Business_reviews?.slice(0, 3);


  return (
    <div className="overviewsection">
      {Business_reviews?.map((review, index) => (
        <ReviewMiniCard key={index} review={review} />
      ))}

      <div onClick={() => openModal()} className="addreviewcard2">
        <AddReviewCard />
      </div>

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
  );
};

export default OverviewreviewSection;
