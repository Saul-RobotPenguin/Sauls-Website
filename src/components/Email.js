import * as React from "react";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Email = (props) => {
  const form = useRef();
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [messageInput, setMessageInput] = useState("");

  function emptyInputsOnSend() {
    setNameInput("");
    setEmailInput("");
    setMessageInput("");
  }

  const handleNameChange = (e) => {
    setNameInput(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmailInput(e.target.value);
  };
  const handleMessageChange = (e) => {
    setMessageInput(e.target.value);
  };

  function hideSuccessElement() {
    document.getElementById("success").style.display = "none";
  }
  function hideErrorElement() {
    document.getElementById("error").style.display = "none";
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_SERVICE,
        props.emailTemplate,
        form.current,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          document.getElementById("success").style.display = "block";
          setTimeout(hideSuccessElement, 5000);
          emptyInputsOnSend();
        },
        (error) => {
          console.log(error.text);
          document.getElementById("error").style.display = "block";
          setTimeout(hideErrorElement, 5000);
          emptyInputsOnSend();
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div id="success" class="alert alert-success" role="alert">
        {props.success}
      </div>

      <div id="error" class="alert alert-danger" role="alert">
        {props.error}
      </div>

      <input
        type="text"
        name="user_name"
        className="feedback-input"
        placeholder={props.namePlaceholder}
        value={nameInput}
        onChange={handleNameChange}
      />
      <input
        type="email"
        name="user_email"
        className="feedback-input"
        placeholder={props.emailPlaceholder}
        value={emailInput}
        onChange={handleEmailChange}
      />
      <textarea
        name="message"
        className="feedback-input"
        placeholder={props.messagePlaceholder}
        value={messageInput}
        onChange={handleMessageChange}
      />

      <input type="submit" value="Send" />
    </form>
  );
};

export default Email;
