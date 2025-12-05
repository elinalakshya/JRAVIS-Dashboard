// app/components/IncomeWidget.tsx
export default function IncomeWidget({ amount }: { amount: number }) {
  return (
    <div className="p-4 rounded-xl bg-blue-600 text-white shadow-md">
      <h3 className="text-lg font-semibold">Total Monthly Income</h3>
      <p className="text-3xl font-bold mt-2">₹{amount.toLocaleString()}</p>
    </div>
  );
}
