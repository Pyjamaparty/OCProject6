import React, { Component } from 'react';
import './App.css';
import logements from './resources/json/logements.json';

class Home extends Component {
    addLocationToGallery(src, title, locationId) {
        const currentDiv = document.getElementById("gallery");
        const newFigure = document.createElement("figure");
        const newText = document.createElement("p");
        
        const link = document.createElement("a");
        link.href = `location?locationId=${locationId}`;
       
        newText.textContent = title;
        newFigure.setAttribute("locationId", locationId);
        newFigure.classList.add("article");
        newFigure.style.backgroundImage = `url(${src})`;
        newFigure.appendChild(newText); 
        link.appendChild(newFigure);
        currentDiv.appendChild(link);
    }

    componentDidMount() {
        logements.forEach(item => {
            const src = item.cover;
            const title = item.title;
            const locationId = item.id;
        
            this.addLocationToGallery(src, title, locationId);
        });
    }

    render() {
        return (
            <div className="padding-sides">
                <div id="intro">
                    <p>Chez vous, partout et ailleurs</p>
                </div>

                <div id="gallery">
                    {}
                </div>
            </div>
        );
    }
}


export default Home;
