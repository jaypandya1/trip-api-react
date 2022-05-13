import React, { useState, useEffect } from "react";
import  './TripList.css'

function TripList() {
  const [trips, setTrips] = useState([]);
  const [url,setUrl] = useState('http://localhost:3000/trips');

  const FetchTrips = async ( ) => {
      const response = await fetch(url)
      const json = await response.json()
      setTrips(json)
  }

  useEffect(() => {
   FetchTrips()
  }, [trips,FetchTrips]);

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

      <div className="filters">
          <button onClick={() => setUrl('http://localhost:3000/trips?loc=europe')}>Europian Trips</button>
          <button onClick={() => setUrl('http://localhost:3000/trips')}>All Trips</button>
      </div>
    </div>
  );
}

export default TripList;
