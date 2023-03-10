import React, { useState } from "react";
import logo from "../../assets/all-images/logoo.png";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";
import emailjs from "@emailjs/browser";

const quickLinks = [
  {
    path: "/about",
    display: "About",
  },

  {
    path: "/about",
    display: "Privacy Policy",
  },

  {
    path: "/motorbikes",
    display: "Motorbike List",
  },
  {
    path: "/blogs",
    display: "Blog",
  },

  {
    path: "/contact",
    display: "Contact",
  },
];

const Footer = () => {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    emailjs
    .sendForm(
      "service_mk5j6fc",
      "template_f22dv6u",
      e.target,
      "alhwLOSp2yLNOem4D"
    )
    .then(
      (result) => {
        console.log(result.text);
        e.target.reset();
        setSubmitting(false);
      },
      (error) => {
        console.log(error.text);
        setSubmitting(false);
      }
    );
  };
  
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo footer__logo">
              <h1>
                <Link to="/home" className=" d-flex align-items-center gap-2">
                  <img src={logo} alt="logo" style={{width: 80}}/>
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content">
              We Aim To Please! The best Motor Bike Service in Middelburg, we are always ready to assist you with your bike needs with just a call or a few clicks you could have us collecting your bike and we could also provide you with the bike you looking for.
            </p> 
          </Col>

          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Quick Links</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Workshop & Office</h5>
              <p className="office__info">1 Rivier St, Middelburg, 1055</p>
              <p className="office__info">Phone: 082 063 7895</p>

              <p className="office__info">Email: dirtevolution@gmail.com</p>

              <p className="office__info">Operating Hours: 07:30am - 05:30pm</p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="12">
            <div className="mb-4">
              <h5 className="footer__link-title">Newsletter</h5>
              <p className="section__description">Subscribe our newsletter</p>
              <div className="newsletter">
                <input type="email" placeholder="Email" />
                <span onClick={() => { alert('Subscribed To Newsletter!') }}>
                  <i class="ri-send-plane-line"></i>
                </span>
              </div>
            </div>
          </Col>

          <Col lg="12">
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i class="ri-copyright-line"></i>
                Copyright 2019 to {year} Dirt Evolution. Powered by <a href="https://wa.me/+27769360246" target="_blank" rel="noopener noreferrer">AsyncFam</a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
