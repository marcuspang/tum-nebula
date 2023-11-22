import { FleetManagement } from "@/components/fleet-management";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white dark:bg-black">
      <FleetManagement />
    </main>
  );
}
