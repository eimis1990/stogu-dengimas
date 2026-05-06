"use client";

import dynamic from "next/dynamic";
import { ReactNode } from "react";

const Header = dynamic(() => import("@/components/layout/Header"), {
  ssr: false,
});

export default function ClientShell({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
    </>
  );
}
