function Loading() {
  return (
    <div className="min-h-screen bg-[#F4F9F4] flex justify-center items-center">

      <div className="bg-white rounded-3xl shadow-xl p-12 text-center w-[500px]">

        <div className="animate-spin rounded-full h-20 w-20 border-b-4 border-green-700 mx-auto"></div>

        <h1 className="text-3xl font-bold text-green-700 mt-8">
          Analyzing Crop...
        </h1>

        <p className="text-gray-500 mt-3">
          AI is detecting disease.
          <br />
          Please wait...
        </p>

      </div>

    </div>
  );
}

export default Loading;