import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const FooterSection = () => {
  return (
    <footer
      className="text-center text-lg-start text-white"
      style={{ backgroundColor: '#45526e' }}
    >
      <Container fluid>
        <Container className="p-4 pb-0">
          <Row>
            <Col md={3} lg={3} xl={3} className="mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                Dekho Market
              </h6>
              <p>
              Dekho Market is hosted by the Hello Mistri Pvt Ltd, a private organization that also operates a range of other projects.
              </p>
            </Col>

            <Col md={2} lg={2} xl={2} className="mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
              <p>
                <a href="#" className="text-white">
                  MDBootstrap
                </a>
              </p>
              <p>
                <a href="#" className="text-white">
                  MDWordPress
                </a>
              </p>
              <p>
                <a href="#" className="text-white">
                  BrandFlow
                </a>
              </p>
              <p>
                <a href="#" className="text-white">
                  Bootstrap Angular
                </a>
              </p>
            </Col>

            <Col md={3} lg={2} xl={2} className="mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                Useful links
              </h6>
              <p>
                <a href="#" className="text-white">
                  Your Account
                </a>
              </p>
              <p>
                <a href="#" className="text-white">
                  Become an Affiliate
                </a>
              </p>
              <p>
                <a href="#" className="text-white">
                  Shipping Rates
                </a>
              </p>
              <p>
                <a href="#" className="text-white">
                  Help
                </a>
              </p>
            </Col>

            <Col md={4} lg={3} xl={3} className="mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
              <p>
                <i className="fas fa-home mr-3"></i> 4th Floor Office No. 401, A Block, A - 82, Sector 63, Noida, Uttar Pradesh 201301
              </p>
              <p>
                <i className="fas fa-envelope mr-3"></i> info@gmail.com
              </p>
              <p>
                <i className="fas fa-phone mr-3"></i> + 01 234 567 88
              </p>
              <p>
                <i className="fas fa-print mr-3"></i> + 01 234 567 89
              </p>
            </Col>
          </Row>
        </Container>

        <hr className="my-3" />

        <Container className="p-3 pt-0">
          <Row className="d-flex align-items-center">
            <Col md={7} lg={8} className="text-center text-md-start">
              <div className="p-3">
                © 2020 Copyright:
                <a className="text-white" href="https://www.hellomistri.com/index/">
                  HelloMistri.com
                </a>
              </div>
            </Col>

            <Col md={5} lg={4} className="ml-lg-0 text-center text-md-end">
              <a
                className="btn btn-outline-light btn-floating m-1"
                href="#"
                role="button"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                className="btn btn-outline-light btn-floating m-1"
                href="#"
                role="button"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                className="btn btn-outline-light btn-floating m-1"
                href="#"
                role="button"
              >
                <i className="fab fa-google"></i>
              </a>
              <a
                className="btn btn-outline-light btn-floating m-1"
                href="#"
                role="button"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </Col>
          </Row>
        </Container>
      </Container>
    </footer>
  );
};

export default FooterSection;
