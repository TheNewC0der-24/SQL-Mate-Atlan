import { Box, Typography, List, ListItemButton, ListItem, ListItemText, Card, CardHeader, Button } from "@mui/material";

const PredefinedQuery = ({ setDefaults, setValue, selectedQuery, setSelectedQuery }) => {

  const queryValue = [
    {
      query: "select * from customers;",
      default: 1,
    },
    {
      query: "select * from products;",
      default: 2,
    },
    {
      query: "select * from suppliers;",
      default: 3,
    }
  ];



  return (
    <Card sx={{ borderRadius: "10px" }}>
      <CardHeader
        title="Available Queries"
        action={
          <Button
            variant="contained"
            size="small"
            sx={{
              bgcolor: "#000",
              color: "#fff",
              fontWeight: "bold",
              textTransform: "capitalize",
              "&:hover": {
                bgcolor: "#000",
              }
            }}
          >
            {
              selectedQuery === "" ? "Select Query" : selectedQuery
            }
          </Button>
        }
      />

      {queryValue.map((item, index) => (
        <Box>
          <List key={index}>
            <ListItem>
              <ListItemButton
                sx={{
                  bgcolor: selectedQuery === item.query ? "#000" : "#f5f5f5",
                  color: selectedQuery === item.query ? "#fff" : "#000",
                  "&:hover": {
                    bgcolor: selectedQuery === item.query ? "#000" : "#ccc",
                    color: selectedQuery === item.query ? "#fff" : "#000",
                  }
                }}
                onClick={() => {
                  setDefaults(item.default);
                  setValue(item.query);
                  setSelectedQuery(item.query);
                }}>
                <ListItemText primary={item.query} />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      ))}
    </Card>
  );
}

export default PredefinedQuery;
