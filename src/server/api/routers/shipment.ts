import z from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import type { Provider } from "../../../../generated/prisma";

export const shipmentRouter = createTRPCRouter({
  getAll: publicProcedure.input(z.object({ provider: z.string().optional() }).optional()).query(async ({ ctx, input }) => {
    const shipments = await ctx.db.shipment.findMany({
      where: input?.provider ? { provider: input.provider as Provider } : {},
      orderBy: { createdAt: "desc" },
      include: { company: true, invoices: true }
    });

    return shipments;
  })
});
