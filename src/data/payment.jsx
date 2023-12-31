const PaymentData = [
  {
    id: 1,
    Amount: "730",
    Type: "Mpesa",
    Date: "23-05-2023",
    Time: "0800Hrs",
    Status: "paid",
  },
  {
    id: 2,
    Amount: "730",
    Type: "Mpesa",
    Date: "23-05-2023",
    Time: "0800Hrs",
    Status: "paid",
  },
  {
    id: 3,
    Amount: "730",
    Type: "Mpesa",
    Date: "23-05-2023",
    Time: "0800Hrs",
    Status: "paid",
  },
  {
    id: 4,
    Amount: "730",
    Type: "Mpesa",
    Date: "23-05-2023",
    Time: "0800Hrs",
    Status: "paid",
  },
  {
    id: 5,
    Amount: "730",
    Type: "Mpesa",
    Date: "23-05-2023",
    Time: "0800Hrs",
    Status: "paid",
  },
  {
    id: 6,
    Amount: "730",
    Type: "Mpesa",
    Date: "23-05-2023",
    Time: "0800Hrs",
    Status: "paid",
  },
  {
    id: 7,
    Amount: "730",
    Type: "Mpesa",
    Date: "23-05-2023",
    Time: "0800Hrs",
    Status: "paid",
  },
];
const header = "column-label";

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 50,
    flex: 1,
    align: "center",
    headerAlign: "center",
    headerClassName: header,
  },
  {
    field: "Type",
    headerName: "Type",
    width: 150,
    flex: 1,
    align: "center",
    headerAlign: "center",
    headerClassName: header,
  },
  {
    field: "Amount",
    headerName: "Amount",
    width: 150,
    flex: 1,
    align: "center",
    headerAlign: "center",
    headerClassName: header,
  },
  {
    field: "Date",
    headerName: "Date",
    width: 100,
    flex: 1,
    align: "center",
    headerAlign: "center",
    headerClassName: header,
  },
  {
    field: "Time",
    headerName: "Time",
    width: 120,
    flex: 1,
    align: "center",
    headerAlign: "center",
    headerClassName: header,
  },
];

export { PaymentData, columns };
