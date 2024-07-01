import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Box, MenuItem, Select, Typography } from "@mui/material";

const SelectMenu = () => {
    const [selectedTab, setSelectedTab] = useState("version");
    const username = useSelector((state) => state.username);
    const password = useSelector((state) => state.password);

    return (
        <Box
            sx={{
                marginTop: 2,
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <Select
                value={selectedTab}
                onChange={(e) => setSelectedTab(e.target.value)}
                fullWidth
                sx={{ marginBottom: 2, width: "50%" }}
            >
                <MenuItem value="version">版本號</MenuItem>
                <MenuItem value="credentials">登入資訊</MenuItem>
            </Select>
            <Box
                sx={{
                    width: "50%",
                    backgroundColor: "#f4f4f4",
                    padding: 2,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    borderRadius: 1,
                    boxShadow: 1,
                    textAlign: "center",
                }}
            >
                {selectedTab === "version" && (
                    <Typography variant="body1">版本號: 1.0.0</Typography>
                )}
                {selectedTab === "credentials" && (
                    <>
                        <Typography variant="body1" sx={{ marginBottom: 1 }}>
                            <Box component="span" fontWeight="fontWeightBold">
                                登入名稱:
                            </Box>{" "}
                            {username}
                        </Typography>
                        <Typography variant="body1">
                            <Box component="span" fontWeight="fontWeightBold">
                                密碼:
                            </Box>{" "}
                            {password}
                        </Typography>
                    </>
                )}
            </Box>
        </Box>
    );
};

export default SelectMenu;
