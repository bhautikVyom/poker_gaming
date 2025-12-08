import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Image from "next/image";
import Faqs from "../components/common/faqs";
import LeandingPage from "@/pages/leanding";

export default function Home() {
  return (
    <>
      <Header />
      <div className="min-h-[calc(100dvh-439px)]">
        <LeandingPage />
        <Faqs />
      </div>
      <Footer />
    </>
  );
}
