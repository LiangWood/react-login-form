import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "./redux/actions";
import { Button, Box } from "@mui/material";

const Sidebar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate("/login");
    };

    return (
        <Box sx={{ width: 200, padding: 2, backgroundColor: "#f4f4f4" }}>
            <Button
                variant="contained"
                fullWidth
                onClick={() => navigate("/home")}
                sx={{ marginBottom: 1 }}
            >
                首頁
            </Button>
            <Button
                variant="contained"
                fullWidth
                onClick={() => navigate("/login")}
                sx={{ marginBottom: 1 }}
            >
                登入
            </Button>
            <Button variant="contained" fullWidth onClick={handleLogout}>
                登出
            </Button>
        </Box>
    );
};

export default Sidebar;
