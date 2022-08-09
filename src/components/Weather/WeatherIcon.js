import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';

const FaWeather = () => {
  return (
    <div id="FaWeather">
      <Link to="/weather">
        <FontAwesomeIcon icon={["fas", "cloud-sun"]} size="2x" />
      </Link>
    </div>
  );
};

export default FaWeather;