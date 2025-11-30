import { z } from "zod";

export const ProviderSchema = z.enum(["GLS", "DPD", "UPS", "PPL", "FedEx"]);
export type Provider = z.infer<typeof ProviderSchema>;

export const ModeSchema = z.enum(["EXPORT", "IMPORT"]);
export type Mode = z.infer<typeof ModeSchema>;

export const CompanySchema = z
  .object({
    id: z.string(),
    name: z.string()
  })
  .strict();

export type Company = z.infer<typeof CompanySchema>;

export const ShipmentSchema = z
  .object({
    id: z.string(),
    createdAt: z.coerce.date(),
    trackingNumber: z.string(),
    provider: ProviderSchema,
    mode: ModeSchema,
    originCountry: z.string(),
    destinationCountry: z.string(),

    company: CompanySchema
  })
  .strict();

export type Shipment = z.infer<typeof ShipmentSchema>;

export const InvoiceSchema = z
  .object({
    id: z.string(),
    invoicedWeight: z.number(),
    invoicedPrice: z.number().int(),

    shipment: ShipmentSchema
  })
  .strict();

export type Invoice = z.infer<typeof InvoiceSchema>;

export const InvoiceSchemaWithoutShipment = z
  .object({
    id: z.string(),
    invoicedWeight: z.number(),
    invoicedPrice: z.number().int(),
    shipmentId: z.string()
  })
  .strict();

export type InvoiceWithoutShipment = z.infer<typeof InvoiceSchemaWithoutShipment>;
