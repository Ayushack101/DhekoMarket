import React, { useState, useEffect, useRef } from "react";
import Axios from "axios";
import "./SearchSuggestions.css";
import { useNavigate } from "react-router-dom";

const SearchSuggestions = ({ onSearch, apiEndpoint, placeholder }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const suggestionsRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        if (searchQuery.trim() === "") {
          setSuggestions([]);
          return;
        }

        const response = await Axios.post(apiEndpoint, {
          business_name: searchQuery,
          address: searchQuery,
        });

        if (response.status === 200) {
          setSuggestions(response.data);
          console.log(response.data);
          if (
            Array.isArray(response.data) &&
            response.data.length === 1 &&
            response.data[0] === "No record Found"
          ) {
            setShowSuggestions(false);
          }
        }
      } catch (error) {
        console.error("Error fetching suggestions:", error);
      }
    };

    if (showSuggestions) {
      fetchSuggestions();
    }
  }, [searchQuery, showSuggestions]);

  useEffect(() => {
    // Add an event listener to handle clicks outside of suggestions card
    const handleOutsideClick = (e) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(e.target)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
    setShowSuggestions(true);
  };

  const handleSuggestionClick = (suggestion) => {
    console.log("Clicked suggestion:", suggestion);
    setSearchQuery(suggestion);
    setShowSuggestions(false);
    if (typeof onSearch === "function") {
      onSearch(suggestion?.business_name);
    }
  };

  const handleInputKeyPress = (e) => {
    if (e.key === "Enter") {
      navigate(`/businesses/${e.target.value}`);
    }
  };

  return (
    <div className="search-suggestions">
      <div className="searchbar">
        <input
          onKeyPress={handleInputKeyPress}
          type="text"
          placeholder={placeholder}
          class="custom-input"
          value={searchQuery}
          onChange={handleInputChange}
        />
        <img
          src="https://www.startpage.com/sp/cdn/images/magnifying-glass-grey.svg"
          alt="Search Icon"
        />
      </div>
      {showSuggestions && suggestions.length > 0 && (
        <div className="suggestion-card" ref={suggestionsRef}>
          {suggestions.map((suggestion) => (
            <div
              key={suggestion.id}
              className="suggestion-item"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion?.business_name}
              {suggestion?.address}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchSuggestions;
