import "./new.scss";
import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from "../../Components/navbar/Navbar";
import { DriveFolderUploadOutlined } from "@mui/icons-material";
import { useState } from "react";
import Axios from "axios";

const New = ({ inputs, title }) => {
  // State Management
  const [file, setFile] = useState("");
  const [serviceData, setServiceData] = useState([]);
  const [businessData, setBusinessData] = useState({
    businessName: "",
    phoneNo: "",
    businessDescription: "",
    businessAddress: "",
  });

  // Function to add a new service
  const addServiceContainer = () => {
    setServiceData((prevServiceData) => [...prevServiceData, {}]);
  };

  // Function to handle business data change
  const handleBusinessDataChange = (e) => {
    const { name, value } = e.target;
    setBusinessData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to handle service data change
  const handleServiceDataChange = (e, index) => {
    const { name, value } = e.target;
    setServiceData((prevServiceData) => {
      const updatedServiceData = [...prevServiceData];
      updatedServiceData[index] = {
        ...updatedServiceData[index],
        [name]: value,
      };
      return updatedServiceData;
    });
  };

  // Function to handle submit Data
  const handleSubmit = (e) => {
     console.log(businessData)
    console.log(serviceData)
  };
  
  return (
    <div className="new">
      <Sidebar />

      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://www.icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image : <DriveFolderUploadOutlined className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e)=>setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>
              {inputs.map((input) =>(
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    type={input.type}
                    name={input.name}
                    placeholder={input.placeholder}
                    onChange={handleBusinessDataChange}
                  />
                </div>
              ))}
              <button onClick={(e)=>handleSubmit(e)}>Send</button>
            </form>
          </div>
        </div>
        <button
          className="btn"
          style={{
            backgroundColor: "teal",
            color: "white",
            padding: "10px",
            fontWeight: "bold",
            cursor: "pointer",
            marginLeft: "20px",
          }}
          onClick={addServiceContainer}
        >
          Add Service
        </button>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {serviceData.map((service, index) => (
            <div className="bottom" key={index}>
              <div className="left">
                <img
                  src={
                    service.file
                      ? URL.createObjectURL(service.file)
                      : "https://www.icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                  }
                  alt=""
                />
              </div>
              <div className="right">
                <form>
                  <div className="formInput">
                    <label htmlFor={`file-${index}`}>
                      Image : <DriveFolderUploadOutlined className="icon" />
                    </label>
                    <input
                      type="file"
                      id={`file-${index}`}
                      onChange={(e) => {
                        const newServiceData = [...serviceData];
                        newServiceData[index] = {
                          ...newServiceData[index],
                          file: e.target.files[0],
                        };
                        setServiceData(newServiceData);
                      }}
                      style={{ display: "none" }}
                    />
                  </div>
                  {inputs.map((input) => (
                    <div className="formInput" key={input.id}>
                      <label>{input.label}</label>
                      <input
                        type={input.type}
                        name={input.name}
                        placeholder={input.placeholder}
                        onChange={(e) => handleServiceDataChange(e, index)}
                      />
                    </div>
                  ))}
                
                </form>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default New;
