import Super from "../all-images/super.jpg";
import Eco from "../all-images/eco.jpg";
import Hero from "../all-images/hero.jpg";
import Bikes from "../all-images/3bikes.jpg";

const carData = [
  {
    id: 1,
    brand: "Honda",
    rating: 112,
    carName: "Honda CBR 125",
    imgUrl: Super,
    model: "CBR-125 2017",
    price: 34000,
    speed: "4089km ODO reading",
    gps: "Condition Used Bike",
    seatType: "On-road",
    automatic: "Manual",
    description:
    "Feel the power of the bike, reach your destination in no time.",
  },

  {
    id: 2,
    brand: "Dash",
    rating: 132,
    carName: "Dash 125",
    imgUrl: Bikes,
    model: "125 2023",
    price: 27000,
    speed: "0km ODO reading",
    gps: "Condition Brand New",
    seatType: "On-road",
    automatic: "Automatic",
    description:
      "Move around with ease while saving fuel. This bike will make your life easier.",
  },
  {
    id: 3,
    brand: "Eco",
    rating: 112,
    carName: "Eco 150",
    imgUrl: Hero,
    model: "150 2023",
    price: 25000,
    speed: "0km ODO reading",
    gps: "Condition Brand New",
    seatType: "On-road/Off-road",
    automatic: "Manual",
    description: "An off-road bike that will suit your racing and mountain climbing needs",
  },

  // {
  //   id: 4,
  //   brand: "Eco",
  //   rating: 102,
  //   carName: "Eco Deluxe",
  //   imgUrl: Eco,
  //   model: "Deluxe i3s",
  //   price: 18500,
  //   speed: "0km ODO reading",
  //   gps: "Condition Brand New",
  //   seatType: "On-road",
  //   automatic: "Manual",
  //   description:
  //     "The fastest bike in the world. It will make you feel like you are flying.",
  // },
];

export default carData;
