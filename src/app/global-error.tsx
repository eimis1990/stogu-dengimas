"use client";

export default function GlobalError({
  reset,
}: {
  reset: () => void;
}) {
  return (
    <html lang="lt">
      <body className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center px-4">
          <h1 className="text-6xl font-extrabold text-[#EC6536] mb-4">Klaida</h1>
          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">
            Kažkas nutiko ne taip
          </h2>
          <p className="text-[#6b7280] mb-8">
            Atsiprašome už nepatogumus. Bandykite dar kartą.
          </p>
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center bg-[#EC6536] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#d4552a] transition-colors"
          >
            Bandyti dar kartą
          </button>
        </div>
      </body>
    </html>
  );
}
