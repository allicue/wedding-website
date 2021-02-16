import React from 'react';
import './FAQ.css'

function FAQ(props) {
  return (
    <div>
      <header className='other-header'>
          <h2 className='header-title'>FAQ</h2>
      </header>
      <body className='body-faq'>
        <ul>
          <li>Can I bring my kids to the wedding?</li>
          <li>Unfortunetly due to budget and COVID restrictions, we respectfully request no children 17 or under at the wedding. We hope you understand and are still able to make it!</li>
        </ul>

        <ul>
          <li>Is parking available?</li>
          <li>Yes, parking is available by entering on Lincoln Road and Ocean Avenue. Click here for a map to see where parking is located.</li>
        </ul>

        <ul>
          <li>What is the dress code?</li>
          <li>Cocktail attire. For men, that means a suit and tie and for women, a nice dress or dressy pantsuit/jumpsuit.</li>
        </ul>

        <ul>
          <li>How are you planning for COVID?</li>
          <li>Based off current NY wedding guidelines, all guests will be required to bring a negative COVID test taken within two days of the wedding.
              Guests will also be required to wear a mask when not eating or drinking. </li>
        </ul>

        <ul>
          <li>Where can I take a COVID test?</li>
          <li>To find a testing location near you in NYC, <a href="https://www1.nyc.gov/site/coronavirus/get-tested/covid-19-testing.page" >click here</a> and follow the prompts.</li>
        </ul>
      </body>
    </div>
  );
}

export default FAQ;