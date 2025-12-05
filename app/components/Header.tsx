export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 border-b border-neutral-800 bg-black">
      <div className="flex items-center gap-3">
        <img src="/lakshya-logo.png" className="w-10 logo-glow" />
        <h1 className="text-xl font-bold glow-gold">LAKSHYA 2040</h1>
      </div>

      <button
        className="text-red-400 hover:text-red-300"
        onClick={() => {
          localStorage.clear();
          window.location.href = "/login";
        }}
      >
        LOGOUT
      </button>
    </header>
  );
}
