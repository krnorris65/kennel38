import React from "react";
import { Route, Redirect } from "react-router-dom";
import Home from "./home/Home";
import AnimalList from "./animal/AnimalList";
import AnimalDetail from "./animal/AnimalDetail";
import AnimalForm from './animal/AnimalForm';
import Login from "./auth/Login";

//only include these once they are built - previous practice exercise
// import LocationCard from "./location/LocationCard";
// import EmployeeCard from "./employee/EmployeeCard";
// import OwnerCard from "./owner/OwnerCard";

const ApplicationViews = () => {
    // Check if credentials are in session storage returns true/false
    const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

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
                if (isAuthenticated()) {
                    return <AnimalList {...props} />
                } else {
                    return <Redirect to="/login" />
                }
            }} />
            <Route
                path="/animals/:animalId(\d+)"
                render={props => {
                    // Pass the animalId to the AnimalDetailComponent
                    if (isAuthenticated()) {
                        return (
                            <AnimalDetail
                                animalId={parseInt(props.match.params.animalId)}
                                {...props}
                            />
                        );
                    } else {
                        return <Redirect to="/login" />
                    }
                }}
            />
            <Route path="/animals/new" render={(props) => {
                if (isAuthenticated()) {
                    return <AnimalForm {...props} />
                } else {
                    return <Redirect to="/login" />
                }
            }} />

            <Route path="/login" component={Login} />
        </React.Fragment>
    );
};

export default ApplicationViews;