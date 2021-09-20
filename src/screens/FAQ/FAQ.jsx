import React from 'react';
import { Link } from 'react-router-dom';
import './FAQ.css';
import Map from '../../assets/BoathouseMap2png.png';
import ContactForm from '../../components/ContactForm/ContactForm'

function FAQ(props) {
  return (
    <div id='faq-page'>
      <header className='other-header'>
          <h2 className='header-title faq-header-title'>Frequently Asked Questions & Coronavirus Updates</h2>
      </header>
      <body id='body-faq'>
        <p className="FAQ-subtitle">*COVID-19 NOTE*</p>
        <p className='FAQ-body-text'>
          Currently per New York City guidelines, <span id='covid-policy'> all guests must have at least one dose of the COVID-19 vaccine and provide
          proof </span> to attend an event. If you haven't already, please fill out the following form <a className='random-links' rel="noreferrer"
          target='_blank' href="https://docs.google.com/forms/d/1ybpg58byTnFYVXgSwVGRUoWlNdEb_zAl8G4yJx-Arv8/viewform?edit_requested=true">here </a>
          where you can upload your vaccination documents for us to send to the venue. Please make sure you and everyone in your party has filled it
          out. If you decide you are not getting vaccinated, kindly RSVP and let us know that you are no longer able to attend. Thank you!
        </p>
        
        <p className="FAQ-subtitle">FAQ</p>
        <ul>
          <li className='question'>Can I bring my children to the wedding?</li>
          <li className='answer'>Unfortunetly due to venue and COVID restrictions, we are only able to invite children in our 
          families who are 13 and over to the wedding. We hope you understand and are still able to make it!</li>
        </ul>
        <ul>
          <li className='question'>Can I bring guests/ +1's not noted on my invitation?</li>
          <li className='answer'>We are only able to accommodate guests formally listed on
          the RSVP card received due to limited capacity.</li>
        </ul>
        <ul>
          <li className='question'>Is parking available?</li>
          <li className='answer'>Yes, limited parking is available by entering the park on Willink Drive.
            Please visit the <Link className='link random-links' to='/travel'>travel</Link> section of our wedding website for more specific directions or
            click <a className='random-links' rel="noreferrer" target='_blank' href={Map}>here</a> for a map to see where the parking lot is located.
            If the lot is full, street parking is available right outside Prospect Park on Ocean Avenue.</li>
        </ul>

        <ul>
          <li className='question'>Is there a dress code?</li>
          <li className='answer'>Yes! Please come wearing cocktail attire. For men, that means a suit and tie, and for women, a nice dress
          (can be maxi, midi or knee length) or an elevated chic pantsuit/jumpsuit. Feel free to wear any color you'd like (other than white)
          and no jeans or sneakers please!</li>
        </ul>

        <ul>
          <li className='question'>Do you have a hotel block for guests? Where do you recommend I stay?</li>
          <li className='answer'>We do not have a hotel block for guests coming out of state. We would recommend staying at a hotel or renting an Airbnb in Downtown Manhattan
            or in Brooklyn for ease of transportation to the venue. Some recommended hotels in the Brooklyn area include: New York Marriott at the Brooklyn Bridge, Williamsburg Hotel,
            Wythe Hotel, and The William Vale.</li>
        </ul>
  
        <ul>
          <li className='question'>Will the ceremony and reception be indoors or outdoors?</li>
          <li className='answer'>Weather permitting, the ceremony and cocktail hour will be held outdoors and dinner & dancing will be hosted inside the boathouse.</li>
        </ul>

        <ul>
          <li className='question'>Is the invitation time the actual start time?</li>
          <li className='answer'>Yes, it is. Please plan on getting to the venue about a half hour earlier to give yourself time to make your way through
            the park as we plan on starting the ceremony promptly at 6:00 PM.</li>
        </ul>

        <hr className='line-break'></hr>
        <p className='question contact-form-blurb'>Didn't see your question above? Submit the form below and someone will get back to you soon!</p>
        <ContactForm></ContactForm>
      </body>
    </div>
  );
}

export default FAQ;