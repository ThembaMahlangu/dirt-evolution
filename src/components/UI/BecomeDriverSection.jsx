import React from "react";
import "../../styles/become-driver.css";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const BecomeDriverSection = () => {
  return (
    <section className="become__driver">
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12" className="become__driver-img">
            <img src={"https://scontent.fjnb11-1.fna.fbcdn.net/v/t39.30808-6/330128398_728391215303249_7697007696860220368_n.jpg?stp=dst-jpg_s600x600&_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEPDZP55pOy69N2YBAnJzd_2A5Uy3oFbTXYDlTLegVtNZsMHhUnqwPigelzXAOqmh2S2yBS_5bMZ5fRXIc88qlM&_nc_ohc=MbX2ZCz1YmYAX_Hb71J&_nc_ht=scontent.fjnb11-1.fna&oh=00_AfA7ywrZKqhiz6JnJ2leALMxiYuwx10VVLroZ3QVANDccQ&oe=6408E554"} alt="dirt bike unchained" className="w-100" />
          </Col>

          <Col lg="6" md="6" sm="12">
            <h2 className="section__title become__driver-title">
              Ready to Purchase your motorbike?
            </h2>

            <button  className="btn become__driver-btn mt-4">
             <Link to="/motorbikes" style={{textDecoration: 'none', color: "inherit"}}>Listings</Link>
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BecomeDriverSection;
