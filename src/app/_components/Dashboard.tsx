"use client";

import type { InvoiceWithoutShipment, Shipment } from "../../types/zod-schemas";
import Header from "./Header";
import ShipmentList from "./ShipmentList";

interface DashboardProps {
  shipments: (Shipment & { invoices: InvoiceWithoutShipment[] })[];
}

export default function Dashboard({ shipments }: DashboardProps) {
  return (
    <div className="w-full max-w-6xl">
      <Header />
      <ShipmentList shipments={shipments} />
    </div>
  );
}
