import SignupForm from "./signup-form";

function FirstParagraph() {
  return (
    <>
      <div className="first-paragraph">
        <p>Hello Blobby lovers!!!</p>
        <p>
          Welcome to this non-official Mr Blobby fanpage! This the best website
          for all of your Blobby needs.
          <br />
          Mr Blobby was originally featured on the British show called Noel's
          House Party (BBC). Created by Charlie Adams, a writer for the show, Mr
          Blobby is a ridiulous pink figure who has many large yellow spots,
          with a horrific smile and haunting green jiggling eyes. Mr Blobby can
          only say the word "blobby" in an electronically altered voice, but
          this does not stop him from conveying varying levels of rage through
          his intonations. Somehow he topped the UK Singles Chart in 1999 with a
          Christmas song simply called "Mr Blobby".
        </p>
      </div>
      <SignupForm />
    </>
  );
}

export default FirstParagraph;
