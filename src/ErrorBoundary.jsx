import { Container, Button, Typography } from "@mui/material";

export default function ErrorFallback({ error, resetErrorBoundary }) {
    return (
        <Container sx={{ mt: 5, mb: 5 }} maxWidth="lg">
            <Typography variant="h5">Something went wrong ☹️ </Typography>
            <pre style={{
                whiteSpace: 'normal',
                wordBreak: 'break-word',
            }}>{error.message}</pre>
            <Button variant="contained" color="secondary" onClick={resetErrorBoundary}>Try again</Button>
        </Container>
    )
}
