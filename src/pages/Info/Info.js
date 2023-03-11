import React, {useEffect} from 'react';
import {img_500, unavailable, unavailableLandscape} from "../../config/config";
import Button from "@mui/material/Button";
import YouTubeIcon from '@mui/icons-material/YouTube';
import Carousel from '../../components/Carousel/Carousel'
import "./Info.css"
import 'react-lazy-load-image-component/src/effects/blur.css';
import {useDispatch, useSelector} from "react-redux";
import {getSingleCinema, getSingleCinemaCredits, getSingleCinemaVideo} from "../../redux/actions/entertainmentAction";

export default function Info(props) {

    const {type, id} = props.match.params;

    const dispatch = useDispatch();

    const { singleCinema, singleCinemaVideo, singleCinemaCredits } = useSelector(state=>state.entertainment);

    useEffect(()=>{
        dispatch(getSingleCinema(type, id));
        dispatch(getSingleCinemaVideo(type, id));
        dispatch(getSingleCinemaCredits(type, id));
    },[type, id]);

    return (
        <div className="container">
            <div className="info-page">
                {
                    singleCinema && (

                        <div className="Content-info">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="img-box">
                                        <img  className="Content-info-portrait"
                                              src={singleCinema.poster_path ? `${img_500}/${singleCinema.poster_path}` : unavailable}
                                              alt={singleCinema.name || singleCinema.title}
                                        />
                                        <img  className="Content-info-landscape"
                                              src={singleCinema.backdrop_path ? `${img_500}/${singleCinema.backdrop_path}` : unavailableLandscape}
                                              alt={singleCinema.name || singleCinema.title}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="Content-info-about">
                                        <div>
                                            <div className="Content-info-title">
                                                {singleCinema.name || singleCinema.title}(
                                                {
                                                    (
                                                        singleCinema.first_air_date || singleCinema.release_date || "......"
                                                    ).substring(0,4)
                                                }
                                                )
                                            </div>

                                            {
                                                singleCinema.tagline && (
                                                    <div className="tagline">
                                                        <i>{singleCinema.tagline}</i>
                                                    </div>
                                                )
                                            }
                                        </div>


                                        <div className="Content-info-description">
                                            {singleCinema.overview ? singleCinema.overview : 'No description'}
                                        </div>


                                        {
                                            singleCinemaCredits.length > 1 ?
                                                <div>
                                                    <Carousel/>
                                                </div> : ""
                                        }


                                        <Button
                                            variant="contained"
                                            startIcon={<YouTubeIcon/>}
                                            color="secondary"
                                            target="_blank"
                                            href={`https://www.youtube.com/watch?v=${singleCinemaVideo}`}
                                            className="my-button"
                                        >
                                            Watch The Trailer
                                        </Button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
}