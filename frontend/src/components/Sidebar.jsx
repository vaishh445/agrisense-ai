import {
  LayoutDashboard,
  Upload,
  History,
  Mic,
  CloudSun,
  User,
  Bot
} from "lucide-react";

import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 bg-green-700 text-white h-screen p-6">

      <h2 className="text-2xl font-bold mb-10">
        🌾 AgriSense
      </h2>

      <div className="space-y-6">

        <Link to="/">
          <div className="flex items-center gap-3 hover:text-green-200 cursor-pointer">
            <LayoutDashboard />
            Dashboard
          </div>
        </Link>

        <Link to="/upload">
          <div className="flex items-center gap-3 hover:text-green-200 cursor-pointer">
            <Upload />
            Upload Crop
          </div>
        </Link>

        <div className="flex items-center gap-3 hover:text-green-200 cursor-pointer">
          <CloudSun />
          Weather
        </div>

        <Link to="/history">
          <div className="flex items-center gap-3 hover:text-green-200 cursor-pointer">
            <History />
            History
          </div>
        </Link>

        <Link to="/voice">
          <div className="flex items-center gap-3 hover:text-green-200 cursor-pointer">
            <Mic />
            Voice AI
          </div>
        </Link>

        <Link to="/chatbot">
  <div className="flex items-center gap-3 hover:text-green-200 cursor-pointer">
    <Bot />
    AI Chatbot
  </div>
</Link>

     <Link to="/profile">
  <div className="flex items-center gap-3 hover:text-green-200 cursor-pointer">
    <User />
    Profile
  </div>
</Link>   

      </div>

    </div>
  );
}

export default Sidebar;