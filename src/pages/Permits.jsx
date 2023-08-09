import "../styles/components/tables.css"
import "../styles/pages/dashboard.css";
import ShowCards from "../components/cards";
import {MdBusinessCenter} from "react-icons/md";
import Table from "../components/table";
import Barchart from "../charts/Barchart";
import { PermitData } from "../data/Permit";
import { columns } from "../data/Permit";
import { useSelector } from "react-redux";


const Permits = () => {
  const permit = useSelector((state) => state.permit.permit);

  return (
    <div>
      <div className="mainCards">

      <ShowCards icon={<MdBusinessCenter style={{fontSize: '30px'}}/> } name="Permit Requests" numbers="2330" bg='light' percent={100}/>
      <ShowCards icon={<MdBusinessCenter style={{fontSize: '30px'}}/> } name="Granted Permits" numbers="1570" bg='normal' percent={56}/>
      <ShowCards icon={<MdBusinessCenter style={{fontSize: '30px'}}/> } name="Pending Permits" numbers="600" bg='light' percent={44}/>
      </div>

      <div className='table-containter'>
        <Table cols={columns} data={PermitData}/>

      </div>

      <div className="chart">
        <Barchart />
      </div>
    </div>
  );
};

export default Permits;
