import React, { useState, useEffect, useRef } from "react";
import "./HeroSection.css";
import { useNavigate } from "react-router-dom";
import SearchSuggestions from "../../Components/SearchSuggestions/SearchSuggestions";
import ContainerCard from "../../Components/ContainerCard/ContainerCard";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";

const HeroPage = () => {
  const [showCard, setShowCard] = useState(false);
  const [response, setResponse] = useState();
  const cardRef = useRef(null);
  const navigate = useNavigate();

  const toggleCard = () => {
    setShowCard(!showCard);
  };

  const handleSearch = (suggestion) => {
    navigate(`/businesses/${suggestion}`);
  };

  // Handle Client Id
  const CLIENT_ID =
    "561229451699-q8rm1r1sl6ej3rsjjtqa6hu4kqj5535e.apps.googleusercontent.com";

  // Handle login success Code
  const HandleLoginSuccess = (credentialResponse) => {
    useEffect(() => {
      const decoded = jwt_decode(credentialResponse?.credential);
      setResponse(decoded);
      // Store user data in local storage
      localStorage.setItem("userData", JSON.stringify(decoded));
    });
  };

  const apiEndpoint = "https://dekhomarket.com/apis/business_suggestion.php";

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setShowCard(false);
        console.log("Clicked Outside");
      }
    };

    if (showCard) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showCard]);

  const routeChange = () => {
    navigate("/allbusiness");
  };

  return (
    <div className="herosection">
      <div style={{ position: "absolute", top: "20px", right: "20px" }}>
        <span
          style={{
            height: "30px",
            width: "30px",
            borderRadius: "50%",
            background: "#555859",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "12px",
          }}
          onClick={() => toggleCard()}
        >
          <i class="fa-solid fa-user"></i>
        </span>
      </div>
      {showCard && (
        <div className="logincard">
          <div className="logintop">
            <span>SignIn Account</span>
          </div>
          <div className="circular">
            <i class="fa-solid fa-user"></i>
          </div>
          <div className="loginbottom">
            <span>Not sign in</span>
            <div className="inner">
              <span style={{ textAlign: "center" }}>
                Sign in with google account to access dekho market
              </span>
              <GoogleOAuthProvider clientId={CLIENT_ID}>
                <GoogleLogin
                  onSuccess={(credentialResponse) => {
                    HandleLoginSuccess(credentialResponse);
                  }}
                  onError={() => {
                    console.log("Login Failed");
                  }}
                />
              </GoogleOAuthProvider>
            </div>
          </div>
        </div>
      )}

      <span className="market">Dekho Market</span>
      <span className="suggest">
        <SearchSuggestions
          onSearch={handleSearch}
          apiEndpoint={apiEndpoint}
          placeholder={"Search In Market"}
        />
      </span>
      <div
        style={{ display: "flex" }}
        onClick={() => {
          routeChange();
        }}
      >
        <ContainerCard
          name={"Products"}
          ImageURL={
            "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg"
          }
        />
        <ContainerCard
          name={"Services"}
          ImageURL={
            "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1469&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
      </div>
    </div>
  );
};

export default HeroPage;
