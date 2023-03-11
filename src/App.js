import React from 'react';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {Switch, Route} from "react-router-dom";
import Trending from "./pages/Trending/Trending";
import Movies from "./pages/Movies/Movies";
import Series from "./pages/Series/Series";
import Search from "./pages/Search/Search";
import "./App.css";
import Info from "./pages/Info/Info";


function App(props) {
    return (
        <>
            <Header/>
            <div className="App">
                <Switch>
                    <Route exact path="/" component={Trending}/>
                    <Route exact path="/movies" component={Movies}/>
                    <Route exact path="/series" component={Series}/>
                    <Route exact path="/search" component={Search}/>
                    <Route exact path="/info/:type/:id" component={Info}/>
                </Switch>
            </div>
            <Footer/>
        </>
    );
}

export default App;