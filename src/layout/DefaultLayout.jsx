import React from "react";

const DefaultLayout = (props) => {
    return (
        <div>
            <div>Header</div>
              {props.children}
            <footer>Footer</footer>
        </div>
    );
}

export default DefaultLayout