import { UploadCloud } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Upload() {
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);

  const navigate = useNavigate();

  const handleImage = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      setFile(selectedFile);
      setImage(URL.createObjectURL(selectedFile));
    }
  };

  const handleDetect = async () => {
    if (!file) {
      alert("Please select an image first");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/predict",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      navigate("/result", {
        state: {
          ...data,
          image,
        },
      });

    } catch (error) {
      console.error(error);
      alert("Prediction Failed");
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F9F4] flex justify-center items-center p-6">

      <div className="bg-white rounded-3xl shadow-xl p-10 w-full max-w-3xl">

        <h1 className="text-4xl font-bold text-green-700 text-center">
          Upload Crop Image
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-8">
          Upload a clear image of your crop leaf for AI disease detection.
        </p>

        <div className="border-2 border-dashed border-green-500 rounded-3xl p-8 flex flex-col items-center">

          {!image ? (
            <>
              <UploadCloud
                size={70}
                className="text-green-700 mb-5"
              />

              <h2 className="text-2xl font-bold">
                Drag & Drop Image
              </h2>

              <p className="text-gray-500 my-5">
                OR
              </p>

              <input
                type="file"
                id="imageUpload"
                accept="image/*"
                className="hidden"
                onChange={handleImage}
              />

              <button
                onClick={() =>
                  document.getElementById("imageUpload").click()
                }
                className="bg-green-700 text-white px-8 py-3 rounded-xl hover:bg-green-800 transition"
              >
                Choose Image
              </button>
            </>
          ) : (
            <>
              <img
                src={image}
                alt="Preview"
                className="w-80 rounded-2xl shadow-lg"
              />

              <input
                type="file"
                id="imageUpload"
                accept="image/*"
                className="hidden"
                onChange={handleImage}
              />

              <div className="flex gap-4 mt-6">

                <button
                  onClick={() =>
                    document.getElementById("imageUpload").click()
                  }
                  className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700"
                >
                  Change Image
                </button>

                <button
                  onClick={() => {
                    setImage(null);
                    setFile(null);
                  }}
                  className="bg-red-500 text-white px-6 py-3 rounded-xl hover:bg-red-600"
                >
                  Remove
                </button>

              </div>

              <button
                onClick={handleDetect}
                className="mt-8 bg-green-700 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:bg-green-800 transition"
              >
                🔍 Detect Disease
              </button>
            </>
          )}

        </div>

      </div>

    </div>
  );
}

export default Upload;