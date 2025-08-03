import { useEffect, useState } from "react";
import { menu_Api_Url } from "./constraint";

const useMenuRestaruant=(resId)=>
{

    const [MenuRestaruant,setMenuRestaruant]=useState([]);



    useEffect(()=>{
         fetchData();

    },[]);


    async function fetchData()
    {

     const ftchData= await fetch(menu_Api_Url+resId);

     const cjsn= await ftchData.json();

     setMenuRestaruant(cjsn?.data);


    }



    return MenuRestaruant 





}



export default useMenuRestaruant;