import React from 'react';
import {
    AppBar,
    Box,
    Toolbar,
    Stack,
    Typography,

} from '@mui/material'

import Profile from './Navtabs/Profile';

const Navbar = () => {

    return (
        <Box sx={{ display: 'flex', marginBottom: "6rem" }}>
            <AppBar position="fixed" sx={{ boxShadow: "none", bgcolor: "#e8e9eb", borderBottom: "1px solid #ccc" }}>
                <Toolbar>
                    <Box sx={{
                        color: 'black',
                        width: '100vw',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>

                        <Typography variant="h5">
                            SQL Mate
                        </Typography>

                        <Stack direction='row' style={{ display: "flex", justifyContent: "end", marginLeft: "auto" }}>
                            <Profile />
                        </Stack>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar;