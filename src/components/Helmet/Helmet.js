import React from "react";

const Helmet = (props) => {
  document.title = "Dirt Evolution - Bike Service in Middelburg, Mpumalanga - " + props.title;
  return <div className="w-100">{props.children}</div>;
};

export default Helmet;
