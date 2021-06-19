import React from 'react';
import experience from './data/experience.json';
import Card from './Card';


const Experience = () => {
    return (
        <div className="experience">
            <div className="experience-content">
            { experience?.map((each) => (
                <Card data={each}/>
            ))}

            </div>
        </div>
    );
};

export default Experience;