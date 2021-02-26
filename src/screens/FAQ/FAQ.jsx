import React from 'react';
import './FAQ.css';
import Map from '../../assets/BoathouseMap2png.png';
import ContactForm from '../../components/ContactForm/ContactForm'

function FAQ(props) {
  return (
    <div id='faq-page'>
      <header className='other-header'>
          <h2 className='header-title'>FAQ</h2>
      </header>
      <body id='body-faq'>
        <ul>
          <li className='question'>Can I bring my kids to the wedding?</li>
          <li className='answer'>Unfortunetly due to budget and COVID restrictions, we respectfully request no children 17 or under attend the wedding. We hope you understand and are still able to make it!</li>
        </ul>

        <ul>
          <li className='question'>Is parking available?</li>
          <li className='answer'>Yes, limited parking is available by entering on Lincoln Road and Ocean Avenue. Click <a className='random-links' rel="noreferrer" target='_blank' href={Map}>here</a> for a map to see where the parking lot is located.</li>
        </ul>

        <ul>
          <li className='question'>What is the dress code?</li>
          <li className='answer'>Cocktail attire. For men, that means a suit and tie and for women, a nice dress or dressy pantsuit/jumpsuit.</li>
        </ul>

        <ul>
          <li className='question'>How are you planning for COVID?</li>
          <li className='answer'>To ensure the safety of our guests and vendors, we are following current NYS event guidelines requiring that <b>all guests 
              must bring a negative COVID test (PCR or antigen) taken within 72 hours of the wedding</b> and wear a mask while not eating or drinking. To see 
              more information on New York guidelines, click <a className='random-links' rel="noreferrer" target='_blank'
              href='https://www.governor.ny.gov/sites/governor.ny.gov/files/atoms/files/Indoor_and_Outdoor_Food_Services_Detailed_Guidelines.pdf'>here</a>.
          </li>
        </ul>

        <ul>
          <li className='question'>Where can I take a COVID test?</li>
          <li className='answer'>To find a testing location near you in NYC, click<a className='random-links' target='_blank' rel="noreferrer" href="https://www1.nyc.gov/site/coronavirus/get-tested/covid-19-testing.page"> here</a> and follow the prompts.</li>
        </ul>

        <hr className='line-break'></hr>
        <p className='question contact-form-blurb'>Didn't see your question above? Submit the form below and someone will get back to you soon!</p>
        <ContactForm></ContactForm>
      </body>
    </div>
  );
}

export default FAQ;