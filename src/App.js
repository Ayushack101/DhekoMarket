import React, { useState, useEffect } from "react";
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import Header from "./Sections/HeaderSection/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductPage from "../src/Pages/ProductPage/ProductPage";
import ProductAboutPage from "./Pages/ProductAboutPage/ProductAboutPage";
import ReviewPage from "./Pages/ReviewPage/ReviewPage";
import PhotosPage from "./Pages/PhotosPage/PhotosPage";
import ServicePage from "./Pages/ServicePage/ServicePage";
import AboutUsPage from "./Pages/AboutUsPage/AboutUsPage";
import ContactUsPage from "./Pages/ContactUsPage/ContactUsPage";
import HomeAboutPage from "./Pages/HomeAboutPage/HomeAboutPage";
import UpcomingBusiness from "./Pages/UpcomingBusinessPage/UpcomingBusinessPage";
import AddNewBusinessPage from "./Pages/AddNewBusinessPage/AddNewBusinessPage";
import BusinessPanelPage from "./Pages/BusinessPanelPage/BusinessPanelPage";
import SuperAdminPanel from "./AdminPanels/SuperAdminPanel/SuperAdminPanel";
import PrivacyPolicyPage from "./Pages/PrivacyPolicyPage/PrivacyPolicyPage";
import TermsAndConditionsPage from "./Pages/TermsAndConditionsPage/TermsAndConditionsPage";
import { DarkModeContext } from "./context/darkModeContext";
import { useContext } from "react";
import Home from "../src/Pages/home/Home.jsx";
import Login from "./Pages/login/Login";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import List from "./Pages/list/List";
import Single from "./Pages/single/Single";
import New from "./Pages/new/New";
import AllBusiness from "./Pages/AllBusiness/AllBusiness";

const App = () => {
  // State to store user's coordinates
  const [userLocation, setUserLocation] = useState(null);

  // Function to get user's location
  const getUserLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          setUserLocation({ latitude, longitude });
          console.log(latitude);
        },
        (error) => {
          console.error("Error getting user's location:", error);
        }
      );
    } else {
      console.error("Geolocation is not available in this browser.");
    }
  };

  const ProductImages = [
    {
      url: "https://www.home-designing.com/wp-content/uploads/2016/03/minimalist-low-profile-furniture.jpg",
    },
    {
      url: "https://www.home-designing.com/wp-content/uploads/2016/03/decorating-around-low-furniture.jpg",
    },
    {
      url: "https://www.home-designing.com/wp-content/uploads/2016/03/low-coffee-table-inspiration.jpg",
    },
    {
      url: "https://www.home-designing.com/wp-content/uploads/2016/03/black-and-white-minimalist-decor.jpg",
    },
    {
      url: "https://www.home-designing.com/wp-content/uploads/2016/03/stylish-dining-room-ideas.jpg",
    },
  ];

  const ServicesImages = [
    {
      url: "https://t3.ftcdn.net/jpg/06/08/82/50/360_F_608825085_MuQopoWCJQJ8BUa4u2z1DECXtkuoVLmj.jpg",
    },
    {
      url: "https://c0.wallpaperflare.com/preview/1007/355/640/industry-industry-4-web-network.jpg",
    },
  ];

  // Dark Mode Implementation
  const { darkMode } = useContext(DarkModeContext);

  // Use useEffect to call getUserLocation once the component is mounted
  useEffect(() => {
    getUserLocation();
  }, []);
  console.log(userLocation);

  return (
    <>
      <div className={darkMode ? "app dark" : "app"}>
        <Router>
          <Routes>
            <Route
              path="/allbusiness"
              element={
                <>
                  <AllBusiness userLocation={userLocation} />
                </>
              }
            />
            <Route
              path="/"
              element={
                <>
                  <HomePage />
                </>
              }
            />
            <Route
              path="/businesses/:businessName"
              element={
                <>
                  <Header />
                  <ProductPage
                    imageURL={ProductImages}
                    ProductHead={"SEARCH IN BUSINESS"}
                    Heading={"BUSINESS"}
                    SubHeading={"BUSINESS"}
                    userLocation={userLocation}
                  />
                </>
              }
            />
            <Route
              path="/services"
              element={
                <>
                  <Header />
                  <ProductPage
                    imageURL={ServicesImages}
                    ProductHead={"HOME/SERVICES"}
                    Heading={"SERVICES"}
                    SubHeading={"IN SERVICES"}
                  />
                </>
              }
            />

            <Route
              path="/contactus"
              element={
                <>
                  <Header />
                  <ContactUsPage imageURL={ProductImages} />
                </>
              }
            />
            <Route
              path="/aboutus"
              element={
                <>
                  <Header />
                  <HomeAboutPage imageURL={ProductImages} />
                </>
              }
            />
            <Route
              path="/BusinessPanelPage"
              element={
                <>
                  <Header />
                  <BusinessPanelPage />
                </>
              }
            />
            <Route
              path="/upcomingbusiness"
              element={
                <>
                  <Header />
                  <UpcomingBusiness userLocation={userLocation} />
                </>
              }
            />
            <Route
              path="/upcomingbusiness"
              element={
                <>
                  <Header />
                  <UpcomingBusiness />
                </>
              }
            />
            <Route
              path="/privacypolicy"
              element={
                <>
                  <Header />
                  <PrivacyPolicyPage />
                </>
              }
            />
            <Route
              path="/termsOfUse"
              element={
                <>
                  <Header />
                  <TermsAndConditionsPage />
                </>
              }
            />
            {/* <Route path="/AdminPanel" element={<Home />} />
            <Route path="/Adminlogin" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route> */}

            <Route path="/">
              <Route path="/AdminPanel" element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="users">
                <Route index element={<List />} />
                <Route path=":userId" element={<Single />} />
                <Route
                  path="new"
                  element={<New inputs={userInputs} title="Add New User" />}
                />
              </Route>
              <Route path="products">
                <Route index element={<List />} />
                <Route path=":productId" element={<Single />} />
                <Route
                  path="new"
                  element={
                    <New inputs={productInputs} title="Add New Product" />
                  }
                />
              </Route>
            </Route>
            <Route
              path="/product/about/:id"
              element={<ProductAboutPage imageURL={ProductImages} />}
            />
            <Route
              path="/product/about/review/:id"
              element={<ReviewPage imageURL={ProductImages} />}
            />
            <Route
              path="/product/about/photos/:id"
              element={<PhotosPage imageURL={ProductImages} />}
            />
            <Route
              path="/product/about/services/:id"
              element={<ServicePage imageURL={ProductImages} />}
            />
            <Route
              path="/product/about/aboutus/:id"
              element={<AboutUsPage imageURL={ProductImages} />}
            />
            <Route path="/SuperAdminPanel" element={<SuperAdminPanel />} />
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
