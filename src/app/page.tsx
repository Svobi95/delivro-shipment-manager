import { api, HydrateClient } from "~/trpc/server";
import Dashboard from "./_components/Dashboard";

export default async function Home() {
  const shipments = await api.shipment.getAll();

  return (
    <HydrateClient>
      <main className="min-h-screen bg-black text-white">
        <div className="flex flex-col items-center gap-12 px-4 py-16">
          <Dashboard />
        </div>
      </main>
    </HydrateClient>
  );
}
