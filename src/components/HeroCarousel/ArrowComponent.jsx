import React from "react";


export function NextArrow(props) {
    return (
        <>
            <div
                className={props.className}
                style={{ ...props.style, position: "absolute", right: "5vw", zIndex: "100"}}
                onClick={props.onClick}
            />
        </>
    );
}

export function PrevArrow(props) {
    return (
        <>
            <div
                className={props.className}
                style={{ ...props.style, position: "absolute", left: "5vw", zIndex: "100"}}
                onClick={props.onClick}
            />
        </>
    );
}

