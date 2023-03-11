export const useGenres = (selectedGenres) =>{
    if (selectedGenres < 1){
        return " "
    }
    const GenreID  = selectedGenres.map((g)=> g.id);
    return GenreID.reduce((acc, curr) => acc + "," + curr );
};



