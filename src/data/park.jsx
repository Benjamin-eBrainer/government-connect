const ParkData = [
  {
    id: 1,
    Phone: "+254712345678",
    Location: "Lavingtone",
    Date: "23-05-2023",
    Time: "0800Hrs",
  },
  {
    id: 2,
    Phone: "+254712345678",
    Location: "CBD",
    Date: "23-05-2023",
    Time: "0800Hrs",
  },
  {
    id: 3,
    Phone: "+254712345678",
    Location: "Lavingtone",
    Date: "23-05-2023",
    Time: "0800Hrs",
  },
  {
    id: 4,
    Phone: "+254712345678",
    Location: "Lavingtone",
    Date: "23-05-2023",
    Time: "0800Hrs",
  },
  {
    id: 5,
    Phone: "+254712345678",
    Location: "Lavingtone",
    Date: "23-05-2023",
    Time: "0800Hrs",
  },
  {
    id: 6,
    Phone: "+254712345678",
    Location: "Lavingtone",
    Date: "23-05-2023",
    Time: "0800Hrs",
  },
  {
    id: 7,
    Phone: "+254712345678",
    Location: "Lavingtone",
    Date: "23-05-2023",
    Time: "0800Hrs",
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
    field: "Phone",
    headerName: "Phone",
    width: 150,
    flex: 1,
    align: "center",
    headerAlign: "center",
    headerClassName: header,
  },
  {
    field: "Location",
    headerName: "Location",
    width: 100,
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
    headerName: "Time reported",
    width: 120,
    flex: 1,
    align: "center",
    headerAlign: "center",
    headerClassName: header,
  },
];

export { ParkData, columns };
