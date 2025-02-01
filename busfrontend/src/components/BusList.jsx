import { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";

const BusList = () => {
  const [buses, setBuses] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/buses")
      .then(response => setBuses(response.data))
      .catch(error => console.log("Error fetching buses:", error));
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center text-primary">Available Buses</h2>
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>Source</th>
            <th>Destination</th>
            <th>Departure</th>
            <th>Arrival</th>
            <th>Seats</th>
            <th>Fare</th>
          </tr>
        </thead>
        <tbody>
          {buses.map(bus => (
            <tr key={bus._id}>
              <td>{bus.name}</td>
              <td>{bus.source}</td>
              <td>{bus.destination}</td>
              <td>{bus.departureTime}</td>
              <td>{bus.arrivalTime}</td>
              <td>{bus.seatsAvailable}</td>
              <td>₹{bus.fare}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default BusList;
