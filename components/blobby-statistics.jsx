function BlobbyStatistics() {
  const blobbyStats = [
    "Birth Date: 3rd September 1705",
    "Height: 195cm",
    "Weight: 240kg",
    "Sexual Orientation: Pansexual",
    "Religion: Blobby",
    "Parents: Dr and Master Blobby (Deceased)",
    "Siblings: John Simm, Gary Lineker",
    "Marital Status: Single and Ready to Mingle",
    "First TV Appearance: 24th October 1992",
    "Alignment: Chaotic Evil",
  ];

  return (
    <>
      <h2 id="stats">Blobby Statistics</h2>
      <div className="container">
        {blobbyStats.length > 0 ? (
          blobbyStats.map((stat, index) => (
            <div className="flip-card" key={index}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="card">
                    <img
                      src="images/download.jpeg"
                      className="card-img-top"
                      alt="Front Image"
                    />
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="card">
                    <div className="card-body">
                      <p className="card-text">{stat}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No statistics available.</p>
        )}
      </div>

      <ul className="stats-list">
        <li>
          For more statistics, visit this link:
          <a
            href="https://en.wikipedia.org/wiki/Mr_Blobby"
            target="_blank"
            rel="noopener noreferrer"
            className="wiki-leak"
          >
            Mr Blobby Wikipedia
          </a>
        </li>
      </ul>
    </>
  );
}

export default BlobbyStatistics;
