import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./page/Home";
import About from "./page/About";
import Contact from "./page/Contact";
import Login from "./page/Login";

class App extends Component {
    render() {
        return (
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/about" element={<About />} />
                    <Route exact path="/contact" element={<Contact />} />
                    <Route exact path="/login" element={<Login />} />
                </Routes>
            </Router>
        )
    }
}

export default App