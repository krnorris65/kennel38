import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import AnimalList from "./animal/AnimalList";
import AnimalDetail from "./animal/AnimalDetail"
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
            {/* Make sure you add the `exact` attribute here */}
            <Route exact path="/animals" render={(props) => {
                return <AnimalList />
            }} />
            <Route
                path="/animals/:animalId(\d+)"
                render={props => {
                    // Pass the animalId to the AnimalDetailComponent
                    return (
                        <AnimalDetail
                            animalId={parseInt(props.match.params.animalId)}
                            {...props}
                        />
                    );
                }}
            />
        </React.Fragment>
    );
};

export default ApplicationViews;