import CreateGame from "@/components/CreateGame";
import Footer from "@/components/footer";
import Header from "@/components/header";
import LandingPage from "@/layout/LandingPage";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gray-50">
      <Header />
      <LandingPage />
      <CreateGame />
      <Footer />
    </main>
  );
}