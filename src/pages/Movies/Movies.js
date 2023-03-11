import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getMovies, getMoviesGenresData} from "../../redux/actions/entertainmentAction";
import Loader from "../../Loader";
import CustomPagination from "../../components/Pagination/CustomPagination";
import SingleContent from "../../components/SingleContent/SingleContent";
import Genres from "../../components/Genres/Genres";

const Movies = () => {

    const [page, setPage] = useState(1);
    const dispatch = useDispatch();

    const {movies, moviesNumberOfPages, loading, movies_selected_genres} = useSelector(state=>state.entertainment);

    useEffect(()=>{
        dispatch(getMovies(page, movies_selected_genres));
        dispatch(getMoviesGenresData('movie'));
    },[page, movies_selected_genres]);

    return (
        <div className="container">

            <div className="pageTitle">Movies</div>

            <Genres
                type="movie"
                setPage={setPage}
            />

            {
                loading ? <Loader/> :
                    <div>
                        <div className="movies">
                            <div className="row">


                                {
                                    movies.length >= 1 ?

                                        movies.map((item, index)=>(
                                            <div className="col-md-3" key={item.id}>
                                                <SingleContent
                                                    id={item.id}
                                                    poster={item.poster_path}
                                                    title={item.title || item.name}
                                                    date={item.first_air_date || item.release_date}
                                                    media_type="movie"
                                                    vote_average={item.vote_average}
                                                />
                                            </div> ))

                                        : <h1 className="text-center mt-5">Movie not found !!!</h1>
                                }

                            </div>
                        </div>


                        {
                            moviesNumberOfPages > 1 ?

                                <CustomPagination page={page} setPage={setPage} numberOfPages={moviesNumberOfPages}/>

                                : ""
                        }
                    </div>

            }

        </div>
    );
};

export default Movies;