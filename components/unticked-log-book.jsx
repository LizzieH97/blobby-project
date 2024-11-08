import LogBook from "./log-book";

export default function UnickedReturn() {
  return (
    <>
      <div className="ticked-box">
        <h1 className="ticked-title">
          What the hell is wrong with you?! You've made Blobby sad, shame on you
        </h1>
        <img
          src="src/assets/Screenshot from 2024-11-05 14-44-42.png"
          className="ticked-image"
        />
      </div>
      <LogBook />
    </>
  );
}
