import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Image from "next/image";
import LeandingPage from "./leanding/page";

export default function Home() {
  return (
    <>
      <Header />
      <div className="min-h-[calc(100dvh-439px)]">
         <LeandingPage />
      </div>
      <Footer />
    </>
  );
}
