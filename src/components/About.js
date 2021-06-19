import React from 'react';
import contactdata from "./data/contact.json";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const About = () => {

    return (

        <>

        <div className="row about-container p-4">

            <div className="about-header">
                <div className="about-header-title">
                    <p>I am a fourth year undergraduate studying in Ramaiah Institute of Technology, Bangalore.
                        I have been interning at Red Hat for the past 6 months as a Software Engineer for the GlusterFS team.
                        </p>
                </div>
                <div className="contact">
                <div className="contact-container">
                    
                    {contactdata?.map((each) => (
                        <div className="contact-icon">
                            <a href={each.url}>
                             <img src={each.image}
                             height="100"
                             alt="contactinfo"/>
                            </a>
                        </div>
                    ))}
            </div>           
            
                </div>
            </div>
        </div>
        </>
    );
};

export default About;