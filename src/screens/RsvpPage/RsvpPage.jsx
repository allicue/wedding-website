import React, { useState } from "react";
import './RsvpPage.css';
import axios from 'axios';

function RsvpPage(props) {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [rsvp, setRsvp] = useState("");
  const [othersInParty, setOthersInParty] = useState("");
  const [foodRestrictions, setFoodRestrictions] = useState("");
  const [questionsComments, setQuestionsComments] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      firstName,
      lastName,
      email,
      rsvp,
      othersInParty,
      foodRestrictions,
      questionsComments,
    };
  
    const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/rsvp-list`;
    await axios.post(
      airtableURL,
      { fields },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      }
    );
      
    setFirstName("");
    setLastName("");
    setEmail("");
    setRsvp("");
    setOthersInParty("");
    setFoodRestrictions("");
    setQuestionsComments("");

    alert("Thank you for your RSVP!");

  }
      
    return (
      <div>
        <header className='other-header'>
          <h2 className='header-title'>RSVP</h2>
        </header>
     
        <section className='rsvp-body'>
          <h3 className='body-text'>Please fill out the form below by September 1st.</h3>

          <form className="rsvp-form" onSubmit={handleSubmit} >
            <label className='rsvp-label' htmlFor="firstName">First Name:*</label>
            <input
              className='rsvp-input'
              required
              name="firstName"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label className='rsvp-label' htmlFor="lastName">Last Name:*</label>
            <input
              className='rsvp-input'
              required
              name="lastName"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label className='rsvp-label' htmlFor="email">Email:*</label>
            <input
              className='rsvp-input'
              required
              name="email"
              type="text"
              placeholder="Please provide an email from one person in your party for event updates/reminders."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className='rsvp-label' htmlFor="rsvp">Will you be attending?*</label>
            <select className='rsvp-input' name="rsvp" id='rsvp' defaultValue='default' onChange={(e) => setRsvp(e.target.value)}>
              <option disabled value="default">--Select Response--</option>
              <option value="yes">Yes, I will be attending</option>
              <option value="no">Regrets, I will not be attending</option>
            </select>
            
            <label className='rsvp-label' htmlFor="othersInParty">Names of Guests in Your Party</label>
            <input
              className='rsvp-input'
              name="othersInParty"
              type="text"
              placeholder="Please provide full names"
              value={othersInParty}
              onChange={(e) => setOthersInParty(e.target.value)}
            />
            
            <label className='rsvp-label' htmlFor="foodRestrictions">Any Food Allergies or Restrictions?</label>
            <input
              className='rsvp-input'
              name="foodRestrictions"
              type="text"
              value={foodRestrictions}
              onChange={(e) => setFoodRestrictions(e.target.value)}
            />
        
            <label className='rsvp-label' htmlFor="questionsComments">Questions or Comments?</label>
            <input
              className='rsvp-input'
              name="questionsComments"
              type="text"
              placeholder="Ask a question or leave a note"
              value={questionsComments}
              onChange={(e) => setQuestionsComments(e.target.value)}
            />

            <button className='registry-button' type="submit">SUBMIT RSVP</button>
          </form>
        </section>

      </div>
    );
  }

  export default RsvpPage;