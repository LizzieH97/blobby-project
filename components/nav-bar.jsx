import { useState } from "react";

function NavBar() {
  return (
    <nav className="nav-bar">
      <ul>
        <li className="list-item">
          <a href="/">
            <img
              src="/images/Mr-Blobby-costume-banner.jpg"
              className="blobby-pic"
            />
          </a>
        </li>
        <li className="list-item">
          <a href="/" className="Btn">
            Home
          </a>
        </li>
        <li className="list-item">
          <a href="/blobby-statistics" className="Btn">
            Statistics
          </a>
        </li>
        <li className="list-item">
          <a href="/blobby-merch" className="Btn">
            Merchandise
          </a>
        </li>
        <li className="list-item">
          <a href="/blobby-videos" className="Btn">
            Videos
          </a>
        </li>
        <li className="list-item">
          <a href="/log-book" className="Btn">
            Log Book
          </a>
        </li>
      </ul>
    </nav>
  );
}
export default NavBar;
