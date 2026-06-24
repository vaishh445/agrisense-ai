import {
  CheckCircle,
  Pill,
  Sprout,
  AlertTriangle,
} from "lucide-react";

import {
  Link,
  useLocation,
} from "react-router-dom";

import { useEffect } from "react";
import jsPDF from "jspdf";

function Result() {

  const location = useLocation();

  const disease =
    location.state?.disease || "Unknown Disease";

  const confidence =
    location.state?.confidence || 0;

  const image =
    location.state?.image || null;

  const diseaseInfo = {

    Tomato_Bacterial_Spot: {
      treatment:
        "Use copper-based bactericides and remove infected leaves.",

      fertilizer:
        "Apply balanced NPK fertilizer and avoid excess nitrogen.",

      prevention: [
        "Use certified disease-free seeds.",
        "Avoid overhead irrigation.",
        "Remove infected plant debris.",
        "Ensure proper airflow."
      ]
    },

    Tomato_Early_blight: {
      treatment:
        "Spray Mancozeb or Chlorothalonil fungicide every 7 days.",

      fertilizer:
        "Apply NPK 19:19:19 fertilizer every 15 days.",

      prevention: [
        "Remove infected leaves immediately.",
        "Avoid overwatering.",
        "Rotate crops.",
        "Maintain proper spacing."
      ]
    },

    Tomato_healthy: {
      treatment:
        "No treatment required. Plant is healthy.",

      fertilizer:
        "Continue regular NPK schedule.",

      prevention: [
        "Monitor crop regularly.",
        "Maintain proper watering.",
        "Use quality compost.",
        "Inspect leaves weekly."
      ]
    }

  };

  const info =
    diseaseInfo[disease] || {

      treatment:
        "Consult an agriculture expert.",

      fertilizer:
        "Use balanced NPK fertilizer.",

      prevention: [
        "Monitor crop regularly.",
        "Maintain proper field hygiene."
      ]
    };

  useEffect(() => {

    const oldHistory =
      JSON.parse(localStorage.getItem("history")) || [];

    const newRecord = {
      disease,
      confidence,
      date: new Date().toLocaleString(),
    };

    oldHistory.unshift(newRecord);

    localStorage.setItem(
      "history",
      JSON.stringify(oldHistory)
    );

  }, [disease, confidence]);

  const downloadPDF = () => {

    const doc = new jsPDF();

    doc.setFontSize(22);
    doc.text("AgriSense AI Report", 20, 20);

    doc.setFontSize(14);

    doc.text(`Disease: ${disease}`, 20, 45);

    doc.text(
      `Confidence: ${confidence}%`,
      20,
      60
    );

    doc.text(
      `Treatment: ${info.treatment}`,
      20,
      80
    );

    doc.text(
      `Fertilizer: ${info.fertilizer}`,
      20,
      100
    );

    doc.text(
      "Prevention Tips:",
      20,
      120
    );

    let y = 135;

    info.prevention.forEach((tip) => {
      doc.text(`• ${tip}`, 25, y);
      y += 10;
    });

    doc.save("AgriSense_Report.pdf");
  };

  return (
    <div className="min-h-screen bg-[#F4F9F4] flex justify-center items-center p-8">

      <div className="bg-white w-[850px] rounded-3xl shadow-xl p-10">

        <h1 className="text-4xl font-bold text-green-700 text-center">
          🌿 Disease Detection Result
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-10">
          AI has analyzed your crop image successfully.
        </p>

        {image && (
          <div className="flex justify-center mb-8">
            <img
              src={image}
              alt="Crop"
              className="w-72 rounded-2xl shadow-lg"
            />
          </div>
        )}

        <div className="bg-green-50 rounded-2xl p-6 shadow">

          <div className="flex items-center gap-3">

            <CheckCircle
              className="text-green-700"
              size={35}
            />

            <h2 className="text-2xl font-bold">
              {disease}
            </h2>

          </div>

          <p className="text-gray-600 mt-3">
            Confidence Level
          </p>

          <div className="w-full bg-gray-300 rounded-full h-4 mt-2">

            <div
              className="bg-green-600 h-4 rounded-full"
              style={{
                width: `${confidence}%`,
              }}
            ></div>

          </div>

          <p className="mt-2 font-bold text-green-700">
            {confidence}% Accurate
          </p>

        </div>

        <div className="mt-8 bg-white border rounded-2xl p-6 shadow">

          <div className="flex items-center gap-3 mb-3">

            <Pill className="text-blue-600" />

            <h2 className="text-2xl font-bold">
              Treatment
            </h2>

          </div>

          <p>
            {info.treatment}
          </p>

        </div>

        <div className="mt-6 bg-white border rounded-2xl p-6 shadow">

          <div className="flex items-center gap-3 mb-3">

            <Sprout className="text-green-600" />

            <h2 className="text-2xl font-bold">
              Fertilizer Recommendation
            </h2>

          </div>

          <p>
            {info.fertilizer}
          </p>

        </div>

        <div className="mt-6 bg-white border rounded-2xl p-6 shadow">

          <div className="flex items-center gap-3 mb-3">

            <AlertTriangle
              className="text-orange-500"
            />

            <h2 className="text-2xl font-bold">
              Prevention Tips
            </h2>

          </div>

          <ul className="list-disc ml-6 space-y-2">

            {info.prevention.map((tip, index) => (
              <li key={index}>
                {tip}
              </li>
            ))}

          </ul>

        </div>

        <div className="flex justify-center gap-5 mt-10">

          <Link to="/upload">

            <button className="bg-gray-500 text-white px-8 py-3 rounded-xl hover:bg-gray-600">

              Upload Another Image

            </button>

          </Link>

          <button
            onClick={downloadPDF}
            className="bg-green-700 text-white px-8 py-3 rounded-xl hover:bg-green-800"
          >
            Download Report
          </button>

        </div>

      </div>

    </div>
  );
}

export default Result;