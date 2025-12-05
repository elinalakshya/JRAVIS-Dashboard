// app/stream/[name]/page.tsx
import { apiGet } from "../../../lib/api";

export default async function StreamPage({ params }) {
  const { name } = params;
  const data = await apiGet(`/streams/${name}/latest`);

  return (
    <main className="p-10">
      <a href="/" className="text-blue-500">&larr; Back</a>

      <h1 className="text-3xl font-bold mb-4 capitalize">
        {name} Stream Output
      </h1>

      <pre className="bg-black text-green-400 p-6 rounded shadow overflow-auto">
        {JSON.stringify(data, null, 2)}
      </pre>
    </main>
  );
}
