import React from "react";
import "./App.css";
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Navigation from "./components/Navigation";
import Detail from "./routes/Detail";

function App() {
    return (
        <HashRouter>
            <Navigation />
            <Route exact path="/about" component={About} />
            <Route exact path="/" component={Home} />
            <Route exact path="/movie-detail" component={Detail} />
        </HashRouter>
    );
}

export default App;
