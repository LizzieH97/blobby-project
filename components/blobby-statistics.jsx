import SignupForm from "./signup-form";

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
      <h2 className="stats">Blobby Statistics</h2>
      <div className="container">
        {blobbyStats.length > 0 ? (
          blobbyStats.map((stat, index) => (
            <div className="stats-flip-card" key={index}>
              <div className="stats-flip-card-inner">
                <div className="stats-flip-card-front">
                  <div className="stats-card">
                    <img
                      src="src/assets/download.jpeg"
                      className="stats-card-img-top"
                      alt="Front Image"
                    />
                  </div>
                </div>
                <div className="stats-flip-card-back">
                  <div className="stats-card">
                    <div className="stats-card-body">
                      <p className="stats-card-text">{stat}</p>
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
      <SignupForm />
    </>
  );
}

export default BlobbyStatistics;
