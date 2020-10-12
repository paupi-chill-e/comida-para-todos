import React, {Fragment} from 'react';
import HeaderIntranet from '../components/intranetData/headerIntra';
import GetData from '../components/intranetData/getData';
import DataGridDemo from '../components/intranetData/intranetTable';


const IntranetPage = () =>{

    return(
        <Fragment>
            <HeaderIntranet/>
            <GetData/>
            <DataGridDemo/>
        </Fragment>
    );
}

export default IntranetPage;