import { useEffect, useState } from "react";

import { Paper, Container, Grid } from "@mui/material";

import Navbar from "./Header/Navbar";
import PredefinedQuery from "../Components/PredefinedQuery";
import Buttons from "../Components/Common/Buttons";
import SqlEditor from "../Editor/SqlEditor";
import Table from "../Components/Table";

const Dashboard = () => {

    const [value, setValue] = useState("");
    const [rows, setRows] = useState([]);
    const [headers, setHeaders] = useState([]);
    const [query, setQuery] = useState("");
    const [defaults, setDefaults] = useState(1);
    const [selectedQuery, setSelectedQuery] = useState("");

    useEffect(() => {
        if (value.toLowerCase() === "select * from customers;") {
            setDefaults(1);
        } else if (value.toLowerCase() === "select * from suppliers;") {
            setDefaults(2);
        } else if (value.toLowerCase() === "select * from products;") {
            setDefaults(3);
        } else {
            setDefaults(0);
        }
    }, [value]);

    return (
        <>
            <Navbar />
            <Container maxWidth="xl" sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <PredefinedQuery
                            setValue={setValue}
                            setDefaults={setDefaults}
                            selectedQuery={selectedQuery}
                            setSelectedQuery={setSelectedQuery}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={8} lg={8}>
                        <Paper sx={{ bgcolor: "#fff", borderRadius: "10px", p: 2 }}>
                            <Buttons
                                setQuery={setQuery}
                                setHeaders={setHeaders}
                                setRows={setRows}
                                value={value}
                                setValue={setValue}
                                setDefaults={setDefaults}
                                defaults={defaults}
                                selectedQuery={selectedQuery}
                                setSelectedQuery={setSelectedQuery}
                            />
                            <SqlEditor value={value} setValue={setValue} />
                        </Paper>
                    </Grid>
                </Grid>
                <Table query={query} headers={headers} rows={rows} />
            </Container>
        </>
    )
}

export default Dashboard;
