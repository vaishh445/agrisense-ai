import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

function Chatbot() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const askAI = async () => {
    if (!question.trim()) {
      setAnswer("Please enter a question.");
      return;
    }

    setLoading(true);
    setAnswer("");

    try {
      const genAI = new GoogleGenerativeAI(
        import.meta.env.VITE_GEMINI_API_KEY
      );

      const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
      });

      const result = await model.generateContent(`
You are AgriSense AI.

You are an agriculture expert.

Help farmers with:
- Crop diseases
- Fertilizers
- Pesticides
- Irrigation
- Soil health
- Farming techniques

Answer in simple language.

Question:
${question}
      `);

      const response = result.response.text();

      setAnswer(response);
    } catch (error) {
      console.error("Gemini Error:", error);

      setAnswer(
        "⚠️ AI server is busy right now. Please try again after a few seconds."
      );
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#F4F9F4] p-10">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-10">

        <h1 className="text-5xl font-bold text-green-700 mb-8">
          🤖 AgriSense AI Chatbot
        </h1>

        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask anything about crops..."
          className="w-full border-2 border-gray-300 rounded-2xl p-5 h-40 text-lg"
        />

        <button
          onClick={askAI}
          className="mt-6 bg-green-700 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:bg-green-800"
        >
          Ask AI
        </button>

        {loading && (
          <p className="mt-6 text-green-700 font-semibold">
            Thinking...
          </p>
        )}

        {answer && (
          <div className="mt-8 bg-green-50 rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-4">
              AI Response
            </h2>

            <p className="whitespace-pre-wrap text-gray-800">
              {answer}
            </p>
          </div>
        )}

      </div>
    </div>
  );
}

export default Chatbot;