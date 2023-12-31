import {
  Box,
  Button,
  Typography,
} from "@mui/material";

import toast, { Toaster } from "react-hot-toast";

import getTableData from "../../Util/GetTableData";

function Buttons({ setQuery, setValue, setHeaders, setRows, defaults, value, setSelectedQuery }) {

  const runQuery = () => {
    try {
      const { tableHeaders, tableRows } = getTableData(defaults);
      setQuery(value);
      setHeaders(tableHeaders);
      setRows(tableRows);
      setSelectedQuery(value);
      toast.success("Query executed successfully.");
    } catch (error) {
      toast.error(error.message);
    }

  };

  const reset = () => {
    setQuery("");
    setValue("");
    setHeaders([]);
    setRows([]);
    setSelectedQuery("");

    toast.success("Reset");
  };

  return (
    <>
      <Box mt={3} mb={2} sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.5rem", flexWrap: "wrap" }}>

        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Input
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <Button
            variant="outlined"
            onClick={reset}
            disabled={value === ""}
          >
            Reset
          </Button>
          <Button
            variant="contained"
            onClick={runQuery}
            disabled={value === ""}
          >
            Run Query
          </Button>
        </Box>
      </Box >

      <Toaster
        position="top-center"
        gutter={8}
        toastOptions={{
          duration: 3000,
          style: {
            fontFamily: "Roboto, sans-serif",
          }
        }}
      />

    </>
  );
}

export default Buttons;
