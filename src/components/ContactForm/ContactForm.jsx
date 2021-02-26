import React from "react";
import './ContactForm.css';

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form
        className='random-question-form'
        onSubmit={this.submitForm}
        action="https://formspree.io/f/mgepjvny"
        method="POST"
      >
       
        <label>Your Email:</label>
        <input className='random-questions-input' type="email" name="email" />
        <label>Message:</label>
        <textarea className='random-questions-input question-message-box' name="message" cols="40" rows="5"></textarea>
        {/* <input className='random-questions-input question-message-box' type="text" name="message" /> */}
        {status === "SUCCESS" ? <p>Thanks for submitting your question. The bride or groom will get back to you shortly!</p> : <button className='questions-button'>SUBMIT</button>}
        {status === "ERROR" && <p>Ooops! There was an error. Please email <b>allisonquiroz89@gmail.com</b> with your question.</p>}
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}