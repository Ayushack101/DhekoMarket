import React, { useState, useEffect } from "react";
import "./ProductSection.css";
import ProductCard from "../../Components/ProductCard/ProductCard";
import SearchSuggestions from "../../Components/SearchSuggestions/SearchSuggestions";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ProductSection = ({ SubHeading, Businesses }) => {
  // State Management
  const [products, setProducts] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;
  const { id } = useParams();
  const location = useLocation();
  const [Ads, setAds] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState();

  // useeffect hook
  useEffect(() => {
    setProducts(Businesses);
  }, [Businesses]);

  // Api Endpoints
  const apiEndpoint =
    "https://dekhomarket.com/apis/nearby_business_suggestion_api.php";
  const apiEndpoint1 = "https://dekhomarket.com/apis/location_suggestion.php";

  // Create an array to store the combined list of products and ads
  const combinedList = [];

  // Check if the current route matches "/product/about/:id"
  if (location.pathname.startsWith("/product/about/")) {
    // Initialize an index for the Ads array
    let adsIndex = 0;
    // Render data for the "/product/about/:id" route
    products?.forEach((product, index) => {
      combinedList.push(
        <ProductCard
          id={product?.id}
          key={`product-${index}`}
          title={product?.services_name}
          subtitle={product?.description}
          images={product?.image_url}
          setShowPopup={setShowPopup}
          distance={product?.distance}
          review={product?.review}
        />
      );

      // Add an <AdCard> after every 3rd product
      if ((index + 1) % 4 === 0 && adsIndex < Ads.length) {
        combinedList.push(
          <Link to={Ads[adsIndex].url} key={`ad-${index}`}>
            <img
              src={Ads[adsIndex].image}
              alt=""
              style={{ width: "100%", height: "138px" }}
            />
          </Link>
        );
        // Increment the adsIndex to move to the next ad in the Ads array
        adsIndex++;
      }
    });
  } else {
    // Initialize an index for the Ads array
    let adsIndex = 0;
    // Render the list of products and advertisements for other routes
    products?.forEach((product, index) => {
      combinedList.push(
        <ProductCard
          id={product?.id}
          key={`product-${index}`}
          title={product?.business_name}
          subtitle={product?.description}
          images={product?.images}
          distance={product?.distance}
          review={product?.review}
        />
      );

      // Add an <AdCard> after every 3rd product
      if ((index + 1) % 4 === 0 && adsIndex < Ads.length) {
        combinedList.push(
          <Link to={Ads[adsIndex].url} key={`ad-${index}`}>
            <img
              src={Ads[adsIndex].image}
              alt=""
              style={{ width: "100%", height: "138px" }}
            />
          </Link>
        );
        // Increment the adsIndex to move to the next ad in the Ads array
        adsIndex++;
      }
    });
  }

  // buttons per page
  const buttonsPerPage = 10;

  // Calculate the start and end index for slicing the products
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  // Function to handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Calculate the total number of items in combinedList
  var totalCombinedItems = combinedList.length;

  // Calculate the total number of pages based on combinedList
  var totalPages = Math.ceil(totalCombinedItems / productsPerPage);

  // Calculate the range of buttons to display based on currentPage
  const buttonStart = Math.max(1, currentPage - Math.floor(buttonsPerPage / 2));
  const buttonEnd = Math.min(totalPages, buttonStart + buttonsPerPage - 1);

  // Create an array of page numbers to display in pagination
  const pageNumbers = Array.from(
    { length: buttonEnd - buttonStart + 1 },
    (_, index) => buttonStart + index
  );

  // useEffect Hook
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get(
          "https://dekhomarket.com/apis/ads_api.php"
        );
        if (response.status === 200) {
          setAds(response?.data);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleSearch = (suggestion) => {
    navigate(`/businesses/${suggestion}`);
  };

  return (
    <>
      <div className="productsection">
        <div className="productshowcase">
          <div className="productsectionleft">
            <div className="productmainlist">
              <div className="productmainheading">
                <span>{SubHeading}</span>
                <SearchSuggestions
                  onSearch={handleSearch}
                  apiEndpoint={apiEndpoint1}
                  placeholder={"Location"}
                />
              </div>
              {combinedList.slice(startIndex, endIndex).map((item, index) => (
                <React.Fragment key={index}>{item}</React.Fragment>
              ))}
              {/* Pagination buttons */}
              <div className="pagination">
                {currentPage > 1 && (
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    className="pagination-btn"
                  >
                    <i class="fa-solid fa-chevron-left"></i>
                  </button>
                )}
                {pageNumbers.map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`pagination-btn ${
                      currentPage === page ? "active" : ""
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  className={`pagination-btn ${
                    currentPage === totalPages ? "disabled" : ""
                  }`}
                >
                  <i class="fa-solid fa-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="productsectionright">
            <SearchSuggestions
              onSearch={handleSearch}
              apiEndpoint={apiEndpoint}
              placeholder={"Business"}
            />
            {Ads?.map((item) => {
              return (
                <Link to={item.url} key={item.id}>
                  <img
                    src={item.image}
                    alt=""
                    style={{ width: "100%", height: "138px" }}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductSection;
