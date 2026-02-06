import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import LeandingPage from "@/pages/leanding";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Suspense fallback={null}>
        <Header />
        <div className="min-h-[calc(100dvh-439px)]">
          <LeandingPage />
        </div>
        <Footer />
      </Suspense>
    </>
  );
}
