import { useParams } from "react-router";
import { menu_Api_Url } from "../utills/constraint";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ShimmerUi from "./ShimmerUi";
import { menu_offer_logo } from "../utills/constraint";
import useMenuRestaruant from "../utills/useMenuRestaruant";


const MenuRestaruant=()=>{


    const {resId}=useParams();

    const MenuRestaruant=useMenuRestaruant(resId);

   

if(MenuRestaruant.length==0)
{
    return <ShimmerUi/>
}


    const {name,avgRating,totalRatingsString,costForTwoMessage,cuisines,areaName}=MenuRestaruant?.cards[2]?.card?.card?.info;
    const {slaString}=MenuRestaruant?.cards[2]?.card?.card?.info?.sla;
 
    const {offers}=MenuRestaruant?.cards[3]?.card?.card?.gridElements?.infoWithStyle;


return(
 
    <div className="menu-container">
    <h1>{name}</h1>
     <div className="menu-card">
        <h4>{avgRating} ({totalRatingsString}) {costForTwoMessage}</h4>
        <Link>{cuisines.join(",")}</Link>
        <h5>Outlet: {areaName}</h5>
        <h6>{slaString}</h6>


     </div>

     <h2>Deals for you</h2>

     <div className="menu-offer-card">
      {offers.map((off)=>{
        const{offerLogo,header,description,offerIds}=off?.info;
         return(
            <div className="offer-card" key={offerIds}>
            
            <img src={menu_offer_logo+offerLogo}></img>
            <h4>{header}</h4>
            <h5>{description}</h5>
            

            </div>
         )
      })}



     </div>


    </div>


)


}



export default MenuRestaruant;