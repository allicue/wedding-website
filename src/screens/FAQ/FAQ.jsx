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
          Currently per New York State guidelines, <span id='covid-policy'> guests are no longer required to submit proof of vaccination
            or a negative COVID test</span> to attend an in-person event.

          Please continue to check back here for any updates as we get closer to the date!
          {/* Currently per New York State guidelines, <span id='covid-policy'>all guests are required to complete a
        contact tracing form as well as submit proof of a vaccination card (2nd dose must be completed
        2 weeks prior to October 1st), a negative PCR test within 72 hours, or a negative rapid test within 6 hours from
        the start of the event and continue to wear a mask while not eating or drinking. </span> 
        Please continue to check back here for any updates as we get closer to the date! */}
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

        {/* <ul>
          <li className='question'>Where can I take a COVID test?</li>
          <li className='answer'>To find a testing location near you in NYC,
          click<a className='random-links' target='_blank' rel="noreferrer" href="https://www1.nyc.gov/site/coronavirus/get-tested/covid-19-testing.page"> here </a>
          and follow the prompts.</li>
        </ul> */}

        <hr className='line-break'></hr>
        <p className='question contact-form-blurb'>Didn't see your question above? Submit the form below and someone will get back to you soon!</p>
        <ContactForm></ContactForm>
      </body>
    </div>
  );
}

export default FAQ;