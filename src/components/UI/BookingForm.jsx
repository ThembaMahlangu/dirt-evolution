import React, { useState } from "react";
import "../../styles/booking-form.css";
import { Form, FormGroup } from "reactstrap";
import emailjs from "@emailjs/browser";

const BookingForm = () => {
  const [submitting, setSubmitting] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();

    setSubmitting(true);

    emailjs
      .sendForm(
        "service_mk5j6fc",
        "template_f22dv6u",
        event.target,
        "alhwLOSp2yLNOem4D"
      )
      .then(
        (result) => {
          console.log(result.text);
          event.target.reset();
          setSubmitting(false);
        },
        (error) => {
          console.log(error.text);
          setSubmitting(false);
        }
      );
  };

  return (
    <Form onSubmit={submitHandler}>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text" name="first_name" placeholder="First Name" required />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="text" name="last_name" placeholder="Last Name" required />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="email" name="email" placeholder="Email" required />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="number" name="phone" placeholder="Phone Number" required />
      </FormGroup>

      <FormGroup>
        <textarea
          rows={5}
          type="textarea"
          name="message"
          className="textarea"
          placeholder="Do you have anything we should keep in mind?"
        ></textarea>
      </FormGroup>

      <FormGroup>
        <button className="btn btn-primary" type="submit" disabled={submitting}>
          {submitting ? "Reserving..." : "Reserve Now"}
        </button>
      </FormGroup>
    </Form>
  );
};

export default BookingForm;
