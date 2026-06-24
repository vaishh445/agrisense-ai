import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/dashboard";
import Upload from "./pages/Upload";
import Result from "./pages/Result";
import History from "./pages/History";
import Profile from "./pages/Profile";
import Loading from "./pages/Loading";
import Voice from "./pages/Voice";
import Chatbot from "./pages/Chatbot";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/upload" element={<Upload />} />

        <Route path="/result" element={<Result />} />

        <Route path="/history" element={<History />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/loading" element={<Loading />} />

        <Route path="/voice" element={<Voice />} />

        <Route path="/chatbot" element={<Chatbot />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;