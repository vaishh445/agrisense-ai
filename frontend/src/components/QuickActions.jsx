import {
  ScanSearch,
  History,
  Mic,
  Languages,
} from "lucide-react";

function QuickActions() {
  const actions = [
    {
      icon: <ScanSearch size={32} />,
      title: "Disease Detection",
    },
    {
      icon: <History size={32} />,
      title: "Disease History",
    },
    {
      icon: <Mic size={32} />,
      title: "Voice Assistant",
    },
    {
      icon: <Languages size={32} />,
      title: "Language",
    },
  ];

  return (
    <>
      <h2 className="text-2xl font-bold mt-10 mb-5">
        Quick Actions
      </h2>

      <div className="grid grid-cols-2 gap-6">
        {actions.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition cursor-pointer"
          >
            <div className="text-green-700 mb-4">
              {item.icon}
            </div>

            <h3 className="font-bold text-lg">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </>
  );
}

export default QuickActions;