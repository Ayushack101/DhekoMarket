import React from "react";
import "./AddNewBusinessPage.css";
import BannerSliderSection from "../../Sections/BannerSliderSection/BannerSliderSection";

const AddNewBusinessPage = ({ imageURL }) => {
  return (
    <>
      <BannerSliderSection imageURL={imageURL} />
      <div className="anbcontent">
        <div className="anbcleft">
          <img
            src="https://st.depositphotos.com/1637787/2573/i/450/depositphotos_25735829-Business-team-joining-hands.jpg"
            alt=""
          />
        </div>
        <div className="anbcright">
          <span className="anbcright1">Add New Business</span>
          <form className="form-container">
            <div className="slot">
              <div className="form-group">
                <label className="form-label" htmlFor="businessName">
                  Business First Name
                </label>
                <input
                  className="form-input"
                  type="text"
                  id="businessName"
                  name="businessName"
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="businessName">
                  Business Last Name
                </label>
                <input
                  className="form-input"
                  type="text"
                  id="businessName"
                  name="businessName"
                />
              </div>
            </div>

            <div className="slot">
              <div className="form-group">
                <label className="form-label" htmlFor="businessDescription">
                  Business Description
                </label>
                <textarea
                  className="form-textarea"
                  id="businessDescription"
                  name="businessDescription"
                  rows="4"
                ></textarea>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="businessSubServices">
                  Phone No
                </label>
                <input
                  className="form-input"
                  type="text"
                  id="businessSubServices"
                  name="businessSubServices"
                />
              </div>
            </div>

            <div className="slot">
              <div className="form-group">
                <label className="form-label" htmlFor="businessAddress">
                  Business Address
                </label>
                <input
                  className="form-input"
                  type="text"
                  id="businessAddress"
                  name="businessAddress"
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="businessSubServices">
                  Business Sub Services Provided
                </label>
                <input
                  className="form-input"
                  type="text"
                  id="businessSubServices"
                  name="businessSubServices"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="businessImages">
                Business Banner Images
              </label>
              <input
                className="form-file"
                type="file"
                id="businessImages"
                name="businessImages"
                multiple
                accept="image/*"
              />
              
            </div>

            <button className="form-submit" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddNewBusinessPage;
