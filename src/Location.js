import React, { useEffect, useState } from 'react';
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

    useEffect(() => {
        if (!location) {
            navigate('/error');
        }
    }, [location, navigate]);
    if (!location) {
        return null; // or a loading spinner
    }

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
    // eslint-disable-next-line
    useEffect(() => {
        const imageCounterText = document.getElementById('image-counter-text');
        const imageContainer = document.querySelector('.location-img');
        const backArrow = document.getElementById('back-arrow');
        const forwardArrow = document.getElementById('forward-arrow');

        const handleBackArrowClick = () => {
            // eslint-disable-next-line
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

    // Add states for description and equipment visibility
    // eslint-disable-next-line
    const [isDescriptionVisible, setDescriptionVisible] = useState(false);
    // eslint-disable-next-line
    const [isEquipmentVisible, setEquipmentVisible] = useState(false);

    // Modify the arrow click handlers to update the state
    const handleDescArrowClick = () => {
        const arrowDesc = document.getElementById("description-arrow");

        if (arrowDesc.classList.contains("rotate-down")) {
            arrowDesc.classList.remove("rotate-down");
            arrowDesc.classList.add("rotate-up");
        } else {
            arrowDesc.classList.add("rotate-down");
            arrowDesc.classList.remove("rotate-up");
        }

        setDescriptionVisible(!isDescriptionVisible);
    };

    const handleEqArrowClick = () => {
        const arrowEq = document.getElementById("equipments-arrow");

        if (arrowEq.classList.contains("rotate-down")) {
            arrowEq.classList.remove("rotate-down");
            arrowEq.classList.add("rotate-up");
        } else {
            arrowEq.classList.add("rotate-down");
            arrowEq.classList.remove("rotate-up");
        }
        setEquipmentVisible(!isEquipmentVisible);
    };

    // Use the state to conditionally apply a CSS class
    const descriptionClass = isDescriptionVisible ? 'drop-down-text visible' : 'drop-down-text';
    const equipmentClass = isEquipmentVisible ? 'drop-down-text visible' : 'drop-down-text';

    return (
        <div className='padding-sides'>
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
                <div className='first-and-last-names desktop'>
                    <p className='name'>
                        {names[0]} <br />
                        {names.slice(1).join(" ")}</p>
                </div>
                <img src={profilepicture} alt='' className="round-image desktop" />
            </div>
            <div className='tags-and-rating'>
                <div className='tags'>
                    {tagsElements}
                </div>
                <div className='rating desktop'>
                    {stars}
                </div>
            </div>

            <div className='location-details'>
                <div className='rating mobile'>
                    {stars}
                </div>

                <div className='first-and-last-names mobile'>
                    <p className='name'>
                        {names[0]} <br />
                        {names.slice(1).join(" ")}</p>
                </div>
                <img src={profilepicture} alt='' className="round-image mobile" />
            </div>

            <div className='description-and-equipments'>
                <div className='main-description'>
                    <div className='description'>
                        <p>Description</p>
                        <img src={arrow_up} alt='' id='description-arrow' className="arrow rotate-up" onClick={handleDescArrowClick} />
                    </div>
                    <p id="description-text" className={descriptionClass}>{description}</p>
                </div>
                <div className='main-equipments'>
                    <div className='equipments'>
                        <p>Équipements</p>
                        <img src={arrow_up} alt='' id='equipments-arrow' className="arrow rotate-up" onClick={handleEqArrowClick} />
                    </div>
                    <div id="equipments-text" className={equipmentClass}>{equipmentItems}</div>
                </div>
            </div>
        </div>
    );
}

export default LocationPage;
