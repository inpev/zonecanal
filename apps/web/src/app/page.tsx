import { ApiHealthIndicator } from "@/shared/components/feedback/ApiHealthIndicator";

export default function Home() {
  return (
    <main className="container">
      <h1>ZoneCanal</h1>
      <p>Plataforma global de comercio digital.</p>
      <ApiHealthIndicator />
    </main>
  );
}