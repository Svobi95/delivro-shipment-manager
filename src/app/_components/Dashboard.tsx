"use client";

import Header from "./Header";
import ShipmentList from "./ShipmentList";

export default function Dashboard() {
  return (
    <div className="w-full max-w-5xl">
      <Header />
      <ShipmentList />
    </div>
  );
}
