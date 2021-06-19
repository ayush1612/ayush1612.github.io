import React from 'react';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import tech from "./data/techstack.json";

const Technologies = () => {



    return (
        <div className="technologies">
            <div className="tech-container">
            {
                tech?.map((each) => (
                    <div className="each-tech-container">
                    <div className="each-tech-icon">
                        <img src={each.image}
                         height="140"
                         alt={each.name}/>
                    </div>
                    <div className="each-tech-name">
                        {each.name}
                    </div>
                    <Progress className="tech-progress-bar" percent={each.confidence} />
                </div>
                ))
            }                

            </div>
            
        </div>
    );
};

export default Technologies;