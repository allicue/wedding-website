import React from 'react';
import './Registry.css'

function Registry(props) {
  return (
    <div id='registry-page'>
      <header className='other-header'>
        <h2 className='header-title'>Registry</h2>
      </header>
      <body className='body-registry'>
        <h3 className='body-text'>For guests wishing to contribute, you can find our registry at the stores listed/linked below.</h3>
        <section className='registry-button-container'>
          <a target='_blank' rel="noreferrer" href="https://www.bloomingdales.com/registry/wedding/guest/ALLISON-QUIROZ-SHAWN-SMITH?registryId=7243101">
            <button className='registry-button'>BLOOMINGDALE'S</button>
          </a>

          <a target='_blank' rel="noreferrer" href="https://www.amazon.com/wedding/allison-quiroz-shawn-smith--october-2021/registry/1QJ5WILAIUBL5">
            <button className='registry-button'>AMAZON</button>
          </a>

          <a target='_blank' rel="noreferrer" href="https://www.crateandbarrel.com/gift-registry/guest/r6227363">
            <button className='registry-button'>CRATE & BARREL</button>
          </a>
        </section>
        <h3 className='body-text'>Thank you in advance!</h3>
      </body>
    </div>
  );
}

export default Registry;