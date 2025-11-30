import type { InvoiceWithoutShipment, Shipment } from "../../types/zod-schemas";
import Card from "./Card";

interface ShipmentListProps {
  shipments: (Shipment & { invoices: InvoiceWithoutShipment[] })[];
}

export default function ShipmentList({ shipments }: ShipmentListProps) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
      {shipments.map((shipment) => (
        <Card key={shipment.id} shipment={shipment} />
      ))}
    </div>
  );
}
