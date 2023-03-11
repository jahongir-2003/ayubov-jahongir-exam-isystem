import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {img_500, noPicture} from "../../config/config";
import "./Carousel.css";
import 'react-lazy-load-image-component/src/effects/blur.css';
import {useDispatch, useSelector} from "react-redux";

const handleDragStart = (e) => e.preventDefault();

const Carousel = () => {

    const { singleCinemaCredits } = useSelector(state=>state.entertainment);

    const dispatch = useDispatch();

    const items = singleCinemaCredits?.map((item)=>(
        <div className="carouselItem">
            <img
                src={item.profile_path ? `${img_500}/${item.profile_path}` : noPicture}
                alt={item?.name}
                onDragStart={handleDragStart}
                className={"carouselItem__img"}
            />
            <b className="carouselItem__text">{item?.name}</b>
        </div>
    ));

    const responsive = {
        0: {
            items: 1
        },
        512: {
            items: 2
        },
        768: {
            items: 3
        },
        1024: {
            items: 4
        }
    };

    return (
        <AliceCarousel
            autoPlay
            responsive={responsive}
            mouseTracking
            items={items}
            infinite
            disableDotsControls
            disableButtonsControls
            autoPlayInterval={800}
        />
    );
};

export default Carousel;