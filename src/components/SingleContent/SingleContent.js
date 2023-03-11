import React from 'react';
import {img_300, unavailable} from "../../config/config";
import Badge from "@mui/material/Badge";
import {useHistory} from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import "./SingleContent.css";

function SingleContent({id, poster, title, date, media_type, vote_average}) {

    const history = useHistory();

    return (
        <Fade bottom>
            <div className="media" onClick={() => history.push(`info/${media_type}/${id}`, {replace: true})}>
                <>
                    <Badge
                        badgeContent={vote_average}
                        color={vote_average > 6 ? 'primary' : 'secondary'}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'top',
                        }}
                    />

                    <LazyLoadImage
                        effect="blur"
                        className="poster"
                        src={poster ? `${img_300}/${poster}` : unavailable}
                        alt={title}/>

                    <b className="title">{title}</b>

                    <span className="subTitle">
                        <div className="category">
                          {
                              media_type === "tv" ? "TV Series" : "Movie"
                          }
                        </div>
                        <div className="date">{date}</div>
                    </span>

                </>
            </div>
        </Fade>

    );
}

export default SingleContent;