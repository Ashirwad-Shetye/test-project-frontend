import AdminPanel from "./AdminPanel";
import NavBar from "@/components/navbar";

export default function Home() {
  return (
    <main className="min-h-fit bg-black text-white">
      <NavBar />
      <div className="max-w-[1200px] mx-auto">
        <AdminPanel />
      </div>
    </main>
  );
}
