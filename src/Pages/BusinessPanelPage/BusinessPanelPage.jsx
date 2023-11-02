import React, { useEffect, useState } from "react";
import "./BusinessPanelPage.css";
import Axios from "axios";
const BusinessPanelPage = () => {
  const [showMoreOptions, setShowMoreOptions] = useState(false);
  const [showAddNewBusinessPage, setShowAddNewBusinessPage] = useState(false);
  const [Data, setData] = useState();
  const [businessDetails, setBusinessDetails] = useState({
    businessName: "",
    phoneNo: "",
    businessDescription: "",
    businessAddress: "",
  });
  const [services, setServices] = useState([]);

  const toggleMoreOptions = () => {
    setShowMoreOptions(!showMoreOptions);
  };

  const toggleAddNewBusiness = () => {
    setShowAddNewBusinessPage(true);
  };

  const addServiceContainer = () => {
    const newService = {};
    setServices((prevServices) => [...prevServices, newService]);
  };

  const handleBusinessDetailsChange = (e) => {
    const { name, value } = e.target;
    setBusinessDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleServiceChange = (index, e) => {
    const { name, value } = e.target;
    const updatedServices = [...services];
    updatedServices[index][name] = value;
    setServices(updatedServices);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create the final object with business details and services
    const data = {
      businessDetails,
      services,
    };

    setData(data);

    const sendData = async () => {
      try {
        const response = await Axios.post(
          "https://dekhomarket.com/apis/Add_new_business.php",
          data,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        if (response.status === 200) {
          console.log(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    sendData();
  };

  return (
    <div className="BusinessPanelPage">
      <div className="BusinessPanelPageLeft">
        <button onClick={toggleAddNewBusiness}>
          <i class="fa-solid fa-plus"></i>Add New Business
        </button>
        <ul>
          <li>
            <i class="fa-solid fa-briefcase"></i>Business
          </li>
          <li>
            <i class="fa-solid fa-chart-line"></i>Active Business
          </li>
          <li>
            <i class="fa-solid fa-not-equal"></i>Inactive Business
          </li>
          <li>
            <i class="fa-solid fa-calendar-week"></i>All Business
          </li>
          <li onClick={toggleMoreOptions}>
            <i
              className={`fa-solid ${
                showMoreOptions ? "fa-angle-up" : "fa-angle-down"
              }`}
            ></i>
            {showMoreOptions ? "Less" : "More"}
          </li>
          {showMoreOptions && (
            <>
              <li>
                <i class="fa-solid fa-briefcase"></i>Business
              </li>
              <li>
                <i class="fa-solid fa-chart-line"></i>Active Business
              </li>
              <li>
                <i class="fa-solid fa-not-equal"></i>Inactive Business
              </li>
              <li>
                <i class="fa-solid fa-calendar-week"></i>All Business
              </li>
              <li>
                <i class="fa-solid fa-trash"></i>Trash
              </li>
              <li>
                <i class="fa-regular fa-paper-plane"></i>Categories
              </li>
              <li>
                <i class="fa-solid fa-calendar-week"></i>LogOut
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="BusinessPanelPageRight">
        {showAddNewBusinessPage ? (
          <div className="anbcright">
            <form className="form-container" enctype="multipart/form-data">
              <div className="slot">
                <div className="form-group">
                  <label className="form-label" htmlFor="businessName">
                    Business Name
                  </label>
                  <input
                    className="form-input"
                    type="text"
                    id="businessName"
                    name="businessName"
                    onChange={(e) => handleBusinessDetailsChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="phoneNo">
                    Phone No
                  </label>
                  <input
                    className="form-input"
                    type="text"
                    id=" phoneNo"
                    name="phoneNo"
                    onChange={(e) => handleBusinessDetailsChange(e)}
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
                    onChange={(e) => handleBusinessDetailsChange(e)}
                  ></textarea>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="businessAddress">
                    Business Address
                  </label>
                  <input
                    className="form-input"
                    type="text"
                    id="businessAddress"
                    name="businessAddress"
                    onChange={(e) => handleBusinessDetailsChange(e)}
                  />
                </div>
              </div>

              <div className="slot">
                <div className="form-group">
                  <label className="form-label" htmlFor="businessImages">
                    Business Banner Image
                  </label>
                  <input
                    className="form-file custom-file-input"
                    type="file"
                    id="businessImages"
                    name="businessImages"
                    multiple
                    accept="image/*"
                  />
                </div>
                <span
                  style={{
                    fontSize: "20px",
                    marginBottom: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "20px",
                    borderRadius: "5px",
                    color: "black",
                    height: "40px",
                    cursor: "pointer",
                    marginTop: "20px",
                    background: "#427BFF",
                    color: "white",
                  }}
                  onClick={addServiceContainer}
                >
                  Add Service
                </span>
              </div>

              {services.map((service, index) => (
                <div
                  key={index}
                  style={{
                    borderTop: "1px solid silver",
                    paddingTop: "20px",
                    paddingBottom: "20px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "25px",
                      marginBottom: "20px",
                      height: "75px",
                    }}
                  >
                    Add Service {index + 1}
                  </span>
                  <div className="slot">
                    <div className="form-group">
                      <label className="form-label" htmlFor="serviceName">
                        Service Name
                      </label>
                      <input
                        className="form-input"
                        type="text"
                        name="serviceName" // Example: Update with the actual field name
                        placeholder="Service Name"
                        value={service.serviceName} // Use the corresponding state value
                        onChange={(e) => handleServiceChange(index, e)}
                      />
                    </div>
                    <div className="form-group">
                      <label
                        className="form-label"
                        htmlFor="serviceDescription"
                      >
                        Service Description
                      </label>
                      <input
                        className="form-input"
                        type="text"
                        name="serviceDescription" // Example: Update with the actual field name
                        placeholder="Service Description"
                        value={service.serviceDescription} // Use the corresponding state value
                        onChange={(e) => handleServiceChange(index, e)}
                      />
                    </div>
                  </div>

                  <div className="slot">
                    <div className="form-group">
                      <label className="form-label" htmlFor="businessImages">
                        Service Banner Image
                      </label>
                      <input
                        className="form-file custom-file-input"
                        type="file"
                        id={`serviceImages-${index}`}
                        name={`serviceImages-${index}`}
                        multiple
                        accept="image/*"
                        onChange={(e) => handleServiceChange(index, e)} // Handle file change for each service
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "10px",
                        fontSize: "20px",
                        marginBottom: "10px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "20px",
                        borderRadius: "5px",
                        color: "black",
                        height: "40px",
                        cursor: "pointer",
                        marginTop: "20px",
                        background: "#427BFF",
                        color: "white",
                      }}
                      onClick={addServiceContainer}
                    >
                      <i class="fa-solid fa-plus"></i>
                      <span>Add More Service</span>
                    </div>
                  </div>
                </div>
              ))}

              <button
                className="form-submit"
                type="submit"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </form>
          </div>
        ) : (
          "Blank Page"
        )}
      </div>
    </div>
  );
};

export default BusinessPanelPage;
