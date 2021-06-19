import React from 'react';


const Card = ({data}) => {
    return(
        <div className="card-container">
            <div className="card-title">
                {data.name}
            </div>
            <div className="card">
                    
                <div className="card-content">
                    <div className="card-image">
                        <img src={data.image} alt="company" height="160"/>
                    </div>
                    <div className="card-body">
                        <div className="card-body-description">
                            <div className="experience-profile">
                                <div className="experience-profile-key">
                                    Profile:
                                    <span className="experience-profile-value">
                                        {data.profile}
                                    </span>
                                </div>
                            </div>
                            <div className="experience-duration">
                                <div className="experience-duration-key">
                                    Duration:
                                    <span className="experience-duration-value">
                                        {data.duration}
                                    </span>
                                </div>

                            </div>
                            <div className="experience-description">
                                <div className="experience-description-key">
                                    Description:
                                </div>
                                <div className="experience-description-value">
                                    {data.description}

                                </div>
                            </div>
                        </div>
                        <div className="card-body-tech">
                            <div className="tech-stack-key">
                                Tech Stack
                            </div>
                            <div className="tech-stack-list">
                                <ul className="tech-stack-list-key">

                                {(data.tech).map((each) => (
                                    <li>{each}</li>
                                ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;