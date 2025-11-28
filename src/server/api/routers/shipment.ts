import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const shipmentRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const shipments = await ctx.db.shipment.findMany({
      orderBy: { createdAt: "desc" },
    });

    console.log(shipments);

    return shipments ?? [];
  }),
});
