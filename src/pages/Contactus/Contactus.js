import React from 'react';
import { SocialIcon } from 'react-social-icons';
import {
    faMailchimp,
    faFacebook,
    faWhatsapp,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Contactus.scss";
const Contactus = () => {

    return (
        <div className='follow-us'>
 
            <div className='follow'>
                {/* <h3>Follow us on</h3> */}
            <a href="https://www.facebook.com/learnbuildteach/"
                className="facebook social" target="_blank">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://wa.me/6360440582/"
                className="whatsapp social" target="_blank">
                <FontAwesomeIcon icon={faWhatsapp} size="2x" />
            </a>
            <a href="https://instagram.com/aptavargainteriors?igshid=YmMyMTA2M2Y="
                className="instagram social" target="_blank">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            </div>
           
            <a href="tel:+91 6360440582">
            <FontAwesomeIcon icon="fas fa-phone-alt" size="2x" />
            </a>
                    </div>

    )

};
export default Contactus;