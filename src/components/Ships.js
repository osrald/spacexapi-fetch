import React, { useEffect, useState } from "react";

const REST_API_SPACEX_SHIPS = "https://api.spacexdata.com/v3/ships";

function Ships() {
  const [ships, setShips] = useState([]);

  const fetchShips = () => {
    return fetch(REST_API_SPACEX_SHIPS)
      .then((response) => response.json())
      .then((data) => setShips(data));
  };

  useEffect(() => {
    fetchShips();
  }, []);

  return (
    <table border="1">
      <thead>
        <tr>
          <th>Ship Name</th>
          <th>Ship Type</th>
          <th>Weight in Kilos</th>
          <th>Weight in Pounds</th>
          <th>Year Built</th>
        </tr>
      </thead>
      <tbody>
        {ships &&
          ships.map((ship) => (
            <tr key={ship.ship_id}>
              <td>{ship.ship_name}</td>
              <td>{ship.ship_type}</td>
              <td>
                {ship.weight_kg === null
                  ? "Not Indicated"
                  : `${ship.weight_kg} kgs.`}
              </td>
              <td>
                {ship.weight_lbs === null
                  ? "Not Indicated"
                  : `${ship.weight_lbs} lbs.`}
              </td>
              <td>
                {ship.year_built === null ? "Not Indicated" : ship.year_built}
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default Ships;
