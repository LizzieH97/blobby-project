import SignupForm from "./signup-form";

function BlobbyVideos() {
  return (
    <div className="vids-container">
      <h2 className="vids-intro">Blobby Videos</h2>
      <p className="vids-intro">
        Here are some of Mr Blobby's most iconic moments, click on the videos
        below to watch:
      </p>
      <div className="vids-grid-container">
        <div className="vids-grid-item">
          <span>
            Mr Blobby Keeps Fit <br />
            <iframe src="https://www.youtube.com/embed/UJ-QOJXW76Y?controls=0"></iframe>
          </span>
        </div>
        <div className="vids-grid-item">
          <span>
            Mr Blobby's Christmas Hit <br />
            <iframe src="https://www.youtube.com/embed/rNkgDJpcuwU?controls=0"></iframe>
          </span>
        </div>
        <div className="vids-grid-item">
          <span>
            Mr Blobby Goes on Holiday with his Ex-Wife <br />
            <iframe src="https://www.youtube.com/embed/sk1hMICgdEs?controls=0"></iframe>
          </span>
        </div>
        <div className="vids-grid-item">
          <span>
            Mr Blobby on the UK-based Morning Show "This Morning"
            <br />
            <iframe src="https://www.youtube.com/embed/KZEc1E4a3Ic?controls=0"></iframe>
          </span>
        </div>
        <div className="vids-grid-item">
          <span>
            Mr Blobby goes to the Optician
            <br />
            <iframe src="https://www.youtube.com/embed/4KzoiRX0gOg?controls=0"></iframe>
          </span>
        </div>
        <div className="vids-grid-item">
          <span>
            Mr Blobby on the UK-based Quiz Show "Big Fat Quiz of the Year"
            <br />
            <iframe src="https://www.youtube.com/embed/ZMD2K0vj0Xs?controls=0"></iframe>
          </span>
        </div>
      </div>
      <SignupForm />
    </div>
  );
}
export default BlobbyVideos;
