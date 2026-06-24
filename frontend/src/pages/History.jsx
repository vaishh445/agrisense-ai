import { useEffect, useState } from "react";
import {
  History as HistoryIcon,
  Trash2,
  BarChart3
} from "lucide-react";

function History() {

  const [history, setHistory] = useState([]);

  useEffect(() => {

    const savedHistory =
      JSON.parse(
        localStorage.getItem("history")
      ) || [];

    setHistory(savedHistory);

  }, []);

  const clearHistory = () => {

    localStorage.removeItem("history");

    setHistory([]);

  };

  return (
    <div className="min-h-screen bg-[#F4F9F4] p-10">

      <div className="max-w-6xl mx-auto">

        {/* Header */}

        <div className="flex justify-between items-center mb-8">

          <div className="flex items-center gap-4">

            <HistoryIcon
              size={40}
              className="text-green-700"
            />

            <h1 className="text-4xl font-bold text-green-700">
              Disease History
            </h1>

          </div>

          {history.length > 0 && (

            <button
              onClick={clearHistory}
              className="bg-red-500 text-white px-5 py-3 rounded-xl flex items-center gap-2 hover:bg-red-600"
            >
              <Trash2 size={18} />
              Clear History
            </button>

          )}

        </div>

        {/* Stats */}

        <div className="bg-white rounded-3xl shadow-lg p-6 mb-8">

          <div className="flex items-center gap-3">

            <BarChart3
              className="text-green-700"
            />

            <h2 className="text-2xl font-bold">
              Total Predictions
            </h2>

          </div>

          <h1 className="text-5xl font-bold text-green-700 mt-4">
            {history.length}
          </h1>

        </div>

        {/* Empty State */}

        {history.length === 0 ? (

          <div className="bg-white p-10 rounded-3xl shadow text-center">

            <h2 className="text-3xl font-bold text-gray-500">
              No History Found
            </h2>

            <p className="text-gray-400 mt-3">
              Upload a crop image to generate disease predictions.
            </p>

          </div>

        ) : (

          <div className="space-y-5">

            {history.map((item, index) => (

              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-xl transition"
              >

                <div className="flex justify-between items-center">

                  <div>

                    <h2 className="text-2xl font-bold text-green-700">
                      {item.disease}
                    </h2>

                    <p className="text-gray-500 mt-2">
                      {item.date}
                    </p>

                  </div>

                  <div className="text-right">

                    <p className="text-gray-500">
                      Confidence
                    </p>

                    <h2 className="text-3xl font-bold text-green-700">
                      {item.confidence}%
                    </h2>

                  </div>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>
  );
}

export default History;