import {} from "react";
import ShowCards from "../components/cards";
import { BiSolidDashboard, BiSolidReport } from "react-icons/bi";
import { AiOutlineCar } from "react-icons/ai";
import {
  MdEmergencyShare,
  MdBusinessCenter,
  MdWorkspacesFilled,
  MdPayments,
  MdLogout,
} from "react-icons/md";
import "../styles/pages/dashboard.css";
import Barchart from "../charts/Barchart";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const emergency = useSelector((state) => state.emergency.emergency);
  const incidence = useSelector((state) => state.incidence.incidence);
  const parking = useSelector((state) => state.parking.parking);
  const payment = useSelector((state) => state.payment.payment);
  const permit = useSelector((state) => state.permit.permit);
  const publicSpaces = useSelector((state) => state.publicSpace.publicSpace);

  return (
    <div className="dashContainer">
      {/* cards */}
      <div className="mainCards">

      <ShowCards icon={<MdEmergencyShare style={{fontSize: '30px'}}/> } name="Emergency Services" numbers="3000" bg='normal' percent={100}/>
      <ShowCards icon={<AiOutlineCar style={{fontSize: '30px'}}/> } name="Parking services" numbers="2000" bg='light' percent={100}/>
      <ShowCards icon={<MdBusinessCenter style={{fontSize: '30px'}}/> } name="Business Parking" numbers="300" bg='normal' percent={100}/>
      <ShowCards icon={<BiSolidReport style={{fontSize: '30px'}}/> } name="Reported Incidences" numbers="400" bg='light' percent={100}/>
      <ShowCards icon={<MdWorkspacesFilled style={{fontSize: '30px'}}/> } name="Available Public Spaces" numbers="500" bg='normal' percent={100}/>
      <ShowCards icon={<MdPayments style={{fontSize: '30px'}}/> } name="Payments Made" numbers="1000" bg='light' percent={100}/>

      </div>

      {/* chart */}
      <div className="chart">
        <Barchart />
      </div>

      {/* chart 2 */}
      <div className="chart">
        <Barchart />
      </div>
    </div>
  );
};

export default Dashboard;
