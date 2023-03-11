import React, {useEffect} from 'react';
import WhatShotIcon from '@mui/icons-material/Whatshot';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import FindReplaceIcon from '@mui/icons-material/FindReplace';
import {useHistory} from 'react-router-dom';
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import BottomNavigation from "@mui/material/BottomNavigation";
import "./Footer.css";

export default function Footer() {

    const [value, setValue] = React.useState(0);
    const history = useHistory();

    useEffect(()=>{
        if (value === 0) history.push('/');
        else if (value === 1) history.push('/movies');
        else if (value === 2) history.push('/series');
        else if (value === 3) history.push('/search');
    }, [value, history]);

    useEffect(()=>{

    },[]);

    return (
        <div className="footer">

            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                style={{
                    width: "100%",
                    position: "fixed",
                    bottom: "0",
                    backgroundColor: "#39445a",
                    ZIndex: 100,
                    height: "70px",
                    boxShadow: "1px 0px 5px black"
                }}
            >
                <BottomNavigationAction
                    label="Trending"
                    icon={<WhatShotIcon/>}
                    style={{color: "white"}}
                />
                <BottomNavigationAction
                    label="Movies"
                    icon={<MovieFilterIcon/>}
                    style={{color: "white"}}
                />
                <BottomNavigationAction
                    label="Series"
                    icon={<LiveTvIcon/>}
                    style={{color: "white"}}
                />
                <BottomNavigationAction
                    label="Search"
                    icon={<FindReplaceIcon/>}
                    style={{color: "white"}}
                />
            </BottomNavigation>
        </div>
    );
}

