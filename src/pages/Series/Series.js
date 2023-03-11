import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getMovies, getSeries} from "../../redux/actions/entertainmentAction";
import Loader from "../../Loader";
import CustomPagination from "../../components/Pagination/CustomPagination";
import SingleContent from "../../components/SingleContent/SingleContent";
import Genres from "../../components/Genres/Genres";

const Series = () => {

    const [page, setPage] = useState(1);
    const dispatch = useDispatch();

    const {series, seriesNumberOfPages, loading, series_selected_genres} = useSelector(state=>state.entertainment);

    useEffect(()=>{
        dispatch(getSeries(page, series_selected_genres));
    },[page, series_selected_genres]);

    return (
        <div className="container">

            <div className="pageTitle">Series</div>

            <Genres
                type="tv"
                setPage={setPage}
            />

            {
                loading ? <Loader/> :
                    <div>
                        <div className="movies">
                            <div className="row">


                                {
                                    series.length >= 1 ?

                                        series.map((item, index)=>(
                                            <div className="col-md-3" key={item.id}>
                                                <SingleContent
                                                    id={item.id}
                                                    poster={item.poster_path}
                                                    title={item.title || item.name}
                                                    date={item.first_air_date || item.release_date}
                                                    media_type="tv"
                                                    vote_average={item.vote_average}
                                                />
                                            </div> ))

                                        : <h1 className="text-center mt-5">Serial not found !!!</h1>
                                }

                            </div>
                        </div>


                        {
                            seriesNumberOfPages > 1 ?

                                <CustomPagination page={page} setPage={setPage} numberOfPages={seriesNumberOfPages}/>

                                : ""
                        }
                    </div>

            }

        </div>
    );
};

export default Series;