import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import UploadCard from "../components/UploadCard";
import WeatherCard from "../components/WeatherCard";
import QuickActions from "../components/QuickActions";
import StatsCard from "../components/StatsCard";
import LanguageSwitcher from "../components/LanguageSwitcher";

function Dashboard() {

  const [history, setHistory] = useState([]);
  const [language, setLanguage] = useState("en");

  useEffect(() => {

    const savedHistory =
      JSON.parse(
        localStorage.getItem("history")
      ) || [];

    setHistory(savedHistory);

  }, []);

  const totalPredictions =
    history.length;

  const healthyCrops =
    history.filter((item) =>
      item.disease
        ?.toLowerCase()
        .includes("healthy")
    ).length;

  const diseasedCrops =
    totalPredictions -
    healthyCrops;

  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1 bg-[#F4F9F4] p-8">

        <Navbar />

        <div className="flex justify-between items-center mt-10">

          <div>

            <h1 className="text-4xl font-bold">

              {language === "en" &&
                "Good Evening, Vaishnavi 👋"}

              {language === "hi" &&
                "शुभ संध्या, वैष्णवी 👋"}

              {language === "mr" &&
                "शुभ संध्याकाळ, वैष्णवी 👋"}

            </h1>

            <p className="text-gray-500 mt-2">

              {language === "en" &&
                "Welcome back to AgriSense AI"}

              {language === "hi" &&
                "AgriSense AI में आपका स्वागत है"}

              {language === "mr" &&
                "AgriSense AI मध्ये तुमचे स्वागत आहे"}

            </p>

          </div>

          <LanguageSwitcher
            language={language}
            setLanguage={setLanguage}
          />

        </div>

        {/* Analytics Cards */}

        <div className="grid grid-cols-3 gap-6 mt-10">

          <StatsCard
            title="Total Predictions"
            value={totalPredictions}
          />

          <StatsCard
            title="Healthy Crops"
            value={healthyCrops}
          />

          <StatsCard
            title="Diseased Crops"
            value={diseasedCrops}
          />

        </div>

        {/* Upload + Weather */}

        <div className="grid grid-cols-2 gap-6 mt-10">

          <UploadCard />

          <WeatherCard />

        </div>

        <QuickActions />

      </div>

    </div>
  );
}

export default Dashboard;