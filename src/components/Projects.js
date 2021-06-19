import React from 'react';
import projectdata from "./data/projects.json";

const Projects = () => {

    function displayCard(each) {
        var root = document.getElementById("root")
        if(root.clientWidth < 1200){
            return;
        }
        var card = document.getElementById("project-detail-card");
        card.style.display = "block";
        var cardImage = document.getElementById("project-detail-card-image");
        var cardDesc = document.getElementById("project-detail-card-description");
        var cardTech = document.getElementById("project-detail-card-tech");
        // var cardImage = document.getElementsByClassName("project-detail-card-image");
        cardImage.src = each.image;
        cardDesc.innerText = each.description;
        cardTech.innerText = each.tech;
    }
    function hideCard() {
        var card = document.getElementById("project-detail-card");
        card.style.display = "none";
    } 
    return(
        <div className="projects">
            <div className="project-detail">
                <div id="project-detail-card">
                    <div className="project-detail-image-container">

                        <img src="" id="project-detail-card-image" 
                        alt="project" />
                    </div>
                    <div className="project-detail-card-data-container">

                        <div className="project-detail-card-desc-key">
                            Description: 
                            <span id="project-detail-card-description">
                            </span>
                        </div>
                        <div className="project-detail-card-tech-container">
                            Tech: <span id="project-detail-card-tech"></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project-container">
                
             { projectdata?.map((each) => (
                 <div className="each-project-container"
                 onMouseOver={() => displayCard(each)}
                 onMouseOut={hideCard} key={each.id}>
                <div className="each-project-image">
                    <img src={each.image} alt={each.title} height="200"/>
                </div>
                <div className="each-project-title">
                    {each.title}
                </div>
            </div>
             ))}    

            </div>
        </div>
    );
}

export default Projects;