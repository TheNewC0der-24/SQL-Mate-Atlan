import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
    IconButton,
    Typography,
    MenuItem,
    Menu,
    Avatar,
    Divider,
    Stack,
    Box,
    Button
} from "@mui/material";

import { FaCircleUser } from 'react-icons/fa6';

import { styled, alpha } from "@mui/material/styles";

import { useAuth } from '../../../Context/AuthContext';

const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
        }}
        transformOrigin={{
            vertical: "top",
            horizontal: "right",
        }}
        {...props}
    />
))(({ theme }) => ({
    "& .MuiPaper-root": {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 220,
        color:
            theme.palette.mode === "light"
                ? "rgb(55, 65, 81)"
                : theme.palette.grey[300],
        boxShadow:
            "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
        "& .MuiMenu-list": {
            padding: "4px 0",
        },
        "& .MuiMenuItem-root": {
            "& .MuiSvgIcon-root": {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            "&:active": {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity
                ),
            },
        },
    },
}));

const Profile = () => {
    const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const { logout, currentUser } = useAuth();

    const handleLogout = () => {
        handleClose();
        logout();
        navigate("/login");
    };

    return (
        <>
            <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
            >
                <Avatar sx={{ width: 40, height: 40, bgcolor: "#000" }}>
                    {currentUser.email.charAt(0).toUpperCase()}
                </Avatar>
            </IconButton>
            <StyledMenu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem>
                    <Stack>
                        <Typography variant='subtitle1' color='text.primary' sx={{ fontWeight: 'bold', fontFamily: "Public Sans,sans-serif" }}>
                            Welcome
                        </Typography>
                        <Typography variant='subtitle2' color='text.secondary' sx={{ fontFamily: "Public Sans,sans-serif" }}>
                            {currentUser.email}
                        </Typography>
                    </Stack>
                </MenuItem>
                <Divider sx={{ my: 1 }} />
                <MenuItem onClick={() => {
                    handleClose();
                    navigate("/update-profile");
                }}>
                    <FaCircleUser style={{ marginRight: "0.5rem" }} />Profile
                </MenuItem>

                <Box sx={{ p: 2, pt: 2 }}>
                    <Button
                        size="small"
                        fullWidth
                        color="error"
                        variant="contained"
                        onClick={handleLogout}
                    >
                        Logout
                    </Button>
                </Box>
            </StyledMenu>
        </>
    );
};

export default Profile;