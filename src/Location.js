import React, { useEffect } from 'react';
import activeStar from './resources/images/star-active.png';
import inactiveStar from './resources/images/star-inactive.png';
import arrow_up from './resources/images/arrow_up.png';
import arrow_back from './resources/images/arrow_back.png';
import arrow_forward from './resources/images/arrow_forward.png';
import logements from './resources/json/logements.json';
import { useNavigate } from 'react-router-dom';

const LocationPage = () => {
    const navigate = useNavigate();

    const searchParams = new URLSearchParams(window.location.search);
    const id = searchParams.get('locationId');

    const location = logements.find(item => item.id === id);

    console.log(1);
    useEffect(() => {
        console.log(2);
        if (location === undefined) {
            console.log(3);
            navigate('/error'); 
        }
        console.log(4);
    }, [location, navigate]);

    console.log(5);
    const src = location.pictures;
    let currentImageNumber = 1;
    const title = location.title;
    const tags = location.tags;
    const tagsElements = tags.map((tag, index) => (
        <div key={index} className='tag'>
            <p>{tag}</p>
        </div>
    ));

    const equipments = location.equipments;
    const equipmentItems = equipments.map((equipment, index) => (
        <p key={index}>{equipment}</p>
    ));

    const description = location.description;
    const name = location.host.name;
    const names = name.split(" ");
    const profilepicture = location.host.picture;
    const place = location.location;

    const rating = location.rating;
    let stars = [];
    for (let i = 0; i < rating; i++) {
        stars.push(<img key={i} src={activeStar} alt='active' />);
    }

    for (let i = rating; i < 5; i++) {
        stars.push(<img key={i} src={inactiveStar} alt='inactive' />);
    }

    /* event listener on the arrows to change the displayed image */
    let currentIndex = 0;
    useEffect(() => {
        const imageCounterText = document.getElementById('image-counter-text');
        const imageContainer = document.querySelector('.location-img');
        const backArrow = document.getElementById('back-arrow');
        const forwardArrow = document.getElementById('forward-arrow');

        const handleBackArrowClick = () => {
            currentIndex = (currentIndex - 1 + src.length) % src.length;
            imageContainer.style.backgroundImage = `url('${src[currentIndex]}')`;
            const currentImageNumber = currentIndex + 1;
            imageCounterText.textContent = `${currentImageNumber}/${src.length}`;
        };

        const handleForwardArrowClick = () => {
            currentIndex = (currentIndex + 1) % src.length;
            imageContainer.style.backgroundImage = `url('${src[currentIndex]}')`;
            const currentImageNumber = currentIndex + 1;
            imageCounterText.textContent = `${currentImageNumber}/${src.length}`;
        };
        
        /* hide arrows if there is only 1 picture. Test with locationId = 2139a317 */
        if (src.length === 1) {
            backArrow.style.display = 'none';
            forwardArrow.style.display = 'none';
        } else {
            backArrow.style.display = 'block';
            forwardArrow.style.display = 'block';
        }

        backArrow.addEventListener('click', handleBackArrowClick);
        forwardArrow.addEventListener('click', handleForwardArrowClick);

        return () => {
            backArrow.removeEventListener('click', handleBackArrowClick);
            forwardArrow.removeEventListener('click', handleForwardArrowClick);
        };
    }, [src]);

    /* rotate the arrow & open paragraph depending on the class it has */
    const handleDescArrowClick = () => {
        const arrowDesc = document.getElementById("description-arrow");
        const arrowEq = document.getElementById("equipments-arrow");
        const descriptionText = document.getElementById('description-text');
        const eqText = document.getElementById('equipments-text');
        const mainContent = document.getElementsByTagName('main')[0];

        if (arrowDesc.classList.contains("rotate-down")) {
            descriptionText.classList.remove("visible");
            arrowDesc.classList.remove("rotate-down");
            arrowDesc.classList.add("rotate-up");

            if (arrowEq.classList.contains("rotate-up")) {
                mainContent.style.paddingBottom = "0px";
            }else{
                mainContent.style.paddingBottom = `${eqText.scrollHeight}px`;
            }
        } else {
            descriptionText.classList.add("visible");
            arrowDesc.classList.add("rotate-down");
            arrowDesc.classList.remove("rotate-up");

            const textHeight = Math.max(descriptionText.scrollHeight, eqText.scrollHeight);

            mainContent.style.paddingBottom = `${textHeight}px`;
        }
    };

    const handleEqArrowClick = () => {
        const arrowDesc = document.getElementById("description-arrow");
        const arrowEq = document.getElementById("equipments-arrow");
        const eqText = document.getElementById('equipments-text');
        const descriptionText = document.getElementById('description-text');
        const mainContent = document.getElementsByTagName('main')[0];

        if (arrowEq.classList.contains("rotate-down")) {
            eqText.classList.remove("visible");
            arrowEq.classList.remove("rotate-down");
            arrowEq.classList.add("rotate-up");

            if (arrowDesc.classList.contains("rotate-up")) {
                mainContent.style.paddingBottom = "0px";
            }else{
                mainContent.style.paddingBottom = `${descriptionText.scrollHeight}px`;
            }
        } else {
            eqText.classList.add("visible");
            arrowEq.classList.add("rotate-down");
            arrowEq.classList.remove("rotate-up");

            const textHeight = Math.max(descriptionText.scrollHeight, eqText.scrollHeight);

            mainContent.style.paddingBottom = `${textHeight}px`;
        }
    };

    return (
        <div className='padding-sides'>
            <div className='vertical-container'>
                <div className='location-img' style={{ backgroundImage: `url(${src[0]})` }}>
                    <img src={arrow_back} alt='' id='back-arrow' />
                    <p id="image-counter-text">{currentImageNumber}/{src.length}</p>
                    <img src={arrow_forward} alt='' id='forward-arrow' />
                </div>
                <div className='location-details'>
                    <div className='title-and-location'>
                        <h2>{title}</h2>
                        <p>{place}</p>
                    </div>
                    <div className='first-and-last-names'>
                        <p className='name'>
                            {names[0]} <br />
                            {names.slice(1).join(" ")}</p>
                    </div>
                    <img src={profilepicture} alt='' className="round-image" />
                </div>
                <div className='tags-and-rating'>
                    <div className='tags'>
                        {tagsElements}
                    </div>
                    <div className='rating'>
                        {stars}
                    </div>
                </div>

                <div className='description-and-equipments'>
                    <div className='main-description'>
                        <div className='description'>
                            <p>Description</p>
                            <img src={arrow_up} alt='' id='description-arrow' className="arrow rotate-up" onClick={handleDescArrowClick} />
                        </div>
                        <p id="description-text" className='drop-down-text'>{description}</p>
                    </div>
                    <div className='main-equipments'>
                        <div className='equipments'>
                            <p>Équipements</p>
                            <img src={arrow_up} alt='' id='equipments-arrow' className="arrow rotate-up" onClick={handleEqArrowClick} />
                        </div>
                        <div id="equipments-text" className='drop-down-text'>{equipmentItems}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LocationPage;
