import LogBook from "./log-book";

export default function TickedReturn() {
  return (
    <>
      <div className="ticked-box">
        <h1 className="ticked-title">
          Hurrah!!! Blobby thanks you for your sacrifice and awaits your first
          born patiently
        </h1>
        <img
          src="images/Screenshot from 2024-11-05 14-32-46.png"
          className="ticked-image"
        />
      </div>
      <LogBook />
    </>
  );
}
