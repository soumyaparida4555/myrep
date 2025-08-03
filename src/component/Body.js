import ResCard from "./ResCard";
import { card_Api_Url } from "../utills/constraint";
import { useEffect, useState } from "react";
import ShimmerUi from "./ShimmerUi";
import { Link } from "react-router-dom";



function Body()
{

  const [resChain,setresChain]=useState([]);
  const [dresChain,setdresChain]=useState([]);
  const [searchRes,setsearchRes]=useState(" ");


  useEffect(()=>{
           fetchData();
  },[])


  async function fetchData()
  {
          const ftch= await fetch(card_Api_Url);
          const jsn= await ftch.json();

          setresChain(jsn?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
          setdresChain(jsn?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);


  }




  if(resChain.length===0)
  {
    return <ShimmerUi/>
  }



    return(

        <div className="body-container">
         <h3 className="res-card-heading">Top restaurant chains in Mysore</h3>
         <input type="search" placeholder="search your restraurant" value={searchRes} onChange={(eve)=>{
            
            setsearchRes(eve.target.value);
         
         }}></input>
         <button onClick={()=>{
           const search=resChain.filter((fres)=>{
            return fres?.info?.name?.toLowerCase().includes(searchRes.toLowerCase());
           });

           setdresChain(search);

         }}>search</button>
         <button className="top-res-btn" onClick={()=>{
            const topRes=resChain.filter((tres)=>{
               return tres?.info?.avgRating>=4.5;
            });

            setdresChain(topRes);

         }}>TopResChain</button>
         <div className="card-container">
         {dresChain.map((res)=>{
          return <Link to={"/menu/"+res?.info?.id} key={res?.info?.id}><ResCard resList={res}  /> </Link>       

         })}

         </div>


        </div>
    )
}

export default Body;