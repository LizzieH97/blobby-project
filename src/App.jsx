import { Route, Routes } from "react-router-dom";
import "./App.css";
import FirstParagraph from "../components/first-paragraph";
import BlobbyStatistics from "../components/blobby-statistics";
import BlobbyMerch from "../components/blobby-merch";
import SignupForm from "../components/signup-form";
import NavBar from "../components/nav-bar";
import BlobbyVideos from "../components/blobby-videos";
import Header from "../components/header";
import LogBook from "../components/log-book";
import TickedReturn from "../components/ticked-log-book";
import UntickedReturn from "../components/unticked-log-book";

function App() {
  return (
    <div className="main-grid-container">
      <Header />
      <NavBar />
      <div className="changing-grid-item">
        <Routes>
          <Route path="/" element={<FirstParagraph />} />
          <Route path="/blobby-statistics" element={<BlobbyStatistics />} />
          <Route path="/blobby-merch" element={<BlobbyMerch />} />
          <Route path="/blobby-videos" element={<BlobbyVideos />} />
          <Route path="/log-book" element={<LogBook />} />
          <Route path="/ticked-return" element={<TickedReturn />} />
          <Route path="/unticked-return" element={<UntickedReturn />} />
        </Routes>
      </div>
      <SignupForm />
    </div>
  );
}

export default App;
