import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { addComment } from "./api-calls"; // Make sure you import addComment correctly

function SignupForm() {
  const [name, setName] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // Track submitting state
  const [error, setError] = useState(null); // Track any errors
  const navigate = useNavigate();

  const onNameChange = (event) => {
    setName(event.target.value);
  };

  const onMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const onCheckChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    // Basic form validation
    if (!name || !message) {
      setError("Both name and message are required.");
      return;
    }

    setIsSubmitting(true); // Set submitting state to true while the comment is being submitted
    setError(null); // Reset error state

    try {
      // Wait for the comment to be added to Supabase
      await addComment(name, message);

      // Redirect to the appropriate page after submission
      if (isChecked) {
        navigate("/ticked-return"); // Navigate to TickedReturn route if checkbox is checked
      } else {
        navigate("/unticked-return"); // Navigate to UntickedReturn route if checkbox is not checked
      }

      // Optionally clear form fields after submission
      setName("");
      setMessage("");
    } catch (err) {
      // Handle any errors that might occur during the comment submission
      setError("Failed to post your comment. Please try again.");
      console.error("Error posting comment:", err);
    } finally {
      setIsSubmitting(false); // Reset submitting state after completion
    }
  };

  return (
    <>
      <form id="signup-form" onSubmit={handleSubmit}>
        <h3>Sign the Blobby visitor log!!!</h3>
        <label htmlFor="firstName">Name: </label>
        <input
          type="text"
          className="signup-label"
          id="firstName"
          value={name}
          onChange={onNameChange}
          disabled={isSubmitting} // Disable input while submitting
        />
        <label htmlFor="message">Message: </label>
        <input
          type="text"
          className="signup-label"
          id="message"
          value={message}
          onChange={onMessageChange}
          disabled={isSubmitting} // Disable input while submitting
        />
        <label htmlFor="permissionCheckbox">
          By checking this box I hereby pledge my firstborn child to Mr. Blobby
        </label>
        <input
          type="checkbox"
          className="signup-label"
          id="permissionCheckbox"
          checked={isChecked}
          onChange={onCheckChange}
          disabled={isSubmitting} // Disable checkbox while submitting
        />
        {error && <p style={{ color: "red" }}>{error}</p>}{" "}
        {/* Show error message */}
        <button type="submit" disabled={isSubmitting} className="Btn">
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </>
  );
}

export default SignupForm;
