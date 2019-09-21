/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <div className='container footer-container'>
            <footer>
                <div className='social-media-container'>
                    <hr className='footer-line'/>
                    <a href='https://www.facebook.com/anmol.rattan.9' className='fab fa-facebook fa-2x' target="_blank"><span>Link to Anmol's Facebook page.</span></a>
                    <a href='https://www.instagram.com/_anmolrattan_/' className='fab fa-instagram fa-2x' target="_blank"><span>Link to Anmol's Instagram page.</span></a>
                    <a href='https://www.linkedin.com/in/anmolrattan23/' className='fab fa-linkedin-in fa-2x' target="_blank"><span>Link to Anmol's LinkedIn page.</span></a>
                    <a href='https://github.com/arsrattan' className='fab fa-github fa-2x' target="_blank"><span>Link to Anmol's GitHub page.</span></a>
                    <a href='https://www.hackerrank.com/arsrattan' className='fab fa-hackerrank fa-2x' target="_blank"><span>Link to Anmol's HackerRank page.</span></a>
                </div>
            </footer>
            </div>
        )
    }
}

export default Footer;