import React from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";
import ServicesList from "../components/UI/ServicesList";
import "../styles/about.css";

const About = () => {
  return (
    <Helmet title="About Dirt Evolution">
      <CommonSection title="About Us" />
      <AboutSection aboutClass="aboutPage" />
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Our Service</h6>
              <h2 className="section__title">Offer To Customers</h2>
            </Col>

            <ServicesList />
          </Row>
        </Container>
      </section>
      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={"https://img.autotrader.co.za/13282250/Crop640x480"} alt="about image" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                  We Aim To Please!
                </h2>

                <p className="section__description">
                  Here is a photo of one of our happy customer's bikes. We aim to please and provide the best service in Middelburg.
                </p>

                <div className=" d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i class="ri-phone-line"></i>
                  </span>

                  <div>
                    <h6 className="section__subtitle">Need Any Help?</h6>
                    <h4>013 813 1401</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <BecomeDriverSection />

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;
