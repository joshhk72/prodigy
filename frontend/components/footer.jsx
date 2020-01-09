import React from 'react';


const Footer = props => {
  return (
    <footer id="page-footer">
      <div>
        <div id="footer-col-1">
          <p>
            Prodigy is a web app based on <span>the popular lyrics annotation site</span> Genius.
          </p>
          <div id="footer-links">
            <a href="https://github.com/joshhk72/">
              <i className="fab fa-github" />
            </a>
            <a href="https://www.linkedin.com/in/joshhk72/">
              <i className="fab fa-linkedin" />
            </a>
          </div>
        </div>
        <div id="footer-col-2">
          <p>
            Highlight lyrics to start annotating!
          </p>
          <p>
            Prodigy is built with a React/Redux front-end and Ruby on Rails back-end.
          </p>
        </div>
      </div>
    </footer>
  )
};

export default Footer;