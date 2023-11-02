import React, { useState } from "react";
import "./ServiceSection.css";
import CircularProgress from "@material-ui/core/CircularProgress";
import ServiceCard from "../../Components/ServiceCard/ServiceCard";
import { useEffect } from "react";

const ServiceSection = ({ service }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (service) {
      setLoading(false);
    }
  }, [service]);

  console.log(service);

  return (
    <>
      {loading ? (
        <div className="loading-container">
          <CircularProgress style={{ color: "#007BFF", marginTop: "200px" }} />
        </div>
      ) : (
        <>
          <div className="aboutservicecontent">
            <div className="bgcard">
              <img
                src="https://eminence.ch/wp-content/uploads/2023/08/commerce-tips-2022.jpg"
                alt=""
              />
            </div>
            <div className="allbgcards">
              {service?.map((service) => (
                <ServiceCard
                  key={service?.id}
                  title={service?.services_name}
                  subtitle={service?.description}
                  icon={service?.image}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ServiceSection;
