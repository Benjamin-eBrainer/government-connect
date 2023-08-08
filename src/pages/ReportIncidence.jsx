import '../styles/pages/dashboard.css'
import ShowCards from '../components/cards'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import AddBusinessTwoToneIcon from '@mui/icons-material/AddBusinessTwoTone';
import Table from '../components/table';
import RevenueChart from '../charts/RevenueChart';
import { IncidenceData } from "../data/Incidences";
import { columns } from "../data/Incidences";

const ReportIncidence = () => {
  return (
    <div>
      <div className="mainCards">
      <ShowCards icon={<LocalHospitalIcon/> }name="Reported Cases " numbers="3000"/>
      <ShowCards icon={<LocalParkingIcon/> }name="Cases solved" numbers="300"/>
      <ShowCards icon={<AddBusinessTwoToneIcon/> }name="pending" numbers="30"/>
      </div>

      <div>
        <Table cols={columns} data={IncidenceData}/>
      </div>

      <div className="chart">
        <RevenueChart/>
      </div>
    </div>
  )
}

export default ReportIncidence