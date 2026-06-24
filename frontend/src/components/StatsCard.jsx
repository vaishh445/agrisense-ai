function StatsCard({
  title,
  value,
}) {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6">

      <h3 className="text-gray-500 text-lg">
        {title}
      </h3>

      <h1 className="text-4xl font-bold text-green-700 mt-3">
        {value}
      </h1>

    </div>
  );
}

export default StatsCard;