"use client";

export default function Error({
  reset,
}: {
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-primary mb-4">Klaida</h1>
        <h2 className="text-2xl font-bold text-dark mb-4">
          Kažkas nutiko ne taip
        </h2>
        <p className="text-medium mb-8">
          Atsiprašome už nepatogumus. Bandykite dar kartą.
        </p>
        <button
          onClick={() => reset()}
          className="inline-flex items-center justify-center bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-hover transition-colors"
        >
          Bandyti dar kartą
        </button>
      </div>
    </div>
  );
}
