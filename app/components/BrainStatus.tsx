export default function BrainStatus({ status }) {
  return (
    <div className="p-5 bg-neutral-900 rounded-xl border border-neutral-800">
      <h2 className="text-lg font-bold glow-gold">JRAVIS Brain Status</h2>

      {!status && (
        <p className="text-neutral-400 mt-3">Loading intelligence...</p>
      )}

      {status && (
        <div className="mt-4 space-y-2">
          <p><span className="text-yellow-400">Mode:</span> {status.mode}</p>
          <p><span className="text-yellow-400">Action:</span> {status.action}</p>
          <p><span className="text-yellow-400">Confidence:</span> {status.confidence}%</p>
        </div>
      )}
    </div>
  );
}
