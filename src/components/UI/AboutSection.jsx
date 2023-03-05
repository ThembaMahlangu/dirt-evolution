import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">Welcome to Dirt Evolution</h2>
              <p className="section__description">
              For the past 4 years we have been commited to providing
                  the best motorbike service and we strive to meet our client's needs.
                  We have a backround of great repairs and excellent service in our bike sales.
              </p>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Trusted Service
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Reliable Work
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Collections and Delivery
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Bikes and Boats
                </p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={"https://scontent.fjnb11-1.fna.fbcdn.net/v/t39.30808-6/325387180_937443600960774_3847204106316673637_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeFgafV7JeHffqL2WEWQlKc1B03Rw0V-d30HTdHDRX53fR0-IWIzEWHUkTq4h2mJ4-fb66ukWQw3Jknmovv7g9SO&_nc_ohc=l-svK5mx71UAX-3WtUL&_nc_oc=AQkctd5a8ZodyVpeA8NFDbl5vZTgZGMimoCvIZy0cWsiwucPcWPQti2ZAN3_PxC-thY&_nc_ht=scontent.fjnb11-1.fna&oh=00_AfBZp_iYLzUFh1nGQKolleEQh7hEtAz_04gNeRP84utAHg&oe=64095929"} alt="image about dirt evolution in Middelburg" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
