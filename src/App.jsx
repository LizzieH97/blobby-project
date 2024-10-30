import { useState } from "react";
import {
  Route,
  Routes,
  BrowserRouter,
  createBrowserRouter,
  Router,
} from "react-router-dom";
import "./App.css";
import FirstParagraph from "../components/first-paragraph";
import BlobbyStatistics from "../components/blobby-statistics";
import BlobbyMerch from "../components/blobby-merch";
import SignupForm from "../components/signup-form";
import NavBar from "../components/nav-bar";
import BlobbyVideos from "../components/blobby-videos";

function App() {
  return (
    <div className="main-grid-container">
      <div className="grid-title">
        <h1>Welcome to Blobby Town</h1>
        <img src="images/download.jpeg" className="blobby-pic" />
      </div>
      <h2 className="grid-subtitle">May God have mercy on your soul</h2>
      <NavBar />
      <div className="changing-grid-item">
        <Routes>
          <Route path="/" element={<FirstParagraph />} />
          <Route path="/blobby-statistics" element={<BlobbyStatistics />} />
          <Route path="/blobby-merch" element={<BlobbyMerch />} />
          <Route path="/blobby-videos" element={<BlobbyVideos />} />
        </Routes>
      </div>
      <SignupForm />
    </div>
  );
}

export default App;
