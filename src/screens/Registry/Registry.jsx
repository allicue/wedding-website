import React from 'react';
import './Registry.css'

function Registry(props) {
  return (
    <div id='registry-page'>
      <header className='other-header'>
        <h2 className='header-title'>Registry</h2>
      </header>
      <body className='body-registry'>
        <h3 className='body-text'>
          After spending nearly 9 years together, we are fortunate enough to already have most of what we need! However, for those who have expressed an interest
          in giving a gift, you can find our registries linked below or make a monetary contribution towards our honeymood fund/savings at our reception. Thank you in advance!</h3>
        
        <section className='registry-button-container'>
          <a target='_blank' rel="noreferrer" href="https://www.bloomingdales.com/registry/wedding/guest/ALLISON-QUIROZ-SHAWN-SMITH?registryId=7243101">
            <button className='registry-button'>BLOOMINGDALE'S</button>
          </a>

          <a target='_blank' rel="noreferrer" href="https://www.crateandbarrel.com/gift-registry/guest/r6227363">
            <button className='registry-button'>CRATE & BARREL</button>
          </a>
        </section>
      </body>
    </div>
  );
}

export default Registry;