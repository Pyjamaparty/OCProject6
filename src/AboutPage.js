import React from 'react';
import arrow_up from './resources/images/arrow_up.png';

const AboutPage = () => {
    const handleFiabilityArrowClick = () => {
        const arrowFiab = document.getElementById("fiability-arrow");
        const fiabilityText = document.getElementById('fiability-text');

        if (arrowFiab.classList.contains("rotate-down")) {
            fiabilityText.classList.remove("visible");
            arrowFiab.classList.remove("rotate-down");
            arrowFiab.classList.add("rotate-up");
        } else {
            fiabilityText.classList.add("visible");
            arrowFiab.classList.add("rotate-down");
            arrowFiab.classList.remove("rotate-up");
        }
    };

    const handleRespectArrowClick = () => {
        const arrowResp = document.getElementById("respect-arrow");
        const respectText = document.getElementById('respect-text');

        if (arrowResp.classList.contains("rotate-down")) {            
            respectText.classList.remove("visible");
            arrowResp.classList.remove("rotate-down");
            arrowResp.classList.add("rotate-up");
        } else {
            respectText.classList.add("visible");
            arrowResp.classList.add("rotate-down");
            arrowResp.classList.remove("rotate-up");
        }
    };

    const handleServiceArrowClick = () => {
        const arrowServ = document.getElementById("service-arrow");
        const serviceText = document.getElementById('service-text');

        if (arrowServ.classList.contains("rotate-down")) {
            serviceText.classList.remove("visible");
            arrowServ.classList.remove("rotate-down");
            arrowServ.classList.add("rotate-up");
        } else {
            serviceText.classList.add("visible");
            arrowServ.classList.add("rotate-down");
            arrowServ.classList.remove("rotate-up");
        }
    };

    const handleSecurityArrowClick = () => {
        const arrowSecurity = document.getElementById("security-arrow");
        const securityText = document.getElementById('security-text');

        if (arrowSecurity.classList.contains("rotate-down")) {
            securityText.classList.remove("visible");
            arrowSecurity.classList.remove("rotate-down");
            arrowSecurity.classList.add("rotate-up");
        } else {
            securityText.classList.add("visible");
            arrowSecurity.classList.add("rotate-down");
            arrowSecurity.classList.remove("rotate-up");
        }
    };

    return (
        <div className="padding-sides">
            <div id="intro-about">
            </div>
            <div className='about'>
                <div className='div-about'>
                    <p>Fiabilité</p>
                    <img src={arrow_up} alt='' id='fiability-arrow' className="arrow rotate-up" onClick={handleFiabilityArrowClick} />
                </div>
                <p id="fiability-text" className='drop-down-text about-text'>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>

                <div className='div-about'>
                    <p>Respect</p>
                    <img src={arrow_up} alt='' id='respect-arrow' className="arrow rotate-up" onClick={handleRespectArrowClick} />
                </div>
                <p id="respect-text" className='drop-down-text about-text'>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                <div className='div-about'>
                    <p>Service</p>
                    <img src={arrow_up} alt='' id='service-arrow' className="arrow rotate-up" onClick={handleServiceArrowClick} />
                </div>
                <p id="service-text" className='drop-down-text about-text'>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                <div className='div-about'>
                    <p>Sécurité</p>
                    <img src={arrow_up} alt='' id='security-arrow' className="arrow rotate-up" onClick={handleSecurityArrowClick} />
                </div>
                <p id="security-text" className='drop-down-text about-text'>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
            </div>
        </div>
    );
}

export default AboutPage;
