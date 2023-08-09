import "../styles/components/tables.css"
import "../styles/pages/dashboard.css";
import ShowCards from "../components/cards";
import {MdPayments} from "react-icons/md";
import "../styles/pages/dashboard.css";
import Table from "../components/table";
import Barchart from "../charts/Barchart";
import { PaymentData } from "../data/payment";
import { columns } from "../data/payment";
import { useSelector } from "react-redux";


const Payments = () => {
  const payment = useSelector((state) => state.payment.payment);

  return (
    <div>
      <div className="mainCards">

      <ShowCards icon={<MdPayments style={{fontSize: '30px'}}/> }name="Payments" numbers="3000" bg='light' percent={100}/>
      <ShowCards icon={<MdPayments style={{fontSize: '30px'}}/> }name="Confirmed Payments" numbers="3000" bg='normal' percent={70}/>
      <ShowCards icon={<MdPayments style={{fontSize: '30px'}}/> }name="Pending Payments" numbers="3000" bg='light' percent={30}/>
      </div>

      <div className='table-containter'>
        <Table cols={columns} data={PaymentData}/>

      </div>

      <div className="chart">
        <Barchart />
      </div>
    </div>
  );
};

export default Payments;
