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
import Header from "../components/header";

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
        </Routes>
      </div>
      <SignupForm />
    </div>
  );
}

export default App;
