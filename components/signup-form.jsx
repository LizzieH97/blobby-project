import { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // Import useNavigate

function SignupForm() {
  const [name, setName] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [message, setMessage] = useState("");
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

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    console.log(name);
    console.log(message);
    console.log(isChecked ? "Checkbox is checked" : "Checkbox is not checked");

    // Navigate to the appropriate route based on the checkbox state
    if (isChecked) {
      navigate("/ticked-return"); // Navigate to TickedReturn route
    } else {
      navigate("/unticked-return"); // Navigate to UntickedReturn route
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
        />
        <label htmlFor="message">Message: </label>
        <input
          type="text"
          className="signup-label"
          id="message"
          value={message}
          onChange={onMessageChange}
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
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default SignupForm;
