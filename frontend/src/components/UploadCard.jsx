import { Upload } from "lucide-react";

function UploadCard() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition cursor-pointer">

      <Upload size={40} className="text-green-700 mb-4" />

      <h2 className="text-xl font-bold">
        Upload Crop
      </h2>

      <p className="text-gray-500 mt-2">
        Upload crop image for disease detection.
      </p>

    </div>
  );
}

export default UploadCard;