import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

import { Mic, MicOff } from "lucide-react";

function VoiceAssistant() {

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return (
      <div className="text-center text-red-500">
        Browser does not support Speech Recognition.
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl shadow-lg p-8">

      <h1 className="text-3xl font-bold text-green-700 mb-6">
        🎤 Voice Assistant
      </h1>

      <div className="bg-green-50 p-5 rounded-2xl min-h-[150px]">

        <p className="text-gray-700">
          {transcript || "Speak something..."}
        </p>

      </div>

      <div className="flex gap-4 mt-6">

        <button
          onClick={() =>
            SpeechRecognition.startListening({
              continuous: true,
              language: "en-IN",
            })
          }
          className="bg-green-700 text-white px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-green-800"
        >
          <Mic size={20} />
          Start
        </button>

        <button
          onClick={SpeechRecognition.stopListening}
          className="bg-red-500 text-white px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-red-600"
        >
          <MicOff size={20} />
          Stop
        </button>

        <button
          onClick={resetTranscript}
          className="bg-gray-500 text-white px-6 py-3 rounded-xl hover:bg-gray-600"
        >
          Clear
        </button>

      </div>

      <p className="mt-5 text-gray-500">
        Status:
        {" "}
        {listening ? "🎙 Listening..." : "⏸ Not Listening"}
      </p>

    </div>
  );
}

export default VoiceAssistant;