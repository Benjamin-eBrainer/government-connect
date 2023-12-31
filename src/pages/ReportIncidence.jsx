import "../styles/pages/dashboard.css";
import ShowCards from "../components/cards";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import AddBusinessTwoToneIcon from "@mui/icons-material/AddBusinessTwoTone";
import Table from "../components/table";
import { IncidenceData } from "../data/Incidences";
import "../styles/components/tables.css";
import { columns } from "../data/Incidences";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchIncidence } from "../redux/reduxSlice/incidenceSlice";
import Linechart from "../charts/Linechart";

const ReportIncidence = () => {
  const incidence = useSelector((state) => state.incidence.incidence);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIncidence());
  }, [dispatch]);
  console.log(incidence);

  return (
    <div>
      <div className="mainCards">
        <ShowCards
          icon={<LocalHospitalIcon />}
          name="Reported Cases "
          numbers="3000"
          bg="light"
          percent={100}
        />
        <ShowCards
          icon={<LocalParkingIcon />}
          name="Cases solved"
          numbers="300"
          bg="normal"
          percent={55}
        />
        <ShowCards
          icon={<AddBusinessTwoToneIcon />}
          name="pending"
          numbers="30"
          bg="light"
          percent={45}
        />
      </div>

      <div className="table-containter">
        <Table cols={columns} data={incidence} />
      </div>

      <div className="chart">
        <Linechart />
      </div>
    </div>
  );
};

export default ReportIncidence;
