import "../styles/pages/dashboard.css";
import ShowCards from "../components/cards";
import {MdWorkspacesFilled} from 'react-icons/md'
import Table from "../components/table";
import "../styles/components/tables.css";
import Barchart from "../charts/Barchart";
import { SpacesData } from "../data/Spaces";
import { columns } from "../data/Spaces";
import { useSelector } from "react-redux";


const PublicSpaces = () => {
  const publicSpaces = useSelector((state) => state.publicSpace.publicSpace);

  return (
    <div>
      <div className="mainCards">
        <ShowCards
          icon={<MdWorkspacesFilled style={{fontSize: '30px'}} />}
          name="Emergency Services"
          numbers="200"

          bg="normal"
          percent={100}

        />
        <ShowCards
          icon={<MdWorkspacesFilled style={{fontSize: '30px'}} />}
          name="Emergency Services"
          numbers="300"

          bg="light"
          percent={76}

        />
        <ShowCards
          icon={<MdWorkspacesFilled style={{fontSize: '30px'}} />}
          name="Emergency Services"
          numbers="30"
         bg="normal"
          percent={24}
        />
      </div>

      <div className='table-containter'>

        <Table cols={columns} data={SpacesData} />
      </div>

      <div className="chart">

        <Barchart />
      </div>
    </div>
  );
};

export default PublicSpaces;
