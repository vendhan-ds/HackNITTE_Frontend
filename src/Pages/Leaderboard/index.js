import { useEffect, useState } from "react";
import axios from 'axios';
import { HeaderTabs } from "../../Components/header";
const Home=()=>{
    cont [page,setPage]=useState('');

    const pageChange=(value)=>{
        setPage(value);
    }

    return (
        <div>
            <HeaderTabs></HeaderTabs>
            <Navbar onValueChange={pageChange}/>
        </div>
    )
}

return Home;