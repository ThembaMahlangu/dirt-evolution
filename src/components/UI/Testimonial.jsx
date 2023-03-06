import React from "react";
import Slider from "react-slick";

import "../../styles/testimonial.css";

import ava01 from "../../assets/all-images/ava.png";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p className="section__description">
          Thank you Maurius for the excellent service. I was very impressed with the way you handled the job. I will definitely be using you again and recommending you to my friends.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava01} alt="avatar image" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">G Putter</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
          Maurius was very professional and did a great job. He was very helpful and I would definitely recommend him to anyone.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava01} alt="image of avart" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Herman Dippenaar</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
          I cannot imagine a better service than what Maurius provided. He was very professional and did a great job. I would definitely recommend him to anyone.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava01} alt="avatar 3" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Jaundre Bester</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
         The only reliable place I would trust with my offroad bike. Maurius is a great guy and knows his stuff. I would recommend him to anyone.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava01} alt="avatar 4" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Bhekumuzi Mthethwa</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;
