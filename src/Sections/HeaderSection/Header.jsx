import React, { useState, useEffect, useRef } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../Assets/dekho_market_logo.png";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
import axios from "axios";
import "./Header.css";

const Header = () => {
  // State Management
  const [showCard, setShowCard] = useState(false);
  const [response, setResponse] = useState();
  const [data, setData] = useState(null);
  const cardRef = useRef(null);

  // New Obj response from user sign in
  const newObj = {
    name: response?.name,
    email: response?.email,
    picture: response?.picture,
    jti: response?.jti,
    emailVerified: response?.email_verified,
  };

  // Handle togglecard functionality
  const toggleCard = () => {
    setShowCard(!showCard);
  };

  // Handle login success Code
  const HandleLoginSuccess = (credentialResponse) => {
    useEffect(() => {
      const decoded = jwt_decode(credentialResponse?.credential);
      setResponse(decoded);
      // Store user data in local storage
      localStorage.setItem("userData", JSON.stringify(decoded));
    });
  };

  // Handle logout logic
  const logout = () => {
    console.log("Logout Successfully");
  };

  // Handle Client Id
  const CLIENT_ID =
    "561229451699-q8rm1r1sl6ej3rsjjtqa6hu4kqj5535e.apps.googleusercontent.com";

  // UseEffect Hook to Handle State on Firstload
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setShowCard(!showCard);
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

  // UseEffect Hook to Handle State on Firstload of Website
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://dekhomarket.com/apis/Google_sign_in_api.php",
          newObj
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">
            <Link to="/">
              <img
                alt=""
                src={logo}
                width="100"
                height="30"
                className="d-inline-block align-top"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/aboutus">About</Nav.Link>
              <Nav.Link href="contactus">Contact</Nav.Link>
              {/* <Nav.Link href="BusinessPanelPage">Business Panel</Nav.Link> */}
            </Nav>
            <Form className="d-flex">
              <img
                src="https://cdn-icons-png.flaticon.com/512/17/17704.png"
                alt=""
                className="dots"
                onClick={() => toggleCard()}
              />
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
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {showCard && (
        <div className="card" ref={cardRef}>
          <div className="card-content">
            <div class="item">
              <img
                src="https://img.freepik.com/free-photo/cherful-positive-young-colleagues-using-laptop-computer_171337-753.jpg"
                alt="Person 1"
              />
              <p>Name 1</p>
            </div>
            <div class="item">
              <img
                src="https://img.freepik.com/free-photo/cherful-positive-young-colleagues-using-laptop-computer_171337-753.jpg"
                alt="Person 2"
              />
              <p>Name 2</p>
            </div>
            <div class="item">
              <img
                src="https://img.freepik.com/free-photo/cherful-positive-young-colleagues-using-laptop-computer_171337-753.jpg"
                alt="Person 2"
              />
              <p>Name 3</p>
            </div>
            <div class="item">
              <img
                src="https://img.freepik.com/free-photo/cherful-positive-young-colleagues-using-laptop-computer_171337-753.jpg"
                alt="Person 1"
              />
              <p>Name 4</p>
            </div>
            <div class="item">
              <img
                src="https://img.freepik.com/free-photo/cherful-positive-young-colleagues-using-laptop-computer_171337-753.jpg"
                alt="Person 2"
              />
              <p>Name 5</p>
            </div>
            <div class="item">
              <img
                src="https://img.freepik.com/free-photo/cherful-positive-young-colleagues-using-laptop-computer_171337-753.jpg"
                alt="Person 2"
              />
              <p>Name 6</p>
            </div>
            <div class="item">
              <img
                src="https://img.freepik.com/free-photo/cherful-positive-young-colleagues-using-laptop-computer_171337-753.jpg"
                alt="Person 1"
              />
              <p>Name 7</p>
            </div>
            <div class="item">
              <img
                src="https://img.freepik.com/free-photo/cherful-positive-young-colleagues-using-laptop-computer_171337-753.jpg"
                alt="Person 2"
              />
              <p>Name 8</p>
            </div>
            <div class="item">
              <img
                src="https://img.freepik.com/free-photo/cherful-positive-young-colleagues-using-laptop-computer_171337-753.jpg"
                alt="Person 2"
              />
              <p>Name 9</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
