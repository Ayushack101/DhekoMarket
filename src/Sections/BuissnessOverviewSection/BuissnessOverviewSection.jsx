import React, { useState } from "react";
import "./BuissnessOverviewSection.css";
import CallModalCard from "../../Components/CallModalCard/CallModalCard";
const BuissnessOverviewSection = ({ Business }) => {
  const [callModal, setCallModal] = useState(false);
  const openLocation = () => {
    const locationURL =
      "https://www.google.com/maps/place/Hello+Mistri/@28.6208598,77.3785524,17z/data=!3m1!5s0x390ceff5ec1ed069:0x8c2dddfeaa1d7f9!4m20!1m13!4m12!1m4!2m2!1d77.3557158!2d28.6468766!4e1!1m6!1m2!1s0x390cef8a45d37eeb:0x113929fdb10e353e!2shello+mistri!2m2!1d77.3811273!2d28.6208551!3m5!1s0x390cef8a45d37eeb:0x113929fdb10e353e!8m2!3d28.6208551!4d77.3811273!16s%2Fg%2F11swv13w4p?entry=ttu";
    window.open(locationURL, "_blank");
  };

  const openCallInterface = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const phoneNumber = Business?.phone;
  const openWhatsApp = () => {
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
    window.open(whatsappURL, "_blank");
  };

  const openCall = () => {
    setCallModal(true);
  };

  const closeCallModal = () => {
    setCallModal(false);
  };

  console.log(Business);

  return (
    <div className="buissnessoverviewsection">
      <div className="aboutuscontent" id="aboutuscontent2">
        <div className="aboutuscontentright" id="right11">
          {Business &&
            Business.business_profile_images &&
            Business.business_profile_images.length > 0 && (
              <>
                <img src={Business.business_profile_images[0]} alt="" />
                <img src={Business.business_profile_images[1]} alt="" />
                <img src={Business.business_profile_images[2]} alt="" />
                <img src={Business.business_profile_images[3]} alt="" />
              </>
            )}
        </div>

        <div className="aboutuscontentleft1" id="left11">
          <span
            className="buissnesmodel"
            style={{ textTransform: "uppercase" }}
          >
            {Business?.business_name}
          </span>
          <span>
            <span>Service Options :</span> <span>Products || Services</span>
          </span>
          <span>
            <span>Address : </span>
            <span>{Business?.address}</span>
          </span>
          <span>
            <span>Hours : </span>
            <span>24 Hours Open</span>
          </span>
          <span>
            <span>Phone : </span>
            <span>Click on Call button to call.</span>
          </span>

          <span>
            <span>Address : </span>
            <span>{Business?.address}</span>
          </span>
          <span>
            <span>Hours : </span>
            <span>24 Hours Open</span>
          </span>
          <span>
            <span>Phone : </span>
            <span>Click on Call button to call.</span>
          </span>
          <span>
            <span>Service Options :</span> <span>Products || Services</span>
          </span>

          <div className="socialicons">
            <button
              type="button"
              class="btn btn-outline-secondary"
              onClick={openCall}
            >
              <i class="fa-solid fa-square-phone"></i>
            </button>
            <button
              type="button"
              class="btn btn-outline-secondary"
              onClick={openLocation}
            >
              <i class="fa-solid fa-map-location-dot"></i>
            </button>
            <button
              type="button"
              class="btn btn-outline-secondary"
              onClick={openWhatsApp}
            >
              <i class="fa-brands fa-square-whatsapp"></i>
            </button>
          </div>
        </div>
      </div>
      {callModal && (
        <div className="modal-bg">
          <CallModalCard closeCallModal={closeCallModal} openCallInterface={openCallInterface}/>
        </div>
      )}
    </div>
  );
};

export default BuissnessOverviewSection;
