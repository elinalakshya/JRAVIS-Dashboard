// app/components/StreamTable.tsx
export interface Stream {
  name: string;
  status: string;
  lastRun: string;
}

export default function StreamTable({ streams }: { streams: Stream[] }) {
  return (
    <table className="w-full text-left bg-white rounded-xl shadow-sm border">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-3 font-medium text-gray-700">Stream</th>
          <th className="p-3 font-medium text-gray-700">Status</th>
          <th className="p-3 font-medium text-gray-700">Last Run</th>
        </tr>
      </thead>

      <tbody>
        {streams.map((s, i) => (
          <tr key={i} className="border-b">
            <td className="p-3">{s.name}</td>
            <td
              className={`p-3 font-semibold ${
                s.status === "OK" ? "text-green-600" : "text-red-600"
              }`}
            >
              {s.status}
            </td>
            <td className="p-3 text-gray-500">{s.lastRun}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
