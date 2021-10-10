import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DefaultLayout = (props) => {
    return (
        <div>
              {props.children}
            <footer>Footer</footer>
        </div>
    );
}

export default DefaultLayout