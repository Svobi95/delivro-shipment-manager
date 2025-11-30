import Image from "next/image";
import { type Invoice } from "../../../generated/prisma";
import type { Shipment } from "../../types/zod-schemas";
import { getLastPrice } from "../../utils/getLastPrice";
import { Text } from "./catalyst/text";
import { formatCurrency } from "../../utils/formatCurrency";
import { Badge } from "./catalyst/badge";

interface CardProps {
  shipment: Shipment & { invoices: Invoice[] };
}

export default function Card({ shipment }: CardProps) {
  return (
    <div className="flex items-center justify-start gap-4 rounded-sm border-2 border-solid border-gray-300 p-4">
      <div className="w-16">
        <Image src={`/logos/${shipment.provider.toLowerCase()}.svg`} alt={shipment.provider} width={70} height={70} />
      </div>
      <div className="flex-grow">
        <Text>TRK #{shipment.trackingNumber}</Text>
        <Text>{shipment.company.name}</Text>
        <div className="flex w-full flex-row items-center justify-between">
          <Text>{formatCurrency(getLastPrice(shipment.invoices), 'CZK')}</Text>
          <Text>{shipment.createdAt.toLocaleDateString()}</Text>
        </div>
        <div className="flex w-full flex-row items-center justify-between">
          <Text>
            {shipment.originCountry} -&gt; {shipment.destinationCountry}
          </Text>
           <Badge color={shipment.mode === "EXPORT" ? "lime" : "purple"}>{shipment.mode}</Badge>
        </div>
      </div>
    </div>
  );
}
