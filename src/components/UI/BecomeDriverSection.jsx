import React from "react";
import "../../styles/become-driver.css";
import { Container, Row, Col } from "reactstrap";

const BecomeDriverSection = () => {
  return (
    <section className="become__driver">
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12" className="become__driver-img">
            <img src={"https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2020/4/9/si9rqvzrczioeq1urrqt/dirt-bike-unchained-interview"} alt="dirt bike unchained" className="w-100" />
          </Col>

          <Col lg="6" md="6" sm="12">
            <h2 className="section__title become__driver-title">
              Ready to Purchase your motorbike?
            </h2>

            <button className="btn become__driver-btn mt-4">
              Listings
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BecomeDriverSection;
