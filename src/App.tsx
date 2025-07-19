import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import VideoDetail from "./components/VideoDetail";
import Navbar from "./components/Navbar";
import "./index.css";
import Search from "./components/Search";
import ChannelComponent from "./components/ChannelComponent";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/channel/:id" element={<ChannelComponent />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/search/:id" element={<Search />} />
      </Routes>
    </>
  );
}

export default App;
