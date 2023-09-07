import customers from "../Data/customers.json";
import suppliers from "../Data/suppliers.json";
import products from "../Data/products.json";

export default function GetTableData(data) {

  let selectedData = null;

  switch (data) {
    case 1:
      selectedData = customers;
      break;
    case 2:
      selectedData = suppliers;
      break;
    case 3:
      selectedData = products;
      break;
    default:
      selectedData = null;
      break;
  }


  let tableHeaders = [];
  let tableRows = [];

  for (var i = 0; i < selectedData.length; i++) {
    const row = selectedData[i];
    if (i === 0) {
      for (const item in row) {
        tableHeaders.push(row[item]);
      }
    } else {
      let arr = [];
      for (const item in row) {
        arr.push(row[item]);
      }
      tableRows.push(arr);
    }
  }
  return { tableHeaders, tableRows };
}
