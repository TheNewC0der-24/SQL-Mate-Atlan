import { Box, Typography } from "@mui/material";

import TableUI from "./Common/TableUI";

const Table = ({ query, headers, rows }) => {

  return (
    <Box>
      {query ? (
        <Box sx={{
          mt: 5,
          mb: 5,
          bgcolor: "#fff",
          borderRadius: "10px",
          p: 2,
        }}>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Output
          </Typography>
          <TableUI headers={headers} rows={rows} query={query} />

        </Box>
      ) : (
        <Box
          sx={{
            mt: 5,
            bgcolor: "#fff",
            borderRadius: "10px",
            p: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "200px",
          }}
        >
          <Typography variant="h5" color="#">
            Run the selected Query to see the output !!
          </Typography>
        </Box>
      )}
    </Box>
  );
}

export default Table;
