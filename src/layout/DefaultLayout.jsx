import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavBar from "../components/NavBar/NavBarComponent";

const DefaultLayout = (props) => {
    return (
        <div>
            <NavBar/>
              {props.children}
        </div>
    );
}

export default DefaultLayout