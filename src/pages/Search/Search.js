import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import {getSearchCinemaData} from "../../redux/actions/entertainmentAction";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {createTheme, ThemeProvider} from "@mui/material";
import "./Search.css"
import SingleContent from "../../components/SingleContent/SingleContent";
import CustomPagination from "../../components/Pagination/CustomPagination";
import Loader from "../../Loader";

const Search = () => {

    const [isResult, setIsResult] = useState(false);

    const dispatch = useDispatch();

    const {search_cinema_data, searchCinemaNumberOfPage, loading, search_text, current_type, current_page} = useSelector(state=>state.entertainment);

    const [searchText, setSearchText] = useState(search_text);
    const [page, setPage] = useState(current_page);
    const [type, setType] = useState(current_type);

    useEffect(()=>{
        dispatch(getSearchCinemaData(type, searchText, page));
    },[]);

    const getSearchData = () =>{
        if (searchText !==""){
            dispatch(getSearchCinemaData(type, searchText, page));
            setIsResult(true);
        } else{
            alert("Fill in the search field !!!")
        }
    };

    useEffect(()=>{

        if (searchText!==""){
            dispatch(getSearchCinemaData(type, searchText, page));
            setIsResult(true);
            console.log("page uzgarsa");
        }

    },[page]);

    useEffect(()=>{
        if (searchText !==''){
            dispatch(getSearchCinemaData(type, searchText, page));
            setIsResult(true);
            console.log("type uzgarsa");
        }
    },[type]);

    const darkTheme = createTheme({
        palette: {
            type: "dark",
            primary: {
                main: "#ffffff"
            }
        }
    });

    return (
        <div className="container">

            <ThemeProvider theme={darkTheme}>

                <div style={{display: "flex", margin: "15px 0"}}>

                    <TextField
                        style={{flex: 1}}
                        className={"searchBox"}
                        label="Search"
                        variant="filled"
                        value={searchText}
                        onChange={(e)=>setSearchText(e.target.value)}
                    />

                    <Button
                        variant={"contained"}
                        style={{marginLeft: 10}}
                        onClick={()=>getSearchData()}>

                        <SearchIcon/>
                    </Button>

                </div>

                <Tabs
                    value={type}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={(event, newValue)=>{
                        setType(newValue);
                        setPage(1);
                    }}
                >
                    <Tab style={{width: "50%", color: "white"}} label="Search Movies"/>
                    <Tab style={{width: "50%", color: "white"}} label="Search TV Series"/>
                </Tabs>
            </ThemeProvider>


            {
                loading ? <Loader/> :
                    <div>
                        <div className="search-content mt-4">
                            <div className="row">

                                {
                                    search_cinema_data.length >= 1 ?

                                        search_cinema_data.map((item, index)=>(
                                            <div className="col-md-3" key={item.id}>
                                                <SingleContent
                                                    id={item.id}
                                                    poster={item.poster_path}
                                                    title={item.title || item.name}
                                                    date={item.first_air_date || item.release_date}
                                                    media_type={type ? "tv" : "movie"}
                                                    vote_average={item.vote_average}
                                                />
                                            </div> ))

                                        :

                                        isResult ?
                                            type ? <h2 className="no-description text-center mt-5">Not Series Found</h2> : <h2 className="text-center mt-5 no-description">Not Movies Found</h2>
                                            : ""
                                }

                            </div>
                        </div>


                        {
                            searchCinemaNumberOfPage > 1 ?

                                <CustomPagination page={page} setPage={setPage} numberOfPages={searchCinemaNumberOfPage}/>

                                : ""
                        }

                    </div>

            }


        </div>
    );
};

export default Search;