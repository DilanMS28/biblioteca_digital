import SideBar from "@/components/layout/SideBar";
import type { ReactNode } from "react";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <section className="flex min-h-dvh w-full min-w-0 flex-col">
      <div className="flex min-h-0 flex-1 min-w-0 w-full max-w-full items-stretch">
        <SideBar />
        <main className="flex min-h-0 min-w-0 flex-1 flex-col overflow-x-auto overflow-y-auto bg-gray-100 p-4 sm:p-6 md:p-8">
          <div className="min-w-0 flex-1">{children}</div>
        </main>
      </div>
    </section>
  );
}