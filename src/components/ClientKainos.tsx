"use client";

import dynamic from "next/dynamic";

const KainosContent = dynamic(
  () => import("@/components/sections/KainosContent"),
  { ssr: false }
);

export default function ClientKainos() {
  return <KainosContent />;
}
