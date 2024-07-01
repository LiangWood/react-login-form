import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar";
import Main from "./Main";
import "./App.css";
import { Box } from "@mui/material";

const App = () => {
    return (
        <Router>
            <Box sx={{ display: "flex", height: "100vh" }}>
                <Sidebar />
                <Box sx={{ flex: 1, padding: 2 }}>
                    <Routes>
                        <Route path="/home" element={<Main />} />
                        <Route path="/login" element={<Main />} />
                        <Route path="/" element={<Main />} />
                    </Routes>
                </Box>
            </Box>
        </Router>
    );
};

export default App;
