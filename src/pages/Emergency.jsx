import "../styles/pages/dashboard.css";
import ShowCards from "../components/cards";
import {MdEmergencyShare} from "react-icons/md";
import Table from "../components/table";
import Barchart from "../charts/Barchart";
import { EmergencyData } from "../data/emergency";
import { columns } from "../data/emergency";

import "../styles/components/tables.css"

import { useDispatch, useSelector } from "react-redux";


const Emergency = () => {
  const emergency = useSelector((state) => state.emergency.emergency);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="mainCards">

      <ShowCards icon={<MdEmergencyShare style={{fontSize: '30px'}}/> } name="Emergency Services" numbers="300" percent={100} bg='light'/>
      <ShowCards icon={<MdEmergencyShare style={{fontSize: '30px'}}/> } name="Solved Emergencies" numbers="200" percent={80} bg='normal'/>
      <ShowCards icon={<MdEmergencyShare style={{fontSize: '30px'}}/> } name="Pending Emergency" numbers="20" percent={20} bg='light'/>
      </div>

      <div className='table-containter'>
        <Table cols={columns} data={EmergencyData}/>
      </div>

      <div className="chart">
        <Barchart />
      </div>
    </div>
  );
};

export default Emergency;
