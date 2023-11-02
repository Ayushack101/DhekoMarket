import React from "react";
import logo from "../../Assets/dekho_market_logo.png";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const TailwindHeader = () => {
  return (
    // <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-indigo-600 border-b border-white/[.5] text-sm py-1.5 sm:py-0">
    //   <nav
    //     className="relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
    //     aria-label="Global"
    //   >
    //     <div className="flex items-center justify-between">
    //       <a
    //         className="flex-none text-xl font-semibold text-white"
    //         href="#"
    //         aria-label="Brand"
    //       >
    //         <img src={logo} alt="" className="w-[130px] h-[50px] " />
    //       </a>
    //       <div className="sm:hidden">
    //         <button
    //           type="button"
    //           className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border border-white/[.5] font-medium text-white/[.5] shadow-sm align-middle hover:bg-white/[.1] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm"
    //           data-hs-collapse="#navbar-collapse-with-animation"
    //           aria-controls="navbar-collapse-with-animation"
    //           aria-label="Toggle navigation"
    //         >
    //           <svg
    //             className="hs-collapse-open:hidden w-4 h-4"
    //             width="16"
    //             height="16"
    //             fill="currentColor"
    //             viewBox="0 0 16 16"
    //           >
    //             <path
    //               fill-rule="evenodd"
    //               d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
    //             />
    //           </svg>
    //           <svg
    //             className="hs-collapse-open:block hidden w-4 h-4"
    //             width="16"
    //             height="16"
    //             fill="currentColor"
    //             viewBox="0 0 16 16"
    //           >
    //             <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
    //           </svg>
    //         </button>
    //       </div>
    //     </div>
    //     <div
    //       id="navbar-collapse-with-animation"
    //       className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
    //     >
    //       <div className="flex flex-col gap-x-0 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:pl-7">
    //         <a
    //           className="font-medium text-white/[.8] hover:text-white sm:py-6"
    //           href="#"
    //         >
    //           Work
    //         </a>
    //         <a
    //           className="font-medium text-white/[.8] hover:text-white sm:py-6"
    //           href="#"
    //         >
    //           Blog
    //         </a>

    //         <a
    //           className="flex items-center gap-x-2 font-medium text-white/[.8] hover:text-white sm:border-l sm:border-white/[.3] sm:my-6 sm:pl-6"
    //           href="#"
    //         >
    //           <svg
    //             className="w-4 h-4"
    //             xmlns="http://www.w3.org/2000/svg"
    //             width="16"
    //             height="16"
    //             fill="currentColor"
    //             viewBox="0 0 16 16"
    //           >
    //             <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
    //           </svg>
    //           Log in
    //         </a>
    //       </div>
    //     </div>
    //   </nav>
    // </header>
    <Navbar
      expand="lg"
      className="bg-body-tertiary px-[6.7rem] py-[2.3rem] sticky w-full top-0 left-0 z-10"
    >
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={logo} className="w-[140px] h-[50px]" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {/* <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 w-[300px] py-2"
              aria-label="Search"
            />
            <button className="bg-indigo-500 text-white border-0 px-[14px] rounded hover:bg-indigo-700 transition-all duration-200 ease-in text-sm tracking-wide">
              Search
            </button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TailwindHeader;
