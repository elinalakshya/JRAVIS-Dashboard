export default function StreamTable({ streams }) {
  return (
    <div className="mt-8 bg-neutral-900 p-5 rounded-xl border border-neutral-800">
      <h2 className="text-lg font-bold glow-gold">Active Streams</h2>

      <div className="overflow-x-auto mt-4">
        <table className="w-full text-left">
          <thead>
            <tr className="text-neutral-400 border-b border-neutral-800">
              <th className="p-2">Stream</th>
              <th className="p-2">Status</th>
              <th className="p-2">Income</th>
              <th className="p-2">Health</th>
            </tr>
          </thead>

          <tbody>
            {streams?.map((s, idx) => (
              <tr key={idx} className="border-b border-neutral-800">
                <td className="p-2">{s.name}</td>
                <td className="p-2 text-yellow-400">{s.status}</td>
                <td className="p-2">₹{s.revenue}</td>
                <td className="p-2">{s.health}%</td>
              </tr>
            ))}

            {!streams?.length && (
              <tr>
                <td colSpan={4} className="text-neutral-500 p-3 text-center">
                  No data yet…
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
