import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';

const FaLink = () => {

     return (
         <div id="FaLink">  
            <Link to="/">
              <FontAwesomeIcon icon={["fas", "home"]} size="2x"/>          
            </Link> 
         </div>
     );
 };

 export default FaLink;