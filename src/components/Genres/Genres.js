import React, {useEffect, useState} from 'react';
import Chip from "@mui/material/Chip";
import {useDispatch, useSelector} from "react-redux";
import {setMoviesSelectedGenresData, setSeriesSelectedGenresData} from "../../redux/actions/entertainmentAction";
import {useGenres} from "../../hooks/UseGenres";

function Genres({setPage, type}) {

    const dispatch = useDispatch();

    const {movies_genres_data} = useSelector(state=>state.entertainment);

    const [selectedGenres, setSelectedGenres] = useState([]);
    const [genres, setGenres] = useState(movies_genres_data);

    const genreForUrl = useGenres(selectedGenres);

    const handleAdd = (genre) =>{
        setSelectedGenres([...selectedGenres, genre]);
        setGenres(genres.filter((g)=> g.id !== genre.id));
        setPage(1);
    };

    const handleRemove = (genre) =>{
        setSelectedGenres(
            selectedGenres.filter((selected)=> selected.id !== genre.id)
        );
        setGenres([...genres, genre]);
        setPage(1);
    };

    useEffect(()=>{
        if (type === "movie"){
            dispatch(setMoviesSelectedGenresData(genreForUrl));
        }
        else{
            dispatch(setSeriesSelectedGenresData(genreForUrl));
        }
    },[genreForUrl]);


    return (
        <div style={{padding: '6px 0'}}>
            {
                selectedGenres && selectedGenres.map((genre)=>(
                    <Chip
                        label={genre.name}
                        style={{
                            margin: 5,
                            backgroundColor: "#ffffff",
                            color: "#272f3e"
                        }}
                        size='large'
                        key={genre.id}
                        variant="outlined"
                        clickable
                        onDelete={()=>handleRemove(genre)}
                    />
                ))
            }
            {
                genres && genres.map((genre)=>(
                    <Chip
                        label={genre.name}
                        style={{
                            margin: 5,
                            backgroundColor: "#272f3e",
                            color: "#ffffff"
                        }}
                        size='large'
                        key={genre.id}
                        variant="outlined"
                        clickable
                        onClick={()=>handleAdd(genre)}
                    />
                ))
            }
        </div>
    );
}

export default Genres;