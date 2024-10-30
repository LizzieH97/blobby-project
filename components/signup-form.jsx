import { useState } from "react";

function SignupForm() {
  function submitFunction() {
    alert("thank you for your sacrifice");
  }
  const [name, setName] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const onChange = (event) => {
    event.preventDefault();
    setName(event.target.value);
    console.log(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onChange(event);
  };

  return (
    <>
      <form id="signup-form">
        <h3>Sign the Blobby visitor log!!!</h3>
        <label htmlFor="firstName">Name: </label>
        <input
          type="text"
          className="signup-label"
          id="firstName"
          onChange={onChange}
        ></input>
        <label htmlFor="permissionCheckbox">
          By checking this box I hereby pledge my firstborn child to Mr Blobby
        </label>
        <input
          type="checkbox"
          className="signup-label"
          id="permissionCheckbox"
          checked={isChecked}
          onChange={onChange}
        ></input>
        <button type="submit" onSubmit={handleSubmit} value={name}>
          Submit
        </button>
      </form>
    </>
  );
}
export default SignupForm;
