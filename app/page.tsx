import Image from "next/image";
import { Inter } from "next/font/google";
import AdminDashboard from "@/pages/adminDashboard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="h-screen min-h-fit bg-black text-white">
      <AdminDashboard />
    </main>
  );
}
