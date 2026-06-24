function LanguageSwitcher({
  language,
  setLanguage,
}) {
  return (
    <div className="flex gap-3">

      <button
        onClick={() =>
          setLanguage("en")
        }
        className={`px-4 py-2 rounded-xl ${
          language === "en"
            ? "bg-green-700 text-white"
            : "bg-white"
        }`}
      >
        English
      </button>

      <button
        onClick={() =>
          setLanguage("hi")
        }
        className={`px-4 py-2 rounded-xl ${
          language === "hi"
            ? "bg-green-700 text-white"
            : "bg-white"
        }`}
      >
        हिन्दी
      </button>

      <button
        onClick={() =>
          setLanguage("mr")
        }
        className={`px-4 py-2 rounded-xl ${
          language === "mr"
            ? "bg-green-700 text-white"
            : "bg-white"
        }`}
      >
        मराठी
      </button>

    </div>
  );
}

export default LanguageSwitcher;