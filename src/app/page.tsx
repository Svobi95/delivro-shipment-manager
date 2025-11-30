import { api, HydrateClient } from "~/trpc/server";
import Dashboard from "./_components/Dashboard";

export default async function Home({
  searchParams
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const query = await searchParams;
  const shipments = await api.shipment.getAll({ provider: query.provider as string | undefined });

  return (
    <HydrateClient>
      <main className="min-h-screen">
        <div className="flex flex-col items-center gap-12 px-4 py-16">
          <Dashboard shipments={shipments} />
        </div>
      </main>
    </HydrateClient>
  );
}
