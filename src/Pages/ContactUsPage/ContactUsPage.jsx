import React from "react";
import "./ContactUsPage.css";
import { useEffect } from "react";
import Axios from "axios";
import { useState } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

const ContactUsPage = ({ imageURL }) => {
  // State Management
  const [data, setData] = useState();
  const [popup, showPopup] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({
    Name: "",
    EmailId: "",
    Message: "",
    ContactNo: "",
  });
  const [formData, setFormData] = useState({
    Name: "",
    EmailId: "",
    Message: "",
    ContactNo: "",
  });

  // Prepare Form Data
  const FormData = {
    name: formData?.Name,
    email_id: formData?.EmailId,
    message: formData?.Message,
    contact_no: formData?.Message,
  };

  // Contact Details Api Call
  useEffect(() => {
    const getApiData = async () => {
      try {
        const response = await Axios.get(
          "https://dekhomarket.com/apis/contact_details_api.php"
        );
        if (response.status === 200) {
          setData(response?.data[0]);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getApiData();
  }, []);

  // Form Validation
  const validateForm = () => {
    let formIsValid = true;
    const newError = { ...error };

    // Validate Name
    if (!formData.Name) {
      formIsValid = false;
      newError.Name = "Please Enter Name";
    } else {
      newError.Name = "";
    }

    // Validate Email
    if (!formData.EmailId) {
      formIsValid = false;
      newError.EmailId = "Please Enter Email";
    } else {
      newError.EmailId = "";
    }

    // Validate Message
    if (!formData.Message) {
      formIsValid = false;
      newError.Message = "Please Enter Message";
    } else {
      newError.Message = "";
    }

    // Validate ContactNo
    if (!formData.ContactNo) {
      formIsValid = false;
      newError.ContactNo = "Please Enter Contact Number";
    } else {
      newError.ContactNo = "";
    }

    setError(newError);
    return formIsValid;
  };

  // Submit Form Data Function
  const submitFormData = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Form data is valid, proceed with submission
      try {
        const response = await Axios.post(
          "https://dekhomarket.com/apis/inquiry_api.php",
          formData
        );

        if (response.status === 200) {
          console.log(response.data);
          showPopup(true)
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  // Handle Form Data Change
  const handleFormDataChange = (e) => {
    setError(error);
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to clear a specific error message
  const clearError = (fieldName) => {
    setError((prevError) => ({
      ...prevError,
      [fieldName]: "",
    }));
  };

  return (
    <>
      {loading ? (
        <div className="loading-container">
          <CircularProgress style={{ color: "#007BFF", marginTop: "200px" }} />
        </div>
      ) : (
        <>
          <img src={data?.banner} alt="" style={{ width: "100%" }} />
          <div className="contentwrapper">
            <div className="contentwrapper_left">
              <img src={data?.image} alt="" />
            </div>
            <div className="contentwrapper_right">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  padding: "60px",
                }}
              >
                <span className="dekhomarket_heading"> DekhoMarket</span>
                <span className="dekhomarket_heading2">
                  <span
                    style={{
                      fontSize: "25px",
                      fontWeight: "600",
                      paddingRight: "10px",
                    }}
                  >
                    Address :{""}
                  </span>
                  {data?.address}
                </span>
                <span className="dekhomarket_heading2">
                  <span
                    style={{
                      fontSize: "25px",
                      fontWeight: "600",
                      paddingRight: "10px",
                    }}
                  >
                    Phone No :
                  </span>
                  {data?.phone}
                </span>
                <span className="dekhomarket_heading2">
                  <span
                    style={{
                      fontSize: "25px",
                      fontWeight: "600",
                      paddingRight: "10px",
                    }}
                  >
                    Email :
                  </span>
                  {data?.email}
                </span>
                <div
                  style={{ display: "flex", gap: "20px", paddingTop: "20px" }}
                >
                  <a href={data?.facebook}>
                    <i
                      class="fa-brands fa-facebook"
                      style={{ fontSize: "35px", color: "#E62E39" }}
                    ></i>
                  </a>
                  <a href={data?.Instagram}>
                    <i
                      class="fa-brands fa-square-instagram"
                      style={{ fontSize: "35px", color: "#427BFF" }}
                    ></i>
                  </a>
                  <a href={data?.twitter}>
                    <i
                      class="fa-brands fa-square-x-twitter"
                      style={{ fontSize: "35px", color: "yellow" }}
                    ></i>
                  </a>
                  <a href={data?.GooglePlus}>
                    <i
                      class="fa-brands fa-square-google-plus"
                      style={{ fontSize: "35px", color: "green" }}
                    ></i>
                  </a>
                  <a href={data?.linkedIn}>
                    <i
                      class="fa-brands fa-linkedin"
                      style={{ fontSize: "35px", color: "brown" }}
                    ></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="anbcontent" style={{ position: "absolute" }}>
            <div className="anbcright">
              <span
                className="anbcright1"
                style={{ paddingBottom: "20px", color: "#427BFF" }}
              >
                Have a Query? Ask Us!
              </span>
              <form
                className="form-container"
                onSubmit={(e) => submitFormData(e)}
              >
                <div className="slot">
                  <div className="form-group">
                    <label className="form-label" htmlFor="Name">
                      Name
                    </label>
                    <input
                      className="form-input"
                      type="text"
                      id="Name"
                      name="Name"
                      onChange={(e) => handleFormDataChange(e)}
                      onFocus={() => {
                        console.log("Name");
                        clearError("Name");
                      }}
                    />
                  </div>
                  <span
                    style={{
                      position: "absolute",
                      top: "65px",
                      left: "200px",
                      color: "red",
                    }}
                  >
                    {error?.Name}
                  </span>

                  <div className="form-group">
                    <label className="form-label" htmlFor="businessAddress">
                      Email id
                    </label>
                    <input
                      className="form-input"
                      type="text"
                      id="EmailId"
                      name="EmailId"
                      onChange={(e) => handleFormDataChange(e)}
                      onFocus={() => {
                        console.log("EmailId");
                        clearError("EmailId");
                      }}
                    />
                  </div>
                  <span
                    style={{
                      position: "absolute",
                      top: "65px",
                      right: "275px",
                      color: "red",
                    }}
                  >
                    {error?.EmailId}
                  </span>
                </div>
                <div className="slot">
                  <div className="form-group">
                    <label className="form-label" htmlFor="Description">
                      Message
                    </label>
                    <textarea
                      className="form-textarea"
                      id="Message"
                      name="Message"
                      rows="4"
                      onChange={(e) => handleFormDataChange(e)}
                      onFocus={() => {
                        console.log("Message");
                        clearError("Message");
                      }}
                    ></textarea>
                  </div>
                  <span
                    style={{
                      position: "absolute",
                      top: "157px",
                      left: "198px",
                      color: "red",
                    }}
                  >
                    {error?.Message}
                  </span>
                  <div className="form-group">
                    <label className="form-label" htmlFor="businessSubServices">
                      Contact No
                    </label>
                    <input
                      className="form-input"
                      type="text"
                      id="ContactNo"
                      name="ContactNo"
                      onChange={(e) => handleFormDataChange(e)}
                      onFocus={() => {
                        console.log("ContactNo");
                        clearError("ContactNo");
                      }}
                    />
                  </div>
                  <span
                    style={{
                      position: "absolute",
                      top: "157px",
                      right: "183px",
                      color: "red",
                    }}
                  >
                    {error?.ContactNo}
                  </span>
                </div>

                <button className="form-submit" type="submit">
                  Submit
                </button>
              </form>
            </div>
            {popup && (
            <div className="overlay">
              <div className="popup">
                <span className="enqspan">Enquiry Submitted Successfully</span>
                <span className="cancelbtn" onClick={() => showPopup(false)}>
                  Okay
                </span>
              </div>
            </div>
          )}

          </div>
        </>
      )}
    </>
  );
};

export default ContactUsPage;
