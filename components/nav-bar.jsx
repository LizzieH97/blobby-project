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
            Blobby Statistics
          </a>
        </li>
        <li className="list-item">
          <a href="/blobby-merch" className="Btn">
            Blobby Merchandise
          </a>
        </li>
        <li className="list-item">
          <a href="/blobby-videos" className="Btn">
            Blobby Videos
          </a>
        </li>
      </ul>
    </nav>
  );
}
export default NavBar;
