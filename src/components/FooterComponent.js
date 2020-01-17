import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <footer className="page-footer">
            <div className="container text-center pt-3">
                <div className="row">             
                    <div className="col-md-4 mt-md-0 mt-3">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to='/home'>Home</Link></li>
                            <li><Link to='/directory'>Directory</Link></li>
                            <li><Link to='/aboutus'>About</Link></li>
                            <li><Link to='/contactus'>Contact</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-4 mt-md-0 mt-3">
                        <h5>Social</h5>
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube" /></a> 
                    </div>

                    <hr className="w-100 d-md-none pb-3" />

                    <div className="col-md-4 mb-md-0 mb-3">
                        <a role="button" className="btn btn-link" href="tel:+18325551234"><i className="fa fa-phone" /> 1-832-555-1234</a><br />
                        <a role="button" className="btn btn-link" href="mailto:admin@notreal.com"><i className="fa fa-envelope-o" /> hello@healthystepscafe.com</a>
                    </div>
                </div>
            </div>
            <div className="footer-copyright text-center py-3">© 2019 Copyright:
          <a href="#"> HealthyStepsCafe.com</a>
        </div>
        </footer>
    )
}

export default Footer;