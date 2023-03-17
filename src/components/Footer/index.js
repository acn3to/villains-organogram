import './Footer.css'

import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <section>
        <ul>
          <li>
            <a href="facebook.com" target="_blank">
              <img src="/images/facebook.png" alt="" />
            </a>
          </li>
          <li>
            <a href="twitter.com" target="_blank">
              <img src="/images/twitter.png" alt="" />
            </a>
          </li>
          <li>
            <a href="instagram.com" target="_blank">
              <img src="/images/instagram.png" alt="" />
            </a>
          </li>
        </ul>
      </section>
      <section>
        <img src="/images/freeza.png" alt="" width={'80px'} />
      </section>
      <section>
        <p>
          Desenvolvido por{' '}
          <a href="https://github.com/acn3to" target="_blank" rel="noreferrer">
            @acn3to
          </a>
        </p>
      </section>
    </footer>
  )
}

export default Footer
