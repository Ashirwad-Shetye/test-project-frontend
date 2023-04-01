import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="h-screen flex items-center justify-center">
      <h1>Hello</h1>
    </main>
  );
}
