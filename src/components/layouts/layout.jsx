import { useState } from "react";
import TripContext from "../../context/TripContext";

export default function Layout ({ children }) {

  const [trip, setTrip] = useState([]);

  return (
    <TripContext.Provider value={{ trip, setTrip }}>
      {children}
    </TripContext.Provider>
  );
}