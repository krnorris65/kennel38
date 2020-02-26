import React from "react";
import AnimalCard from "./animal/AnimalCard";
import "./Kennel.css";

const Kennel = () => {
  return (
    <div>
      <div>
        <h2>
          Student Kennels
          <br />
          <small>Loving care when you're not there.</small>
        </h2>
        <address>
          Visit Us at the Nashville North Location
          <br />
          500 Puppy Way
        </address>
      </div>
      <div>
        <AnimalCard />
        <AnimalCard />
        <AnimalCard />
      </div>
    </div>
  );
};

export default Kennel;