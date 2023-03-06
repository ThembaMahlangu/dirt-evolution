import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import emailjs from "@emailjs/browser";

import "../styles/contact.css";

const socialLinks = [
  {
    url: "https://www.facebook.com/@Dirt-Evolution-100064337222463/",
    icon: "ri-facebook-line",
  },
  {
    url: "#",
    icon: "ri-instagram-line",
  },
  {
    url: "#",
    icon: "ri-linkedin-line",
  },
  {
    url: "#",
    icon: "ri-twitter-line",
  },
];

// Lets block the form if any fields are empty
const Contact = () => {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
  
    // Check if required fields are empty
    const requiredFields = [    { name: "name", label: "Full Name" },    { name: "subject", label: "Topic of Inquiry" }, { name: "email", label: "Email" },  { name: "message", label: "Message" },  ];
  
    let isEmptyField = false;
    const emptyFields = [];
  
    requiredFields.forEach((field) => {
      if (!e.target[field.name].value) {
        isEmptyField = true;
        emptyFields.push(field.label);
        e.target[field.name].classList.add("is-invalid");
      } else {
        e.target[field.name].classList.remove("is-invalid");
      }
    });
  
    if (isEmptyField) {
      alert(`Please fill in the following fields: ${emptyFields.join(", ")}`);
      setSubmitting(false);
      return;
    }
  
    emailjs
      .sendForm(
        "service_mk5j6fc",
        "template_xmkmz67",
        e.target,
        "alhwLOSp2yLNOem4D"
      )
      .then(
        (result) => {
          console.log(result.text);
          setName("");
          setSubject("");
          setNumber("");
          setEmail("");
          setMessage("");
          setSubmitting(false);
        },
        (error) => {
          console.log(error.text);
          setSubmitting(false);
        }
      );
  };   

  return (
    <Helmet title="Contact">
      <CommonSection title="Contact" />
      <section>
        <Container>
          <Row>
            <Col lg="7" md="7">
              <h6 className="fw-bold mb-4">Get In Touch</h6>

              <Form onSubmit={handleSubmit}>
                <FormGroup className="contact__form">
                  <Input
                    placeholder="Full Name"
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleNameChange}
                  />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input
                    placeholder="Topic of Inquiry"
                    type="text"
                    name="subject"
                    value={subject}
                    onChange={handleSubjectChange}
                  />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input
                    placeholder="Contact Number"
                    type="number"
                    name="number"
                    value={number}
                    onChange={handleNumberChange}
                  />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input
                    placeholder="Email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </FormGroup>
                <FormGroup className="contact__form">
                  <textarea
                    rows="4"
                    placeholder="Message"
                    className="textarea"
                    name="message"
                    value={message}
                    onChange={handleMessageChange}
                  ></textarea>
                </FormGroup>

                <button className=" contact__btn" type="submit">
                  {submitting ? 'Submitting...' : 'Send Message'}
                </button>
              </Form>
            </Col>

            <Col lg="5" md="5">
              <div className="contact__info">
                <h6 className="fw-bold">Contact Information</h6>
                <p className="section__description mb-0">
                  Rivier St, Middelburg, 1055
                </p>
                <div className=" d-flex align-items-center gap-2">
                  <h6 className="fs-6 mb-0">Phone:</h6>
                  <p className="section__description mb-0">+2782 063 7895</p>
                </div>

                <div className=" d-flex align-items-center gap-2">
                  <h6 className="mb-0 fs-6">Email:</h6>
                  <p className="section__description mb-0">dirtevolution@gmail.com</p>
                </div>

                <h6 className="fw-bold mt-4">Follow Us</h6>

                <div className=" d-flex align-items-center gap-4 mt-3">
                  {socialLinks.map((item, index) => (
                    <a
                      href={item.url}
                      key={index}
                      className="social__link-icon"
                    >
                      <i class={item.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;
