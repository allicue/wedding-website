import React from 'react';
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
        <p className="FAQ-subtitle">*IMPORTANT NOTE*</p>
        <p className='FAQ-body-text'>Currently per New York State guidelines, <span id='covid-policy'>all guests are required to complete a
        contact tracing form as well as submit proof of a vaccination card (2nd dose must be completed
        2 weeks prior to October 1st), a negative PCR test within 72 hours, or a negative rapid test within 6 hours from
        the start of the event and continue to wear a mask while not eating or drinking. </span> 
        Please continue to check back here for any updates as we get closer to the date!
          </p>
        
        <p className="FAQ-subtitle">FAQ</p>
        <ul>
          <li className='question'>Can I bring my children to the wedding?</li>
          <li className='answer'>Unfortunetly due to venue and COVID restrictions, we are only able to invite children in our immediate
          families who are 13 and over to the wedding. We hope you understand and are still able to make it!</li>
        </ul>
        <ul>
          <li className='question'>Can I bring guests/ +1's not noted on my invitation?</li>
          <li className='answer'>We are only able to accommodate guests formally listed on
          the RSVP card you received due to limited capacity.</li>
        </ul>
        <ul>
          <li className='question'>Is parking available?</li>
          <li className='answer'>Yes, limited parking is available by entering the park on Willink Drive.
          Click <a className='random-links' rel="noreferrer" target='_blank' href={Map}>here</a> for a map to see where the parking lot is located.
          If the lot is full, street parking is available right outside Prospect Park on Ocean Avenue.</li>
        </ul>

        <ul>
          <li className='question'>Is there a dress code?</li>
          <li className='answer'>Yes! Please come wearing cocktail attire. For men, that means a suit and tie, and for women, a nice dress
          (can be maxi, midi or knee length) or an elevated chic pantsuit/jumpsuit. Feel free to wear any color you'd like (other than white)
          and no jeans or sneakers please!</li>
        </ul>

        <ul>
          <li className='question'>Where can I take a COVID test?</li>
          <li className='answer'>To find a testing location near you in NYC,
          click<a className='random-links' target='_blank' rel="noreferrer" href="https://www1.nyc.gov/site/coronavirus/get-tested/covid-19-testing.page"> here</a>
          and follow the prompts.</li>
        </ul>

        <hr className='line-break'></hr>
        <p className='question contact-form-blurb'>Didn't see your question above? Submit the form below and someone will get back to you soon!</p>
        <ContactForm></ContactForm>
      </body>
    </div>
  );
}

export default FAQ;