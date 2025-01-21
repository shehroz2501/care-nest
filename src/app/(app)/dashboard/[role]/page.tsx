import { notFound } from "next/navigation";

import Dashboard from "@/components/Dashboard";

interface PageProps {
  params: Promise<{ role: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function DashboardPage({ params }: PageProps) {
  const { role } = await params;

  if (role !== "parent" && role !== "provider") {
    notFound();
  }

  return <Dashboard role={role as "parent" | "provider"} />;
}
