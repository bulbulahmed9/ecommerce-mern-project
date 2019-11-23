import React, { Fragment } from "react";
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <Fragment>
      <footer id="footer" className="footer">
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-md-4 text-center">
                <h3>Location</h3>
                <p>
                  3481 Melrose Place <br />
                  Beverly Hills, CA 90210
                </p>
              </div>
              <div className="col-md-4 text-center">
                <h3>Share with love</h3>
                <div className="icon">
                  <Link>
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link>
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
                  <Link>
                    <i className="fab fa-twitter"></i>
                  </Link>
                </div>
              </div>
              <div className="col-md-4 text-center">
                <h3>About Ecommerce</h3>
                <p>
                  Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                  Donec ullamcorper nulla non metus auctor fringilla.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="f-bottom text-center">
          <div className="container">
            <h4>Copyright &copy; 2019 Ecommerce. All Rights Reserved </h4>
            <p>
              Made With <i className="fas fa-heart"></i> By{" "}
              <span className="author">Bulbul Ahmed</span>
            </p>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
