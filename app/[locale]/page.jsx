"use client";

import { useTranslations } from "next-intl";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getAreas } from "@/api/areaApi";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    const fetchAreas = async () => {
      const areas = await getAreas({
        payStyle: "buy",
        liveStyle: "house",
      });
    };

    fetchAreas();
  });

  const t = useTranslations("Menu");
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {t("home")}

        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="hero min-h-screen bg-base-200">
              <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                  src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
                  className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                  <h1 className="text-5xl font-bold">Box Office News!</h1>
                  <p className="py-6">
                    <label className="swap swap-flip text-9xl">
                      {/* this hidden checkbox controls the state */}
                      <input type="checkbox" />

                      <div className="swap-on">😈</div>
                      <div className="swap-off">😇</div>
                    </label>
                  </p>
                  <button className="btn btn-primary">Get Started</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* Footer */}
      <Footer />
    </>
  );
}
