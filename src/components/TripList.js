import React, { useState, useEffect } from "react";
import  './TripList.css'

function TripList() {
  const [trips, setTrips] = useState([]);




  useEffect(() => {
    fetch("http://localhost:3000/trips")
      .then((response) => response.json())
      .then((trip) => setTrips(trip));
  }, []);

  return (
    <div className="TripList">
      <h1>Trip List</h1>
      <ul>
        {trips.map((trip) => (
          <li key={trip.id}>
            <h1>{trip.title}</h1>
            <p>{trip.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TripList;
