import * as React from 'react';
import './App.css';
import HomePage from "./components/home/HomePage";
import {Route, Switch} from "react-router-dom";
import AboutPage from "./components/about/AboutPage";
import Header from "./components/common/Header";
import PageNotFound from "./components/PageNotFound";
import CoursePage from "./components/courses/CoursePage";

const App = () => {
    return (
        <div className='container-fluid'>
            <Header/>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/about" component={AboutPage}/>
                <Route exact path="/courses" component={CoursePage}/>
                <Route component={PageNotFound}/>
            </Switch>

        </div>
    );
};

export default App;