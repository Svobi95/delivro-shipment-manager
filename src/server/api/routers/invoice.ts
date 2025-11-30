import z from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { InvoiceSchema } from "../../../types/zod-schemas";

export const invoiceRouter = createTRPCRouter({
  upload: publicProcedure.input(z.array(InvoiceSchema)).mutation(async ({ ctx, input }) => {
    ctx.db.$transaction(async () => {
      await ctx.db.company.createMany({
        data: input.map((invoice) => ({
          id: invoice.shipment.company.id,
          name: invoice.shipment.company.name
        })),
        skipDuplicates: true
      });

      await ctx.db.shipment.createMany({
        data: input.map((invoice) => ({
          id: invoice.shipment.id,
          trackingNumber: invoice.shipment.trackingNumber,
          provider: invoice.shipment.provider,
          mode: invoice.shipment.mode,
          createdAt: invoice.shipment.createdAt,
          originCountry: invoice.shipment.originCountry,
          destinationCountry: invoice.shipment.destinationCountry,
          companyId: invoice.shipment.company.id
        })),
        skipDuplicates: true
      });

      await ctx.db.invoice.createMany({
        data: input.map((invoice) => ({
          id: invoice.id,
          invoicedPrice: invoice.invoicedPrice,
          invoicedWeight: invoice.invoicedWeight,
          shipmentId: invoice.shipment.id
        })),
        skipDuplicates: true
      });
    });

    return true;
  })
});
