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
            Prodigy was built to expand and demonstrate my skills as a web developer.
          </p>
          <p>
            Built with a React/Redux front-end and Rails back-end, Prodigy provides <span>a dynamic resource for
            users to manage a</span> knowledge base of song lyrics and annotations.
          </p>
        </div>
      </div>
    </footer>
  )
};

export default Footer;