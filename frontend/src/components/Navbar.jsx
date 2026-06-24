import { Bell, UserCircle } from "lucide-react";

function Navbar() {
  return (
    <div className="flex justify-between items-center bg-white px-8 py-4 rounded-2xl shadow">

      <h1 className="text-3xl font-bold text-green-700">
        🌾 AgriSense AI
      </h1>

      <div className="flex items-center gap-5">

        <Bell className="text-green-700 cursor-pointer" />

        <UserCircle
          size={35}
          className="text-green-700 cursor-pointer"
        />

      </div>

    </div>
  );
}

export default Navbar;