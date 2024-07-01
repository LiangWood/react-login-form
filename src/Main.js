import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./redux/actions";
import { useNavigate } from "react-router-dom";
import SelectMenu from "./SelectMenu";
import { Box, TextField, Button, Typography } from "@mui/material";

const Main = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const isAuthenticated = useSelector((state) => state.isAuthenticated);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = () => {
        dispatch(login(username, password));
        navigate("/home");
    };

    return (
        <Box
            sx={{
                padding: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            {!isAuthenticated && (
                <Typography variant="h6" sx={{ marginBottom: 2 }}>
                    公司資訊: 這是一個示例公司
                </Typography>
            )}
            <Box
                sx={{
                    width: "80%",
                    maxWidth: 400,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                {isAuthenticated ? (
                    <SelectMenu />
                ) : (
                    <Box
                        sx={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <TextField
                            label="使用者名稱"
                            variant="outlined"
                            fullWidth
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            sx={{ marginBottom: 2 }}
                        />
                        <TextField
                            label="密碼"
                            type="password"
                            variant="outlined"
                            fullWidth
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            sx={{ marginBottom: 2 }}
                        />
                        <Button
                            variant="contained"
                            fullWidth
                            onClick={handleLogin}
                        >
                            登入
                        </Button>
                    </Box>
                )}
            </Box>
        </Box>
    );
};

export default Main;
