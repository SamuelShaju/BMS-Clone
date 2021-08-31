import React from "react";
import { Route } from "react-router";
import DefaultLayout from "../layout/DefaultLayout";


const DefaultHOC = ({component: Component, ...rest}) => {
    return (
        <>
            <Route 
                {...rest} 
                component={(props) => (
                <DefaultLayout>
                    <Component {...props}/>
                </DefaultLayout>
                )}
            />
        </>
    );
};

export default DefaultHOC;