import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import AnimalList from "./animal/AnimalList";
//only include these once they are built - previous practice exercise
// import LocationCard from "./location/LocationCard";
// import EmployeeCard from "./employee/EmployeeCard";
// import OwnerCard from "./owner/OwnerCard";

const ApplicationViews = () => {
    return (
        <React.Fragment>
            <Route
                exact
                path="/"
                render={props => {
                    return <Home />;
                }}
            />
            <Route
                path="/animals"
                render={props => {
                    return <AnimalList />;
                }}
            />
        </React.Fragment>
    );
};

export default ApplicationViews;