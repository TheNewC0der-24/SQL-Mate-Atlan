import { useState, useEffect } from "react";

import { Box } from "@mui/material";

import MaterialTable from "@material-table/core";
import { ExportCsv } from "@material-table/exporters";

import LoadAnimations from "./LoadingAnimation";

function TableUI({ headers, rows, query }) {

  const [loading, setLoading] = useState(true);

  let title = "";

  switch (query) {
    case "select * from customers;":
      title = "Customers Data";
      break;
    case "select * from suppliers;":
      title = "Suppliers Data";
      break;
    case "select * from products;":
      title = "Products Data";
      break;
    default:
      title = "";
  }

  const columns = headers.map((header) => ({
    title: header,
    field: header,
    width: "15rem"
  }));

  const tableData = rows.map((row) => {
    let obj = {};
    for (let i = 0; i < headers.length; i++) {
      obj[headers[i]] = row[i];
    }
    return obj;
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [loading]);

  return (

    <Box mt={3} xs={12} sm={12} md={12} lg={12}>
      {
        loading ? (
          <LoadAnimations />
        ) : (
          <MaterialTable
            title={title}
            columns={columns}
            data={tableData}
            options={{
              actionsColumnIndex: -1,
              addRowPosition: "first",
              tableLayout: "fixed",
              columnsButton: true,
              headerStyle: { position: "sticky", fontWeight: "bold", fontSize: "1rem", backgroundColor: "#E9F2FF" },
              rowStyle: { fontFamily: "Roboto, sans-serif", fontSize: "0.9rem" },
              filtering: true,
              exportButton: true,
              exportMenu: [
                {
                  label: "Export CSV",
                  exportFunc: (cols, datas) => ExportCsv(cols, tableData, "Output")
                }
              ],
            }}
          />
        )
      }
    </Box>
  )
}

export default TableUI;
