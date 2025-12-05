// app/components/LogFeed.tsx
export default function LogFeed({ logs }: { logs: string[] }) {
  return (
    <div className="p-4 bg-white border rounded-xl shadow-sm h-64 overflow-y-auto">
      <h3 className="font-semibold text-gray-900 mb-2">JRAVIS Activity Logs</h3>
      <div className="text-sm text-gray-700 space-y-1">
        {logs.map((line, i) => (
          <div key={i} className="border-b pb-1">
            {line}
          </div>
        ))}
      </div>
    </div>
  );
}
