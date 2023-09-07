import { Box, Skeleton } from '@mui/material';

export default function LoadAnimations() {
    return (
        <Box>
            <Skeleton sx={{ height: "100px" }} />
            <Skeleton sx={{ height: "100px" }} />
            <Skeleton sx={{ height: "100px" }} />
            <Skeleton sx={{ height: "100px" }} />
            <Skeleton sx={{ height: "100px" }} />
        </Box>
    );
}