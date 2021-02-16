import React, { useState } from 'react';
import axios from "axios";

function RsvpPage(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [rsvp, setRsvp] = useState("");
  const [othersInParty, setOthersInParty] = useState("");
  const [foodRestrictions, setFoodRestrictions] = useState("");
  const [questionsComments, setQuestionsComments] = useState("")



  //ADD ITEM TO DATABASE
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
  };


  return (
    <div>
      <header className='other-header'>
          <h2 className='header-title'>RSVP</h2>
      </header>
      <body>

      <form className="rsvp-form" onSubmit={handleSubmit} >
            <label htmlFor="firstName">First Name:</label>
            <input
              name="firstName"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor="lastName">Last Name:</label>
            <input
              name="lastName"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor="email">Email:</label>
            <input
              name="email"
              type="text"
              placeholder="Please provide an email from someone in your party for event updates."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="rsvp">RSVP:</label>
              <select name="rsvp" id='rsvp' defaultValue='default' onChange={(e) => setRsvp(e.target.value)}>
              <option value="default">--Select Response--</option>
              <option value="yes">Yes, I will be attending</option>
                <option value="no">Regrets, I will not be attending</option>
              </select>
            
            <label htmlFor="othersInParty">Guests In Party Also Attending:</label>
            <input
              name="othersInParty"
              type="text"
              placeholder="Please provide full names of others in your party attending."
              value={othersInParty}
              onChange={(e) => setOthersInParty(e.target.value)}
            />
            
            <label htmlFor="foodRestrictions">Any food allergies?</label>
                <input
                  name="foodRestrictions"
                  type="text"
                  placeholder="Please provide full names of others in your party attending."
                  value={foodRestrictions}
                  onChange={(e) => setFoodRestrictions(e.target.value)}
        />
        
        <label htmlFor="questionsComments">Questions/Comments?</label>
                <input
                  name="questionsComments"
                  type="text"
                  placeholder="Please provide full names of others in your party attending."
                  value={questionsComments}
                  onChange={(e) => setQuestionsComments(e.target.value)}
                />

            <button className="submit-button" type="submit">Submit RSVP</button>
        </form>
        </body>

    </div>
  );
}

export default RsvpPage;