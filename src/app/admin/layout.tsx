import SideBar from "@/components/layout/SideBar";
import type { ReactNode } from "react";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
      <section>
        <div style={{ display: "flex", minHeight: "100vh" }}>
        <SideBar />
          <main  className="flex-1 bg-gray-100 p-8">
            {children}
          </main>
        </div>
      </section>
  );
}